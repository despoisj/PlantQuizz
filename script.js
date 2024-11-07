// Define array of name and taxon key to populate
const species = [
    { name: "Charme", taxonKey: 2875770 },
    { name: "Hêtre", taxonKey: 2874875 },
    { name: "Orme", taxonKey: 2984510 },

    { name: "Chêne", taxonKey: 2878688 },
    { name: "Chêne Vert", taxonKey: 2879098 },
    { name: "Chêne Liège", taxonKey: 2879411 },

    { name: "Aubépine", taxonKey: 9220780 },
    { name: "Marronnier", taxonKey: 3189815 },
    { name: "Saule Pleureur", taxonKey: 5372639 },
    { name: "Prunier", taxonKey: 7931731 },
    { name: "Micocoulier", taxonKey: 2984492 },
    { name: "Liquidambar", taxonKey: 3152823 },
    { name: "Aulne Glutineux", taxonKey: 2876213 },
    { name: "Bouleau", taxonKey: 2875008 },
    { name: "Peuplier", taxonKey: 3040183 },
    { name: "Frêne", taxonKey: 3172323 },
    { name: "Néflier du Japon", taxonKey: 3024146 },
    { name: "Tilleuil", taxonKey: 3152041 },
    { name: "Cornouiller Sanguin", taxonKey: 3082234 },
    { name: "Cotoneaster", taxonKey: 3025563 },
    { name: "Arbre de Judée", taxonKey: 5353590 },
    { name: "Tulipier", taxonKey: 3152860 },
    { name: "Magnolia Grandiflora", taxonKey: 9605163 },
    { name: "Laurier Sauce", taxonKey: 3034015 },
    { name: "Noisetier", taxonKey: 2875967 },
    { name: "Arbousier", taxonKey: 2882796 },
    { name: "Olivier", taxonKey: 3172244 },
    { name: "Savonnier", taxonKey: 3190053 },

    { name: "Érable Sycomore", taxonKey: 3189870 },
    { name: "Érable Champêtre", taxonKey: 3189863 },
    { name: "Érable Argenté", taxonKey: 3189837 },
    { name: "Érable Negundo", taxonKey: 3189866 },
    { name: "Platane", taxonKey: 3152811 },

    { name: "Cyprès Chauve", taxonKey: 2684191 },
    { name: "Cèdre", taxonKey: 2685742 },
    { name: "Pin", taxonKey: 2684241 },

]

// Create inverse dict since we use taxonKey as key
var taxonToName = {}
species.forEach(speciesItem => {
    taxonToName[speciesItem.taxonKey] = speciesItem.name
});

const PLANTNET_DATASET_KEY = "7a3679ef-5582-4aaa-81f0-8c2545cafc81"
const PLANTNET_CROWD_DATASET_KEY = "14d5676a-2c54-4f94-9023-1e8dcd822aa0"

// Sort by name
species.sort((a, b) => a.name.localeCompare(b.name));

// Species selected by user for quizz
var selectedSpecies = null

// Current species taxon key
var taxonKey = ""

// Populate species selection buttons dynamically
$(document).ready(function() {
    const $speciesSelection = $('.species-selection');
    species.forEach(speciesItem => {
        const button = $('<button>')
            .addClass('species-button')
            .text(speciesItem.name)
            .addClass(["Charme", "Hêtre", "Orme"].includes(speciesItem.name) ? "selected" : "unselected")
            .attr('data-taxon', speciesItem.taxonKey)
            .on('click', function() {
                $(this).toggleClass('selected');
                $(this).toggleClass('unselected');
            });
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

    $("#reveal").click(function(event) {
        alert("Answer: " + taxonToName[taxonKey]);
    });
});

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

        const img = $('<img>').attr('src', result.media[index].identifier).attr('alt', 'Tree Image');
        img.css({
            width: '250px',
            height: '250px',
            objectFit: 'cover',
            borderRadius: '8px',
            margin: '10px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)'
        });

        // Click event to open the modal with the clicked image
        img.on('click', function() {
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
            alert("Failed to fetch images. Please try again.");
        }
    });
}

// Function to open the modal and display the selected image
function openModal(imageSrc) {
    $('#modal-image').attr('src', imageSrc);
    $('#image-modal').css('display', 'flex'); // Show the modal
}

// Function to close the modal
function closeModal() {
    $('#image-modal').css('display', 'none');
}

// Close the modal if clicked outside the image
$('#image-modal').on('click', function(event) {
    // Check if the click was outside the image content
    if (!$(event.target).is('#modal-image')) {
        closeModal();
    }
});
