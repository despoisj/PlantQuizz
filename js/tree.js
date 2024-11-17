// Global variables for image modal
var currentImageIndex = 0;
var currentImages = [];

$(document).ready(async function() {

    await loadSpecies();

    const urlParams = new URLSearchParams(window.location.search);
    const treeId = urlParams.get('id');
    
    if (!treeId) {
        window.location.href = 'essences.html';
        return;
    }

    // Find the tree in our data
    const tree = findTreeById(treeId);
    if (!tree) {
        window.location.href = 'essences.html';
        return;
    }

    // Update page title
    document.title = `${tree.commonName} - PlantQuizz`;

    // Populate tree information
    $('#treeName').text(tree.commonName);
    $('#latinName').text(tree.name);
    
    // Add alternate names if they exist
    if (tree.otherNames && tree.otherNames.length > 0) {
        const altNamesHtml = tree.otherNames
            .map((name, index) => {
                const isLast = index === tree.otherNames.length - 1;
                return `<span class="alt-name">${name}</span>${isLast ? '' : ', '}`;
            })
            .join('');

        $('#altNames').html(altNamesHtml);
    }

    // Add wiki link if it exists
    if (tree.wiki) {
        $('#wikiLink').attr('href', tree.wiki);
    } else {
        $('#wikiLink').hide();
    }

    // Fetch images
    fetchImagesGeneric(tree.taxonKey, 50, true, displayImages);
});

function findTreeById(taxonKey) {
    // Search in individual species
    let tree = allSpecies.find(species => 
        species.taxonKey && species.taxonKey.toString() === taxonKey
    );

    // If not found, search in families
    if (!tree) {
        allSpecies.forEach(item => {
            if (item.species) {
                const familyTree = item.species.find(
                    species => species.taxonKey.toString() === taxonKey
                );
                if (familyTree) tree = familyTree;
            }
        });
    }

    return tree;
}

function displayImages(data) {
    const $imagesContainer = $('#images-container');
    currentImages = [];

    // Get unique images
    const uniqueImages = new Set();
    data.results.forEach(result => {
        if (result.media && result.media[0]) {
            uniqueImages.add(result.media[0].identifier);
        }
    });

    // Convert Set to Array and shuffle
    currentImages = Array.from(uniqueImages);
    currentImages.sort(() => Math.random() - 0.5);

    // Display first 12 images
    const imagesToShow = currentImages.slice(0, 12);
    imagesToShow.forEach((imageUrl, index) => {
        const img = $('<img>')
            .attr('src', imageUrl)
            .attr('alt', 'Tree Image')
            .attr('data-index', index)
            .on('click', function() {
                currentImageIndex = $(this).data('index');
                openModal(imageUrl);
            });
        
        $imagesContainer.append(img);
    });
}

// Reuse your existing modal functions
function openModal(imageSrc) {
    $('#modal-image').attr('src', imageSrc);
    $('#image-modal').css('display', 'flex');
    
    $(document).on('keydown.modal', handleModalKeypress);
    $('#image-modal').on('click.modal', function(event) {
        if (!$(event.target).is('#modal-image')) {
            closeModal();
        }
    });
}

function closeModal() {
    $('#image-modal').css('display', 'none');
    $(document).off('keydown.modal');
    $('#image-modal').off('click.modal');
}

function handleModalKeypress(e) {
    switch(e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
            $('#modal-image').attr('src', currentImages[currentImageIndex]);
            break;
        case 'ArrowRight':
            e.preventDefault();
            currentImageIndex = (currentImageIndex + 1) % currentImages.length;
            $('#modal-image').attr('src', currentImages[currentImageIndex]);
            break;
        case 'Escape':
            closeModal();
            break;
    }
}