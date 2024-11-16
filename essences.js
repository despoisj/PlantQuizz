var percentData = null

function findPercentage(species) {

    // Find in json where species.latin matches "species"
    for (let i = 0; i < percentData.length; i++) {
        // Replace "a x b" by "a b"
        if (percentData[i].species === species.latin.replace(" x ", " ").replace(" × ", " ")) {
            return percentData[i].intraSpeciesPercentage
        }
    }

    // Not found
    return false   
}

$(document).ready(function() {

    $.getJSON("france_plants_percentages.json", function(data){
        percentData = data;
        populateSpecies();
    })

});

function populateSpecies() {
    const $speciesFamilies = $('#species-families');
    
    const individualSpecies = allSpecies.filter(species => 'taxonKey' in species);
    // Sort by name
    individualSpecies.sort((a, b) => a.name.localeCompare(b.name));

    let html = `
        <div class="species-category">
            <h2>Espèces Individuelles</h2>
            <div class="species-grid">
    `;
    
    individualSpecies.forEach(species => {
        html += createSpeciesCard(species);
    });
    
    html += '</div></div>';
    
    // Then add families
    const families = allSpecies.filter(species => !('taxonKey' in species));

    // Sort families by name
    families.sort((a, b) => a.familyName.localeCompare(b.familyName));
    
    families.forEach(family => {
        html += `
            <div class="species-category">
                <h2>${family.familyName}</h2>
                <div class="species-grid">
        `;
        
        family.species.forEach(species => {
            // Get the percentage of the family
            percentage = findPercentage(species);
            // Avoid weird families like laurier and sorbier
            // TODO fix with intra family proportion
            if (family.familyName == "Lauriers" || family.familyName == "Sorbiers"){
                html += createSpeciesCard(species);
            } else {
                html += createSpeciesCard(species, true, percentage);
            }
        });
        
        if (family.associates && family.associates.length > 0) {
            html += `<h3 class="associates-title">Espèces Associées</h3>`;
            family.associates.forEach(species => {
                html += createSpeciesCard(species);
            });
        }
        
        html += '</div></div>';
    });
    
    $speciesFamilies.html(html);
    
    // Add click handlers
    $('.species-button').on('click', function() {
        const taxonKey = $(this).data('taxon');
        window.location = `tree.html?id=${taxonKey}`;
    });
}

function createSpeciesCard(species, forcePercentage=false, percentage=false) {
    var percentageString = ""
    if (percentage || forcePercentage){
        if (!percentage){
            percentageString = " (<1%)"
        } else {
            percentageString = " (" + Math.floor(percentage) + "%)"
        }
    }

    var opacityString = ""
    if (percentage) {
        opacityString = 'style="border: 2px solid rgba(77, 201, 105,' + percentage / 100.0 + ')"'
    } else if (forcePercentage) {
        opacityString = 'style="border: 2px solid rgba(77, 201, 105,' + 1.0 / 100.0 + ')"'
    }

    return `
        <button ${opacityString} class="species-button unselected weighted" data-taxon="${species.taxonKey}">
            <span class="species-name">${species.name}${percentageString}</span>
            <span class="latin-name">${species.latin}</span>
        </button>
    `;
    
}