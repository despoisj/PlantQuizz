// Expand families
var simpleMode = true
var taxonToName = {} // Dict for mapping
var selectedSpecies = null // Species selected by user for quizz
var taxonKey = "" // Current species taxon key

// For the modal
var currentImageIndex = 0;
var currentImages = [];

// Populate species selection buttons dynamically
$(document).ready(function() {
    setup(simpleMode);

    $('#expertMode').on('change', function() {
        if ($(this).is(':checked')) {
            simpleMode = false;            
        } else {
            simpleMode = true;
        }
        setup(simpleMode);
    });
});

function setup(simple){
    species = expandFamilies(baseSpecies, simple)

    // Sort by name
    species.sort((a, b) => a.name.localeCompare(b.name));

    // Create inverse dict since we use taxonKey as key
    taxonToName = {}
    species.forEach(speciesItem => {
        taxonToName[speciesItem.taxonKey] = speciesItem.name
    });

    selectedSpecies = null // Species selected by user for quizz
    taxonKey = "" // Current species taxon key

    populateSelection(simple);

    if (!simple){
        $("#star").show()
    } else {
        $("#star").hide()
    }
}

function expandFamilies(species, simple){
    // In simple mode, expand to take main one,
    // otherwise take all of them
    var expandedSpecies = []

    species.forEach(speciesItem => {
        // If it's not a family
        if ("taxonKey" in speciesItem){
            expandedSpecies.push(speciesItem)
            return
        }

        // Family, If simple mode, take the main, else take all of them
        if (simple) {
            // Find main and give it a simpler name
            expandedSpecies.push({name: speciesItem.mainName, taxonKey: speciesItem.main.taxonKey})
        } else {
            speciesItem.species.forEach(subSpecies => {
                expandedSpecies.push(subSpecies)
            });
        }
    })

    return expandedSpecies;
}


function populateSelection(simple){
    // Populates selection with all species available
    // For complex there's a family with many sub species
    const $speciesSelection = $('.species-selection');

    // Clear in case of mode change
    $speciesSelection.empty();
    $("#metaButtons").empty();
    $("#metaButtons").html('<button class="metaSelection" id="selectAll">Tout Sélectionner</button>')

    species.forEach(speciesItem => {

        // Single species: create button with name and latin name
        const button = $('<button>')
            .addClass('species-button')
            .addClass((simple && ["Charme", "Hêtre", "Orme"].includes(speciesItem.name)) ? "selected" : "unselected")
            .attr('data-taxon', speciesItem.taxonKey)
            .attr('name', speciesItem.name)
            .on('click', function() {
                $(this).toggleClass('selected');
                $(this).toggleClass('unselected');
            });

        // Add main name in a span
        const nameSpan = $('<span>')
            .addClass('species-name')
            .text(speciesItem.name);


        // Add latin name in a span
        const latinSpan = $('<span>')
            .addClass('latin-name')
            .text(speciesItem.latin);

        // Append both spans to the button
        button.append(nameSpan);
        if (!simple) {
            button.append(latinSpan)
        }
        $speciesSelection.append(button);
    });

    var allOn = false;

    $("#selectAll").click(function(event) {
        allOn = !allOn;
        $(".species-button").each(function() {
            $(this).removeClass(allOn ? "unselected" : "selected");
            $(this).addClass(allOn ? "selected" : "unselected");
        });
    });

    // If complex mode, add family buttons
    if (!simple){
        baseSpecies.forEach(speciesItem => {
            if ("taxonKey" in speciesItem){
                return
            }

            const button = $('<button>')
            .addClass('metaSelection')
            .text(speciesItem.familyName) // TODO
            .addClass("unselected")
            .on('click', function() {
                // Select all sub species
                speciesItem.species.forEach(subSpecies => {
                    const button = $(`.species-button[data-taxon="${subSpecies.taxonKey}"]`)
                    button.toggleClass('selected');
                    button.toggleClass('unselected');
                });
                // Select associates
                speciesItem.associates.forEach(subSpecies => {
                    const button = $(`.species-button[name="${subSpecies.name}"]`)
                    button.toggleClass('selected');
                    button.toggleClass('unselected');
                });
            });
            $("#metaButtons").append(button);
        });

        // Add buttons for other collections
        collections.forEach(collection => {
        
            const button = $('<button>')
            .addClass('metaSelection')
            .text(collection.name) // TODO
            .addClass("unselected")
            .on('click', function() {
                // Select all species in collection
                collection.species.forEach(currSpecies => {
                    const button = $(`.species-button[name="${currSpecies.name}"]`)
                    button.toggleClass('selected');
                    button.toggleClass('unselected');
                });
            });
            $("#metaButtons").append(button);
        });
    }

    // Delete click handlers before adding
    $("#reveal").off('click');
    $("#reveal").click(function(event) {
        // Prevent
        alert("Réponse: " + taxonToName[taxonKey]);
    });
}




function reloadImages(){
    // GBIF API URL for fetching images based on the selected taxon key
    const apiUrl = `https://api.gbif.org/v1/occurrence/search?taxonKey=${taxonKey}&mediaType=StillImage&basisOfRecord=HUMAN_OBSERVATION&datasetKey=${PLANTNET_DATASET_KEY}&datasetKey=${PLANTNET_CROWD_DATASET_KEY}&month=4,10&limit=500`;

    // Make an AJAX request to fetch images
    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(data) {
            displayData(data)
        },
        error: function(error) {
            console.error("Error fetching images:", error);
            alert("Failed to fetch images. Please try again.");
        }
    });
}

async function displayData(data){
    // Displays and handles the data from the API

    // Clear previous images and answers
    const $imagesContainer = $('#images-container').empty();
    $('#images-container img').removeClass("greyish");

    currentImages = [];

    // Shuffle the observations
    var results = data.results;
    results.sort(() => Math.random() - 0.5);

    var barkFound = false;
    var nb_total = 0;

    // Display the images
    data.results.forEach(result => {

        // Hacky but should be very fast
        if (nb_total == 6){
            // Stop the loop
            return;
        }

        // Find how many images and of which parts in observation
        // Extensions is an array
        var extensions = result.extensions["http://rs.tdwg.org/ac/terms/Multimedia"]
        var subjectParts = extensions.map(function(extension) {
            return extension["http://rs.tdwg.org/ac/terms/tag"];
        });

        // Ideally we get 4 leaves and 1 bark, else random fruit flower ?
        // Only keep the index of leaves (or bark if already 5 leaves?)

        // To allow multiple chances
        var partFound = false

        if (!barkFound){
            // Try bark
            var index = subjectParts.indexOf("bark");
            if (index != -1){
                partFound = true;
                barkFound = true;
            } else {
                // Continue next iteration of forEach
                return;
            }
        } 

        // If no bark, go for leaf
        if (!partFound){
            var index = subjectParts.indexOf("leaf");
            if (index == -1){
                // Continue next iteration of forEach
                return;
            }
        };
        
        nb_total += 1;

        // Store the image URL in our array for modal
        currentImages.push(result.media[index].identifier);

        const img = $('<img>')
            .attr('src', result.media[index].identifier)
            .attr('alt', 'Tree Image')
            .attr('data-index', currentImages.length - 1)  // Store the index
            .css({
                width: '250px',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '8px',
                margin: '10px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)'
            });

        // Click event to open the modal with the clicked image
        img.on('click', function() {
            currentImageIndex = $(this).data('index');
            openModal(result.media[index].identifier);
        });

        $imagesContainer.prepend(img);
    });

}

function fetchImages() {
    // Get selected species taxon keys from selected buttons
    selectedSpecies = $('.species-button.selected').map(function() {
        return $(this).attr('data-taxon');
    }).get();

    if (selectedSpecies.length === 0) {
        alert("Please select at least one species.");
        return;
    }

    // Randomly pick one of the selected species
    taxonKey = selectedSpecies[Math.floor(Math.random() * selectedSpecies.length)];

    // GBIF API URL for fetching images based on the selected taxon key
    const apiUrl = `https://api.gbif.org/v1/occurrence/search?taxonKey=${taxonKey}&mediaType=StillImage&basisOfRecord=HUMAN_OBSERVATION&datasetKey=${PLANTNET_DATASET_KEY}&datasetKey=${PLANTNET_CROWD_DATASET_KEY}&month=4,10&limit=200`;

    // Make current images grayscale while new ones load
    $('#images-container img').addClass('greyish');

    // Hide section
    $("#speciesSelection").hide()
    $("#mainQuizz").show()

    // Make an AJAX request to fetch images
    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(data) {
            // Display images
            displayData(data);

            // Clear previous quiz options
            const $quizContainer = $('#quizz-container').empty();
            $('#quizz-result').text("");

            // Populate quiz options in #quizz-container
            selectedSpecies.forEach(speciesKey => {                
                // Find name in species with given taxonKey
                const speciesName = species.filter(item => "" + item.taxonKey === "" + speciesKey)[0].name

                const quizButton = $('<button>')
                    .text(speciesName)
                    .addClass('quizz-button')
                    .data('speciesKey', speciesKey)  // Store speciesKey as data on the button
                    .on('click', function() {
                         // Check if the selected speciesKey matches the taxonKey
                        const container = $('.container');
                        if (speciesKey === taxonKey) {
                            container.addClass('flash-correct');

                            // Remove the flash class after animation ends
                            setTimeout(() => {
                                // Scroll to the top of page smoothly
                                window.scrollTo({ top: 100, behavior: 'smooth' });

                                fetchImages(); // Skip to next one
                            }, 100);
                        } else {
                            container.addClass('flash-wrong');
                        }
                        // Remove the flash class after animation ends
                        setTimeout(() => {
                            container.removeClass('flash-correct flash-wrong');
                        }, 800);
                    });
                $('#quizz-container').append(quizButton);
            });
        },
        error: function(error) {
            console.error("Error fetching images:", error);
            console.error("Error taxonKey:", taxonKey)
            alert("Failed to fetch images. Please try again.");
        }
    });
}

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
    // Navitage fullscreen images
    switch(e.key) {
        case 'ArrowRight':
            e.preventDefault();
            currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
            $('#modal-image').attr('src', currentImages[currentImageIndex]);
            break;
        case 'ArrowLeft':
            e.preventDefault();
            currentImageIndex = (currentImageIndex + 1) % currentImages.length;
            $('#modal-image').attr('src', currentImages[currentImageIndex]);
            break;
        case 'Escape':
            closeModal();
            break;
    }
}
