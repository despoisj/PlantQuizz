$(document).ready(function() {
    populateSpecies();
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
    
    families.forEach(family => {
        html += `
            <div class="species-category">
                <h2>${family.familyName}</h2>
                <div class="species-grid">
        `;
        
        family.species.forEach(species => {
            html += createSpeciesCard(species);
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

function createSpeciesCard(species) {
    return `
        <button class="species-button unselected weighted" data-taxon="${species.taxonKey}">
            <span class="species-name">${species.name}</span>
            <span class="latin-name">${species.latin}</span>
        </button>
    `;
}