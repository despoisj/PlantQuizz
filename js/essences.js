
$(document).ready(async function() {

    // Load species
    await loadSpecies();
    populateSpecies(false);

    $('#tree-type-toggle').on('change', function() {
        // Change appearance of button
        if (this.checked){
            $("#feuillusLabel").removeClass("toggle-label-lightgreen")
            $("#resineuxLabel").addClass("toggle-label-darkgreen")
        } else {
           $("#feuillusLabel").addClass("toggle-label-lightgreen")
            $("#resineuxLabel").removeClass("toggle-label-darkgreen") 
        }
        populateSpecies(this.checked);
    });
})


function populateSpecies(showResineux=false) {
    // Show cards for feuillus or resineux

    const $speciesFamilies = $('#species-families');

    // Keep track of added species to not add them twice
    // Note that they can be in multiple families, that's ok
    var added = []
    var html = ""

    // Add families first
    const families = allSpecies.filter(species => !('taxonKey' in species));

    // Sort families by name
    families.sort((a, b) => a.familyName.localeCompare(b.familyName));
    
    families.forEach(family => {

        // Only select resineux or not
        if (family.resineux != showResineux){
            return
        }
        
        html += `
            <div class="species-category">
                <h2>${family.familyName.replace("*","")}</h2>
                <div class="species-grid">
        `;

        // Special case for fruitiers, sort by name
        if (family.familyName == "Arbres Fruitiers") {
            family.species.sort((a, b) => a.commonName.localeCompare(b.commonName));
        }
        
        family.species.forEach(species => {
            percentage = species.percentage;

            // Don't show percentage for fruitiers since it doesn't make sense
            var forcePercentage = family.familyName == "Arbres Fruitiers" ? false : true;
            var currPercentage = family.familyName == "Arbres Fruitiers" ? null : percentage;
            html += createSpeciesCard(species, forcePercentage, currPercentage);

            // Don't add to individual species later since it's already in a family
            added.push(species.name);
        });
        
        if (family.associates && family.associates.length > 0) {
            html += `<h3 class="associates-title">Espèces Associées</h3>`;
            family.associates.forEach(species => {
                html += createSpeciesCard(species);
            });
        }
        
        html += '</div></div>';
    });
    

    // Then individual if not already in families
    const individualSpecies = allSpecies.filter(species => 'taxonKey' in species);
    
    // Sort by name
    individualSpecies.sort((a, b) => a.commonName.localeCompare(b.commonName));

    html += `
        <div class="species-category">
            <h2>Espèces Individuelles</h2>
            <div class="species-grid">
    `;
    
    individualSpecies.forEach(species => {
        // Check if resineux or not
        if (LIST_OTHER_RESINEUX.includes(species.name) != showResineux) {
            return;
        }

        // Don't add twice if was already in family
        if (!added.includes(species.name)) {
            html += createSpeciesCard(species);
        }
    });
    
    html += '</div></div>';

    $speciesFamilies.html(html);
    
    
    // Add click handlers
    $('.species-button').on('click', function() {
        const taxonKey = $(this).data('taxon');
        window.location = `tree.html?id=${taxonKey}`;
    });

    rescaleText();
    // Call when window is resized
    $(window).on('resize', rescaleText);
}

function rescaleText() {
    // Add font resize
    $('.species-name.text-fit-scale').each(function() {
        // Only if window size > 768px
        // For latin name it's ellipsis
        const $text = $(this);
        const $container = $text.parent();
        
        // Reset any existing transform to get true width
        $text.css('transform', 'none');

        if ($(window).width() > 768) {            
            // Get the available width (container width minus padding)
            const containerWidth = $container.width() - 20; // 20px for left+right padding
            
            // Get the actual text width
            const textWidth = $text.get(0).scrollWidth;
            
            if (textWidth > containerWidth) {
                const scale = containerWidth / textWidth;
                // Center the scaled text
                const translateX = (containerWidth - (textWidth * scale)) / 2;
                $text.css('transform', `translateX(${translateX}px) scale(${scale})`);
            }
        }
    });
}

function createSpeciesCard(species, forcePercentage=false, percentage=false) {
    var percentageString = ""
    if (percentage || forcePercentage){
        if (percentage < 1.0){
            percentageString = "<1%"
        } else {
            if (percentage == 100) {
                percentage = 99.9
            }
            percentageString = "" + Math.floor(percentage) + "%"
        }
    }

    var opacityString = ""
    if (percentage) {
        opacityString = 'style="border: 2px solid rgba(77, 201, 105,' + (percentage * 0.6) / 100.0 + ')"'
    } else if (forcePercentage) {
        opacityString = 'style="border: 2px solid rgba(77, 201, 105,' + 1.0 / 100.0 + ')"'
    }

    // Look for image
    const simpleName = species.name.replace(" x ", "_").replace(" × ", "_").replace(" ","_").toLowerCase();
    var imgPath = `img/species/${simpleName}.jpg`;
    var inlinePercentageString = percentage ? `<span class="inline-percentage"> (${percentageString})</span>` : '';
    return `
        <button ${opacityString} class="species-button essence weighted" data-taxon="${species.taxonKey}">
            ${percentage ? `<span class="percentage-badge">${percentageString}</span>` : ''}
            <img class="card-img" src="${imgPath}"/>
            <span class="species-name text-fit-scale">${species.commonName}${inlinePercentageString}</span>
            <span class="latin-name short">${species.englishNames[0]}</span>
            <span class="latin-name short">${species.name}</span>
        </button>
    `;
    
}
