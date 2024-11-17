
$(document).ready(async function() {

    // Load species
    await loadSpecies();
    populateSpecies();
})


function populateSpecies() {
    const $speciesFamilies = $('#species-families');
    
    const individualSpecies = allSpecies.filter(species => 'taxonKey' in species);
    
    // Sort by name
    individualSpecies.sort((a, b) => a.commonName.localeCompare(b.commonName));

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
            percentage = species.percentage;
            html += createSpeciesCard(species, true, percentage);
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
        if (percentage < 1.0){
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
            <span class="species-name">${species.commonName}${percentageString}</span>
            <span class="latin-name">${species.name}</span>
        </button>
    `;
    
}