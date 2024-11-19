// Global variables for image modal
var currentImageIndex = 0;
var currentImages = [];

$(document).ready(async function() {

    await loadSpecies();

    // Sort enriched species for drop down
    enrichedSpecies.sort((a, b) => a.commonName.localeCompare(b.commonName));

    // Get the current tree
    // TODO compare param for 2nd
    const urlParams = new URLSearchParams(window.location.search);
    const treeId = urlParams.get('id');

    var tree = null
    var tree2 = null

    // Check if one or two, comma in parameter
    if (treeId.includes(',')) {
        const ids = treeId.split(',');
        tree = findTreeById(ids[0]);
        tree2 = findTreeById(ids[1]);

        // Update page title
        document.title = `${tree.commonName} vs ${tree2.commonName} - PlantQuizz`;

    } else {
        // Find the tree in our data
        tree = findTreeById(treeId);

        // Update page title
        document.title = `${tree.commonName} - PlantQuizz`;
    }

    populateTreeInfo(tree);

    if (tree2 != null){
        populateTreeInfo(tree2, true)

        // Setup display
        $("#tree1").css("width", "50%");
        $("#tree2").show()

        // Hide plus sign we're already at 2
        $("#plusSign").hide()

        // Hide alt names (quick and easy fix to have images line up)
        // Otherwise one side can be higher than the other
        // Or force height of smaller container?
        const h1 = $("#tree1 .tree-header").height();
        const h2 = $("#tree2 .tree-header").height();

        $("#tree1 .tree-header").height(Math.max(h1, h2));
        $("#tree2 .tree-header").height(Math.max(h1, h2));
    }


    // COMPARISON
    // Add to tree.js
    
    // Call after loading first tree
    initializeComparison();

});


function findTreeById(taxonKey) {
    // Helper
    return enrichedSpecies.find(species => species.taxonKey.toString() === taxonKey);
}

function initializeComparison() {
    // Sets up the dropdowns for comparison between the two species
    $('.speciesSelectDropdown').on('change', function() {
        // Get both ids from dropdown, and reload page
        const leftId = $("#treeName .speciesSelectDropdown").val();
        const rightId = $("#treeName2 .speciesSelectDropdown").val();

        if (rightId === undefined){
            window.location.href = `tree.html?id=${leftId}`;
        } else {
            window.location.href = `tree.html?id=${leftId},${rightId}`;
        }
    });
    }


function populateTreeInfo(tree, second=false){
    const suffix = second ? "2" : ""

    // Dynamically add dropdown with correct value
    var treeNameHtml = `
        <select class="speciesSelectDropdown">
            <option value="${tree.taxonKey}">${tree.commonName}</option>
            // List all possible options
            ${enrichedSpecies.map(tree =>  
                `<option value="${tree.taxonKey}">${tree.commonName}</option>`
            ).join('')}
        </select>
    `

    // If first and there's no second, add a plus to add a second
    if (!second) {
        treeNameHtml += `<a href="tree.html?id=${tree.taxonKey},${tree.taxonKey}" class="plus" id="plusSign">+</a>`
    }

    // If second, add a cross to reload page without second
    if (second) {
        treeNameHtml += `<a href="tree.html?id=${tree.taxonKey}" class="cross">✖</a>`
    }

    // Populate tree information
    $(`#treeName${suffix}`).html(treeNameHtml);
    $(`#latinName${suffix}`).text(tree.name);

    
    // Add alternate names if they exist
    if (tree.otherNames && tree.otherNames.length > 0) {
        const altNamesHtml = tree.otherNames
            .map((name, index) => {
                const isLast = index === tree.otherNames.length - 1;
                return `<span class="alt-name">${name}</span>${isLast ? '' : ', '}`;
            })
            .join('');

        $(`#altNames${suffix}`).html(altNamesHtml);
    } else {
        $(`#altNames${suffix}`).html('<span class="alt-name">(Pas de noms alternatifs)</span>');
    }

    // Add gbif link
    $(`#gbifLink${suffix}`).attr('href', "https://www.gbif.org/species/" + tree.taxonKey);
    
    // Fetch images
    fetchImagesGeneric(tree.taxonKey, 50, true, data => displayImages(data, second));
}

function displayImages(data, second=false) {
    const suffix = second ? "2" : ""

    const $imagesContainer = $(`#tree-images-container${suffix}`);
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
            .attr('alt', 'Photo de l\'arbre')
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