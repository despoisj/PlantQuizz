// TODO NEW MODEL
// SPECIES IS ONLY LATIN NAME (attention x )
// ONCE LISTS ARE DEFINED, ENRICH WITH INFO FROM JSON
// AND TRADUCTIONS
// For each species (that has only a name)
// Make an object with french name, latin name, taxonKey, nbOccurences, etc.
// Then we only use that, this will allow easy translation if wanted.


// Individual species
const SPECIES_CHARME = "Carpinus betulus";
const SPECIES_HETRE = "Fagus sylvatica";
const SPECIES_AUBEPINE = "Crataegus monogyna";
const SPECIES_MARRONNIER = "Aesculus hippocastanum";
const SPECIES_CHATAIGNIER = "Castanea sativa";
const SPECIES_SAULE_PLEUREUR = "Salix babylonica";
const SPECIES_PRUNIER = "Prunus domestica";
const SPECIES_MICOCOULIER = "Celtis australis";
const SPECIES_LIQUIDAMBAR = "Liquidambar styraciflua";
const SPECIES_AULNE_GLUTINEUX = "Alnus glutinosa";
const SPECIES_PEUPLIER = "Populus nigra";
const SPECIES_NEFLIER_DU_JAPON = "Eriobotrya japonica";
const SPECIES_COTONEASTER = "Cotoneaster horizontalis";
const SPECIES_ARBRE_DE_JUDEE = "Cercis siliquastrum";
const SPECIES_TULIPIER = "Liriodendron tulipifera";
const SPECIES_MAGNOLIA_GRANDIFLORA = "Magnolia grandiflora";
const SPECIES_NOISETIER = "Corylus avellana";
const SPECIES_ARBOUSIER = "Arbutus unedo";
const SPECIES_OLIVIER = "Olea europaea";
const SPECIES_SAVONNIER = "Koelreuteria paniculata";
const SPECIES_PLATANE = "Platanus × acerifolia";
const SPECIES_CYPRES_CHAUVE = "Taxodium distichum";
const SPECIES_CEDRE = "Cedrus";
const SPECIES_PIN = "Pinus";
const SPECIES_GINKOBILOBA = "Ginkgo biloba";
const SPECIES_CATALPA = "Catalpa bignonioides";
const SPECIES_LILAS_PERSE = "Melia azedarach";
const SPECIES_FIGUIER = "Ficus carica";

// Érable family
const SPECIES_ERABLE_SYCOMORE = "Acer pseudoplatanus";
const SPECIES_ERABLE_CHAMPETRE = "Acer campestre";
const SPECIES_ERABLE_ARGENTE = "Acer saccharinum";
const SPECIES_ERABLE_NEGUNDO = "Acer negundo";
const SPECIES_ERABLE_PLANE = "Acer platanoides";
const SPECIES_ERABLE_OBIER = "Acer opalus";
const SPECIES_ERABLE_MONTPELLIER = "Acer monspessulanum";

// Chêne family
const SPECIES_CHENE_PEDONCULE = "Quercus robur";
const SPECIES_CHENE_SESSILE = "Quercus petraea";
const SPECIES_CHENE_PUBESCENT = "Quercus pubescens";
const SPECIES_CHENE_VERT = "Quercus ilex";
const SPECIES_CHENE_LIEGE = "Quercus suber";
const SPECIES_CHENE_ROUGE = "Quercus rubra";

// Tilleul family
const SPECIES_TILLEUL_GRANDES_FEUILLES = "Tilia platyphyllos";
const SPECIES_TILLEUL_PETITES_FEUILLES = "Tilia cordata";
const SPECIES_TILLEUL_COMMUN = "Tilia × europaea";
const SPECIES_TILLEUL_ARGENTE = "Tilia tomentosa";

// Frêne
const SPECIES_FRENE_COMMUN = "Fraxinus excelsior";
const SPECIES_FRENE_FEUILLES_ETROITES = "Fraxinus angustifolia";
const SPECIES_FRENE_FLEURS = "Fraxinus ornus";

// Bouleaux
const SPECIES_BOULEAU = "Betula pendula";
const SPECIES_BOULEAU_PUBESCENT = "Betula pubescens";
const SPECIES_BOULEAU_NAIN = "Betula nana";
const SPECIES_BOULEAU_DORE = "Betula × aurata";

// Cornouillers
const SPECIES_CORNOUILLER_SANGUIN = "Cornus sanguinea";
const SPECIES_CORNOUILLER_MALE = "Cornus mas";

// Lauriers
const SPECIES_LAURIER_TIN = "Viburnum tinus";
const SPECIES_LAURIER_CERISE = "Prunus laurocerasus";
const SPECIES_LAURIER_SAUCE = "Laurus nobilis";
const SPECIES_LAURIER_ROSE = "Nerium oleander";
const SPECIES_LAURIER_PORTUGAL = "Prunus lusitanica";

// Ormes
const SPECIES_ORME_CHAMPETRE = "Ulmus minor";
const SPECIES_ORME_MONTAGNE = "Ulmus glabra";
const SPECIES_ORME_LISSE = "Ulmus laevis";
const SPECIES_ORME_HOLLANDE = "Ulmus × hollandica";

// Peuplier
const SPECIES_PEUPLIER_TREMBLE = "Populus tremula";
const SPECIES_PEUPLIER_NOIR = "Populus nigra";
const SPECIES_PEUPLIER_BLANC = "Populus alba";
const SPECIES_PEUPLIER_GRISARD = "Populus × canescens";
const SPECIES_PEUPLIER_CANADA = "Populus × canadensis";

// Sorbiers
const SPECIES_SORBIER_OISELEURS = "Sorbus aucuparia";
const SPECIES_ALISIER_BLANC = "Aria edulis";
const SPECIES_ALISIER_TORMINAL = "Torminalis glaberrima";
const SPECIES_ALISIER_MOUGEOT = "Hedlundia mougeotii";
const SPECIES_SORBIER_NAIN = "Chamaemespilus alpina";
const SPECIES_SORBIER_DOMESTIQUE = "Sorbus domestica";
const SPECIES_ALISIER_FONTAINEBLEAU = "Sorbus latifolia";

// Noyer
const SPECIES_NOYER = "Juglans regia";
const SPECIES_NOYER_AMERIQUE = "Juglans nigra";

// Fusains
const SPECIES_FUSAIN = "Euonymus europaeus";
const SPECIES_FUSAIN_LARGE = "Euonymus latifolius";
const SPECIES_FUSAIN_CHINE = "Euonymus fortunei";


// =================== TRANSLATIONS ================
// Note: this is necessary because they aren't provided 
// in the gbif dataset (which is consolidated into the .json file)

const latinToFrench = {
    [SPECIES_CHARME]: "Charme",
    [SPECIES_HETRE]: "Hêtre",
    [SPECIES_AUBEPINE]: "Aubépine",
    [SPECIES_MARRONNIER]: "Marronnier",
    [SPECIES_CHATAIGNIER]: "Châtaignier",
    [SPECIES_SAULE_PLEUREUR]: "Saule Pleureur",
    [SPECIES_PRUNIER]: "Prunier",
    [SPECIES_MICOCOULIER]: "Micocoulier",
    [SPECIES_LIQUIDAMBAR]: "Liquidambar",
    [SPECIES_AULNE_GLUTINEUX]: "Aulne Glutineux",
    [SPECIES_PEUPLIER]: "Peuplier",
    [SPECIES_NEFLIER_DU_JAPON]: "Néflier du Japon",
    [SPECIES_COTONEASTER]: "Cotoneaster",
    [SPECIES_ARBRE_DE_JUDEE]: "Arbre de Judée",
    [SPECIES_TULIPIER]: "Tulipier",
    [SPECIES_MAGNOLIA_GRANDIFLORA]: "Magnolia",
    [SPECIES_NOISETIER]: "Noisetier",
    [SPECIES_ARBOUSIER]: "Arbousier",
    [SPECIES_OLIVIER]: "Olivier",
    [SPECIES_SAVONNIER]: "Savonnier",
    [SPECIES_PLATANE]: "Platane",
    [SPECIES_CYPRES_CHAUVE]: "Cyprès Chauve",
    [SPECIES_CEDRE]: "Cèdre",
    [SPECIES_PIN]: "Pin",
    [SPECIES_GINKOBILOBA]: "Ginkgo",
    [SPECIES_CATALPA]: "Catalpa",
    [SPECIES_LILAS_PERSE]: "Lilas de Perse",
    [SPECIES_FIGUIER]: "Figuier",

    // Érables
    [SPECIES_ERABLE_SYCOMORE]: "Érable Sycomore",
    [SPECIES_ERABLE_CHAMPETRE]: "Érable Champêtre",
    [SPECIES_ERABLE_ARGENTE]: "Érable Argenté",
    [SPECIES_ERABLE_NEGUNDO]: "Érable Negundo",
    [SPECIES_ERABLE_PLANE]: "Érable Plane",
    [SPECIES_ERABLE_OBIER]: "Érable à Feuilles d'Obier",
    [SPECIES_ERABLE_MONTPELLIER]: "Érable de Montpellier",

    // Chênes
    [SPECIES_CHENE_PEDONCULE]: "Chêne Pédonculé",
    [SPECIES_CHENE_SESSILE]: "Chêne Rouvre/Sessile",
    [SPECIES_CHENE_PUBESCENT]: "Chêne Pubescent",
    [SPECIES_CHENE_VERT]: "Chêne Vert",
    [SPECIES_CHENE_LIEGE]: "Chêne Liège",
    [SPECIES_CHENE_ROUGE]: "Chêne Rouge d'Amérique",

    // Tilleuls
    [SPECIES_TILLEUL_GRANDES_FEUILLES]: "Tilleul à Grandes Feuilles",
    [SPECIES_TILLEUL_PETITES_FEUILLES]: "Tilleul à Petites Feuilles",
    [SPECIES_TILLEUL_COMMUN]: "Tilleul Commun",
    [SPECIES_TILLEUL_ARGENTE]: "Tilleul Argenté",

    // Frênes
    [SPECIES_FRENE_COMMUN]: "Frêne Commun",
    [SPECIES_FRENE_FEUILLES_ETROITES]: "Frêne à Feuilles Étroites",
    [SPECIES_FRENE_FLEURS]: "Frêne à Fleurs",

    // Bouleaux
    [SPECIES_BOULEAU]: "Bouleau Blanc",
    [SPECIES_BOULEAU_PUBESCENT]: "Bouleau Pubescent",
    [SPECIES_BOULEAU_NAIN]: "Bouleau Nain",
    [SPECIES_BOULEAU_DORE]: "Bouleau Doré",

    // Cornouillers
    [SPECIES_CORNOUILLER_SANGUIN]: "Cornouiller Sanguin",
    [SPECIES_CORNOUILLER_MALE]: "Cornouiller Mâle",

    // Lauriers
    [SPECIES_LAURIER_TIN]: "Laurier Tin",
    [SPECIES_LAURIER_CERISE]: "Laurier Cerise",
    [SPECIES_LAURIER_SAUCE]: "Laurier Sauce",
    [SPECIES_LAURIER_ROSE]: "Laurier Rose",
    [SPECIES_LAURIER_PORTUGAL]: "Laurier du Portugal",

    // Ormes
    [SPECIES_ORME_CHAMPETRE]: "Orme Champêtre",
    [SPECIES_ORME_MONTAGNE]: "Orme de Montagne",
    [SPECIES_ORME_LISSE]: "Orme Lisse",
    [SPECIES_ORME_HOLLANDE]: "Orme de Hollande",

    // Peupliers
    [SPECIES_PEUPLIER_TREMBLE]: "Peuplier Tremble",
    [SPECIES_PEUPLIER_NOIR]: "Peuplier Noir",
    [SPECIES_PEUPLIER_BLANC]: "Peuplier Blanc",
    [SPECIES_PEUPLIER_GRISARD]: "Peuplier Grisard",
    [SPECIES_PEUPLIER_CANADA]: "Peuplier du Canada",

    // Sorbiers
    [SPECIES_SORBIER_OISELEURS]: "Sorbier des Oiseleurs",
    [SPECIES_ALISIER_BLANC]: "Alisier Blanc",
    [SPECIES_ALISIER_TORMINAL]: "Alisier Torminal",
    [SPECIES_ALISIER_MOUGEOT]: "Alisier de Mougeot",
    [SPECIES_SORBIER_NAIN]: "Sorbier Nain",
    [SPECIES_SORBIER_DOMESTIQUE]: "Cormier",
    [SPECIES_ALISIER_FONTAINEBLEAU]: "Alisier de Fontainebleau",

    // Noyers
    [SPECIES_NOYER]: "Noyer",
    [SPECIES_NOYER_AMERIQUE]: "Noyer d'Amérique",

    // Fusains
    [SPECIES_FUSAIN]: "Fusain",
    [SPECIES_FUSAIN_LARGE]: "Fusain à Larges Feuilles",
    [SPECIES_FUSAIN_CHINE]: "Fusain de Chine",
};


// ================== ADDITIONAL METADATA ==================


// Additional taxon keys for missing or rare but notable species
const missingTaxonKeys = {
    [SPECIES_SAULE_PLEUREUR]: 5372639,
    [SPECIES_LIQUIDAMBAR]: 3152823,
    [SPECIES_GINKOBILOBA]: 2687885,
    [SPECIES_MAGNOLIA_GRANDIFLORA]: 9605163,
    [SPECIES_SAVONNIER]: 3190053,
    [SPECIES_PLATANE]: 3152811,
    [SPECIES_CEDRE]: 2685742,
    [SPECIES_PIN]: 2684241,
    [SPECIES_NEFLIER_DU_JAPON]: 3024146,
    [SPECIES_ERABLE_ARGENTE]: 3189837,
    [SPECIES_ERABLE_OBIER]: 7100278,
    [SPECIES_TILLEUL_ARGENTE]: 4259350,
    [SPECIES_BOULEAU_NAIN]: 5332004,
    [SPECIES_BOULEAU_DORE]: 5331763,
    [SPECIES_ORME_HOLLANDE]: 7141604,
    [SPECIES_SORBIER_DOMESTIQUE]: 3013215,
    [SPECIES_ALISIER_FONTAINEBLEAU]: 9306058,
    [SPECIES_FUSAIN_CHINE]: 3169137,

}


// ================== FAMILIES ==================

const FAMILY_ERABLES = {
    familyName: "Érables*",
    main: SPECIES_ERABLE_SYCOMORE,
    mainName: "Érable",
    species: [
        SPECIES_ERABLE_CHAMPETRE,
        SPECIES_ERABLE_SYCOMORE,
        SPECIES_ERABLE_PLANE,
        SPECIES_ERABLE_NEGUNDO,
        SPECIES_ERABLE_MONTPELLIER,
        SPECIES_ERABLE_ARGENTE,
        SPECIES_ERABLE_OBIER,
    ],
    associates: [
        SPECIES_ALISIER_TORMINAL,
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
        SPECIES_CHENE_PUBESCENT,
        SPECIES_CHENE_SESSILE,
        SPECIES_CHENE_VERT,
        SPECIES_CHENE_LIEGE,
        SPECIES_CHENE_ROUGE,

    ],
    associates: [
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

const FAMILY_LAURIERS = {
    familyName: "Lauriers",
    main: SPECIES_LAURIER_SAUCE,
    mainName: "Laurier",
    species: [
        SPECIES_LAURIER_TIN,
        SPECIES_LAURIER_CERISE,
        SPECIES_LAURIER_SAUCE,
        SPECIES_LAURIER_ROSE,
        SPECIES_LAURIER_PORTUGAL,
    ],
    associates: []
};

// Orme family
const FAMILY_ORMES = {
    familyName: "Ormes",
    main: SPECIES_ORME_CHAMPETRE,
    mainName: "Orme",
    species: [
        SPECIES_ORME_CHAMPETRE,
        SPECIES_ORME_MONTAGNE,
        SPECIES_ORME_LISSE,
        SPECIES_ORME_HOLLANDE,
    ],
    associates: []
};

// Peuplier family
const FAMILY_PEUPLIERS = {
    familyName: "Peupliers",
    main: SPECIES_PEUPLIER_TREMBLE,
    mainName: "Peuplier",
    species: [
        SPECIES_PEUPLIER_TREMBLE,
        SPECIES_PEUPLIER_NOIR,
        SPECIES_PEUPLIER_BLANC,
        SPECIES_PEUPLIER_GRISARD,
        SPECIES_PEUPLIER_CANADA,
    ],
    associates: []
};

// Bouleaux
const FAMILY_BOULEAUX = {
    familyName: "Bouleaux",
    main: SPECIES_BOULEAU,
    mainName: "Bouleau",
    species: [
        SPECIES_BOULEAU,
        SPECIES_BOULEAU_PUBESCENT,
        SPECIES_BOULEAU_NAIN,
        SPECIES_BOULEAU_DORE,
    ],
    associates: []
};

// Sorbier family
const FAMILY_SORBIERS = {
    familyName: "Sorbiers",
    main: SPECIES_SORBIER_OISELEURS,
    mainName: "Sorbier",
    species: [
        SPECIES_SORBIER_OISELEURS,
        SPECIES_ALISIER_BLANC,
        SPECIES_ALISIER_TORMINAL,
        SPECIES_ALISIER_MOUGEOT,
        SPECIES_SORBIER_NAIN,
        SPECIES_SORBIER_DOMESTIQUE,
        SPECIES_ALISIER_FONTAINEBLEAU,
    ],
    associates: []
};

// Fusains family
const FAMILY_FUSAINS = {
    familyName: "Fusains",
    main: SPECIES_FUSAIN,
    mainName: "Fusain",
    species: [
        SPECIES_FUSAIN,
        SPECIES_FUSAIN_LARGE,
        SPECIES_FUSAIN_CHINE,
    ],
    associates: []
};

// Noyers
const FAMILY_NOYERS = {
    familyName: "Noyers",
    main: SPECIES_NOYER,
    mainName: "Noyer",
    species: [
        SPECIES_NOYER,
        SPECIES_NOYER_AMERIQUE,
    ],
    associates: []
};


// ==================== MISC COLLECTIONS ====================


const COLLECTION_ORME_CHARME = {
    name: "Orme/Charme",
    species: [
        SPECIES_CHARME,
        SPECIES_ORME_CHAMPETRE,
    ],
};

const COLLECTION_ERABLE_AUBEPINE = {
    name: "Érable Champêtre/Aubépine",
    species: [
        SPECIES_ERABLE_CHAMPETRE,
        SPECIES_AUBEPINE,
    ],
};

// ==================== SPECIES LIST ====================

const baseSpeciesNames = [
    SPECIES_CHARME,
    SPECIES_HETRE,
    SPECIES_AUBEPINE,
    SPECIES_MARRONNIER,
    SPECIES_CHATAIGNIER,
    SPECIES_SAULE_PLEUREUR,
    SPECIES_PRUNIER,
    SPECIES_AULNE_GLUTINEUX,
    SPECIES_COTONEASTER,
    SPECIES_TULIPIER,
    SPECIES_MAGNOLIA_GRANDIFLORA,
    SPECIES_NOISETIER,
    SPECIES_OLIVIER,
    SPECIES_SAVONNIER,
    SPECIES_PLATANE,
    SPECIES_FIGUIER,

    // TODO RESINEUX
    // SPECIES_CYPRES_CHAUVE,
    // SPECIES_CEDRE,
    // SPECIES_PIN,

    FAMILY_ERABLES,
    FAMILY_CHENES,
    FAMILY_TILLEULS,
    FAMILY_FRENES,
    FAMILY_CORNOUILLERS,
    FAMILY_LAURIERS,
    FAMILY_ORMES,
    FAMILY_PEUPLIERS,
    FAMILY_FUSAINS,
    FAMILY_BOULEAUX, 
    FAMILY_NOYERS, 
];

// Species a bit less common
const harderSpeciesNames = [
    SPECIES_GINKOBILOBA,
    SPECIES_CATALPA,
    SPECIES_LIQUIDAMBAR,
    SPECIES_LILAS_PERSE,
    SPECIES_ARBOUSIER,
    SPECIES_ARBRE_DE_JUDEE,
    SPECIES_MICOCOULIER,
    SPECIES_NEFLIER_DU_JAPON,

    FAMILY_SORBIERS, 
]

const allSpeciesNames = baseSpeciesNames.concat(harderSpeciesNames);

function enrichSpecies(species, jsonData) {
    // This processes the list of all available species names
    // and enriches them with all available metadata

    const enriched = species.map(speciesName => {

        // If it's a rare species, use custom taxonKey and percentage
        if (speciesName in missingTaxonKeys) {
            return {
                name: speciesName,
                frenchName: latinToFrench[speciesName],
                taxonKey: missingTaxonKeys[speciesName],
                numberOfOccurrences: 1,
                percentage: 0.1,
            }
        }

        // Otherwise, fetch translation, and taxonKey, numberOfOccurences and percentage from jsonData
        const data = jsonData.find(d => d.species === speciesName.replace(" x ", " ").replace(" × ", " "));

        return {
            name: speciesName,
            frenchName: latinToFrench[speciesName],
            taxonKey: data.taxonKey,
            numberOfOccurrences: data.numberOfOccurrences,
            percentage: data.intraSpeciesPercentage,
        }
    });

    return enriched;
}


function recomputePercentage() {
    // Recompute percentage for Sorbiers and Lauriers 
    // which are a collection of species and not a real genus
    const families = allSpecies.filter(species => !('taxonKey' in species) && (species.familyName == "Lauriers" || species.familyName == "Sorbiers"));
    
    // For each family
    families.forEach(family => {
        // Find total number of occurences in family
        var total = 0
        family.species.forEach(species => {
            total += species.numberOfOccurrences
        });

        // Recompute percentage for each species
        family.species.forEach(species => {
            // Find in json where species.latin matches "species"
            species.percentage = species.numberOfOccurrences / total * 100
        });
    });
}


// Function to process a species list, handling both individual species and families
function processSpeciesList(speciesList, enrichedSpecies) {
    return speciesList.flatMap(item => {
        // Check if the item is a family dict, in which case
        // we replace "main" and all "species"
        if (item.constructor == Object) {
            // Process each species in the family, plus the main one
            item.main = enrichedSpecies.find(s => s.name === item.main);
            item.species = item.species.map(s => enrichedSpecies.find(e => e.name === s));
            item.associates = item.associates.map(s => enrichedSpecies.find(e => e.name === s));
            return item;
        } else {
            // Process individual species
            const enriched = enrichedSpecies.find(s => s.name === item);
            return enriched;
        }
    });
}

// Declare variables globally
let enrichedSpecies = [];
let baseSpecies = [];
let harderSpecies = [];
let allSpecies = [];
let collections = [
    COLLECTION_ORME_CHARME,
    COLLECTION_ERABLE_AUBEPINE,
]

async function loadSpecies(){
    // Enrich species with all available metadata (translation, dict, etc.)
    await $.getJSON("france_plants_percentages.json", function(jsonData){

        // First enrich everything without thinking about families
        // Easiest (but hacky) way is to use translation dict keys
        // This assumes they will always be all keys in the dict
        enrichedSpecies = enrichSpecies(Object.keys(latinToFrench), jsonData);

        // Enrich
        baseSpecies = processSpeciesList(baseSpeciesNames, enrichedSpecies);
        harderSpecies = processSpeciesList(harderSpeciesNames, enrichedSpecies);
        allSpecies = baseSpecies.concat(harderSpecies);

        collections = collections.map(collection => {
            return {
                name: collection.name,
                species: collection.species.map(s => enrichedSpecies.find(e => e.name === s))
            }
        });

        // Recompute percentages for fake families like Lauriers or Sorbiers
        recomputePercentage();
    });
}

