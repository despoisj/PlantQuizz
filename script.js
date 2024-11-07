// This will enable to change language in the future if needed
const SPECIES_CHARME = { name: "Charme", taxonKey: 2875770 };
const SPECIES_HETRE = { name: "Hêtre", taxonKey: 2874875 };
const SPECIES_ORME = { name: "Orme", taxonKey: 2984510 };
const SPECIES_AUBEPINE = { name: "Aubépine", taxonKey: 9220780 };
const SPECIES_MARRONNIER = { name: "Marronnier", taxonKey: 3189815 };
const SPECIES_SAULE_PLEUREUR = { name: "Saule Pleureur", taxonKey: 5372639 };
const SPECIES_PRUNIER = { name: "Prunier", taxonKey: 7931731 };
const SPECIES_MICOCOULIER = { name: "Micocoulier", taxonKey: 2984492 };
const SPECIES_LIQUIDAMBAR = { name: "Liquidambar", taxonKey: 3152823 };
const SPECIES_AULNE_GLUTINEUX = { name: "Aulne Glutineux", taxonKey: 2876213 };
const SPECIES_BOULEAU = { name: "Bouleau", taxonKey: 2875008 };
const SPECIES_PEUPLIER = { name: "Peuplier", taxonKey: 3040183 };
const SPECIES_NEFLIER_DU_JAPON = { name: "Néflier du Japon", taxonKey: 3024146 };
const SPECIES_COTONEASTER = { name: "Cotoneaster", taxonKey: 3025563 };
const SPECIES_ARBRE_DE_JUDEE = { name: "Arbre de Judée", taxonKey: 5353590 };
const SPECIES_TULIPIER = { name: "Tulipier", taxonKey: 3152860 };
const SPECIES_MAGNOLIA_GRANDIFLORA = { name: "Magnolia Grandiflora", taxonKey: 9605163 };
const SPECIES_LAURIER_SAUCE = { name: "Laurier Sauce", taxonKey: 3034015 };
const SPECIES_NOISETIER = { name: "Noisetier", taxonKey: 2875967 };
const SPECIES_ARBOUSIER = { name: "Arbousier", taxonKey: 2882796 };
const SPECIES_OLIVIER = { name: "Olivier", taxonKey: 3172244 };
const SPECIES_SAVONNIER = { name: "Savonnier", taxonKey: 3190053 };
const SPECIES_PLATANE = { name: "Platane", taxonKey: 3152811 };
const SPECIES_CYPRES_CHAUVE = { name: "Cyprès Chauve", taxonKey: 2684191 };
const SPECIES_CEDRE = { name: "Cèdre", taxonKey: 2685742 };
const SPECIES_PIN = { name: "Pin", taxonKey: 2684241 };

// Érable family
const SPECIES_ERABLE_SYCOMORE = { name: "Érable Sycomore", taxonKey: 3189870 };
const SPECIES_ERABLE_CHAMPETRE = { name: "Érable Champêtre", taxonKey: 3189863 };
const SPECIES_ERABLE_ARGENTE = { name: "Érable Argenté", taxonKey: 3189837 };
const SPECIES_ERABLE_NEGUNDO = { name: "Érable Negundo", taxonKey: 3189866 };

// Chêne family
const SPECIES_CHENE_PEDONCULE = { name: "Chêne Pédonculé", taxonKey: 2878688 };
const SPECIES_CHENE_SESSILE = { name: "Chêne Rouvre/Sessile", taxonKey: 7069116 };
const SPECIES_CHENE_PUBESCENT = { name: "Chêne Pubescent", taxonKey: 2881283 };
const SPECIES_CHENE_VERT = { name: "Chêne Vert", taxonKey: 2879098 };
const SPECIES_CHENE_LIEGE = { name: "Chêne Liège", taxonKey: 2879411 };

// Tilleul family (grandes feuilles; petites feuilles, commun et argenté)
const SPECIES_TILLEUL_GRANDES_FEUILLES = { name: "Tilleul à Grandes Feuilles", taxonKey: 3152048 };
const SPECIES_TILLEUL_PETITES_FEUILLES = { name: "Tilleul à Petites Feuilles", taxonKey: 3152047 };
const SPECIES_TILLEUL_COMMUN = { name: "Tilleul Commun", taxonKey: 3152046 };
const SPECIES_TILLEUL_ARGENTE = { name: "Tilleul Argenté", taxonKey: 4259350 };

// Frêne family
const SPECIES_FRENE_COMMUN = { name: "Frêne Commun", taxonKey: 3172358 };
const SPECIES_FRENE_FEUILLES_ETROITES = { name: "Frêne à Feuilles Étroites", taxonKey: 7325877 };
const SPECIES_FRENE_FLEURS = { name: "Frêne à Fleurs", taxonKey: 3172347 };

// Cornouillers family
const SPECIES_CORNOUILLER_SANGUIN = { name: "Cornouiller Sanguin", taxonKey: 3082234 };
const SPECIES_CORNOUILLER_MALE = { name: "Cornouiller Mâle", taxonKey: 3082263 };


const FAMILY_ERABLES = {
    familyName: "Érables",
    main: SPECIES_ERABLE_SYCOMORE,
    mainName: "Érable",
    species: [
        SPECIES_ERABLE_SYCOMORE,
        SPECIES_ERABLE_CHAMPETRE,
        SPECIES_ERABLE_ARGENTE,
        SPECIES_ERABLE_NEGUNDO
    ],
    associates: [
        SPECIES_LIQUIDAMBAR,
        SPECIES_PLATANE,
    ]
};

const FAMILY_CHENES = {
    familyName: "Chênes",
    main: SPECIES_CHENE_PEDONCULE,
    mainName: "Chêne",
    species: [
        SPECIES_CHENE_PEDONCULE,
        SPECIES_CHENE_SESSILE,
        SPECIES_CHENE_PUBESCENT,
    ],
    associates: [
        SPECIES_CHENE_VERT,
        SPECIES_CHENE_LIEGE,
    ]
};

const FAMILY_TILLEULS = {
    familyName: "Tilleuls",
    main: SPECIES_TILLEUL_GRANDES_FEUILLES,
    mainName: "Tilleul",
    species: [
        SPECIES_TILLEUL_GRANDES_FEUILLES,
        SPECIES_TILLEUL_PETITES_FEUILLES,
        SPECIES_TILLEUL_COMMUN,
        SPECIES_TILLEUL_ARGENTE,
    ],
    associates: [
    ]
};

const FAMILY_FRENES = {
    familyName: "Frênes",
    main: SPECIES_FRENE_COMMUN,
    mainName: "Frêne",
    species: [
        SPECIES_FRENE_COMMUN,
        SPECIES_FRENE_FEUILLES_ETROITES,
        SPECIES_FRENE_FLEURS,
    ],
    associates: [
    ]
};

const FAMILY_CORNOUILLERS = {
    familyName: "Cornouillers",
    main: SPECIES_CORNOUILLER_SANGUIN,
    mainName: "Cornouiller",
    species: [
        SPECIES_CORNOUILLER_SANGUIN,
        SPECIES_CORNOUILLER_MALE,
    ],
    associates: []
};

const COLLECTION_ORME_CHARME = {
    name: "Orme/Charme",
    species: [
        SPECIES_CHARME,
        SPECIES_ORME,
    ],
};

// Array containing all species for easy iteration
const baseSpecies = [
    SPECIES_CHARME,
    SPECIES_HETRE,
    SPECIES_ORME,
    SPECIES_CHENE_VERT,
    SPECIES_CHENE_LIEGE,
    SPECIES_AUBEPINE,
    SPECIES_MARRONNIER,
    SPECIES_SAULE_PLEUREUR,
    SPECIES_PRUNIER,
    SPECIES_MICOCOULIER,
    SPECIES_LIQUIDAMBAR,
    SPECIES_AULNE_GLUTINEUX,
    SPECIES_BOULEAU,
    SPECIES_PEUPLIER,
    SPECIES_NEFLIER_DU_JAPON,
    SPECIES_COTONEASTER,
    SPECIES_ARBRE_DE_JUDEE,
    SPECIES_TULIPIER,
    SPECIES_MAGNOLIA_GRANDIFLORA,
    SPECIES_LAURIER_SAUCE,
    SPECIES_NOISETIER,
    SPECIES_ARBOUSIER,
    SPECIES_OLIVIER,
    SPECIES_SAVONNIER,
    SPECIES_PLATANE,
    SPECIES_CYPRES_CHAUVE,
    SPECIES_CEDRE,
    SPECIES_PIN,

    FAMILY_ERABLES,
    FAMILY_CHENES,
    FAMILY_TILLEULS,
    FAMILY_FRENES,
    FAMILY_CORNOUILLERS,
];

const collections = [
    COLLECTION_ORME_CHARME,
]

const PLANTNET_DATASET_KEY = "7a3679ef-5582-4aaa-81f0-8c2545cafc81"
const PLANTNET_CROWD_DATASET_KEY = "14d5676a-2c54-4f94-9023-1e8dcd822aa0"

// Expand families
var simpleMode = false
var taxonToName = {} // Dict for mapping
var selectedSpecies = null // Species selected by user for quizz
var taxonKey = "" // Current species taxon key

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
    var taxonToName = {}
    species.forEach(speciesItem => {
        taxonToName[speciesItem.taxonKey] = speciesItem.name
    });

    selectedSpecies = null // Species selected by user for quizz
    taxonKey = "" // Current species taxon key

    populateSelection(simple);
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

        // Single species: create button
        const button = $('<button>')
        .addClass('species-button')
        .text(speciesItem.name)
        .addClass(["Charme", "Hêtre", "Orme"].includes(speciesItem.name) ? "selected" : "unselected")
        .attr('data-taxon', speciesItem.taxonKey)
        .attr('name', speciesItem.name)
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

    $("#reveal").click(function(event) {
        alert("Answer: " + taxonToName[taxonKey]);
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
