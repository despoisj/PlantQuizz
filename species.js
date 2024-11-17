// Individual species
const SPECIES_CHARME = "Carpinus betulus";
const SPECIES_HETRE = "Fagus sylvatica";
const SPECIES_MARRONNIER = "Aesculus hippocastanum";
const SPECIES_CHATAIGNIER = "Castanea sativa";
const SPECIES_SAULE_PLEUREUR = "Salix babylonica";
const SPECIES_PRUNIER = "Prunus domestica";
const SPECIES_LIQUIDAMBAR = "Liquidambar styraciflua";
const SPECIES_AULNE_GLUTINEUX = "Alnus glutinosa";
const SPECIES_COTONEASTER = "Cotoneaster horizontalis";
const SPECIES_ARBRE_DE_JUDEE = "Cercis siliquastrum";
const SPECIES_TULIPIER = "Liriodendron tulipifera";
const SPECIES_MAGNOLIA_GRANDIFLORA = "Magnolia grandiflora";
const SPECIES_NOISETIER = "Corylus avellana";
const SPECIES_ARBOUSIER = "Arbutus unedo";
const SPECIES_OLIVIER = "Olea europaea";
const SPECIES_SAVONNIER = "Koelreuteria paniculata";
const SPECIES_CYPRES_CHAUVE = "Taxodium distichum";
const SPECIES_CEDRE = "Cedrus";
const SPECIES_PIN = "Pinus";
const SPECIES_GINKOBILOBA = "Ginkgo biloba";
const SPECIES_CATALPA = "Catalpa bignonioides";
const SPECIES_LILAS_PERSE = "Melia azedarach";
const SPECIES_FIGUIER = "Ficus carica";

// Misc
const SPECIES_NEFLIER = "Mespilus germanica"; // TODO make a family with the two or just fruit trees?
const SPECIES_NEFLIER_DU_JAPON = "Eriobotrya japonica";

// Fruitiers
const POMMIER = "Malus domestica";
const POMMIER_SAUVAGE = "Malus sylvestris";

const POIRIER = "Pyrus communis";
const POIRIER_SAUVAGE = "Pyrus pyraster"; // TODO no plantnetdata...
const POIRIER_EPINEUX = "Pyrus spinosa";
const POIRIER_CORDE = "Pyrus cordata";

// Aubépines
const SPECIES_AUBEPINE = "Crataegus monogyna";
const SPECIES_AUBEPINE_EPINEUSE = "Crataegus laevigata";
const SPECIES_AUBEPINE_ESPAGNE = "Crataegus azarolus";

// Micocouliers
const SPECIES_MICOCOULIER = "Celtis australis";
const SPECIES_MICOCOULIER_OCCIDENTAL = "Celtis occidentalis";

// Platanes
const SPECIES_PLATANE = "Platanus × hispanica";
const SPECIES_PLATANE_ORIENT = "Platanus orientalis";
const SPECIES_PLATANE_OCCIDENT = "Platanus occidentalis";

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
// in the gbif dataset (the one consolidated into the .json file)

const latinToFrench = {
    [SPECIES_CHARME]: ["Charme", "Charme Commun", "Charmille"],
    [SPECIES_HETRE]: ["Hêtre"],
    [SPECIES_MARRONNIER]: ["Marronnier",  "Marronnier d'Inde", "Marronnier d'Europe", "Marronnier Blanc", "Châtaignier de Mer", "Marronnier Faux-Châtaignier", "Châtaignier des Chevaux"],
    [SPECIES_CHATAIGNIER]: ["Châtaignier", "Arbre à Pain", "Pain des Pauvres"],
    [SPECIES_SAULE_PLEUREUR]: ["Saule Pleureur"],
    [SPECIES_PRUNIER]: ["Prunier"],
    
    [SPECIES_LIQUIDAMBAR]: ["Liquidambar"],
    [SPECIES_AULNE_GLUTINEUX]: ["Aulne Glutineux", "Aulne Noir", "Aulne Poisseux", "Vergne", "Verne"],
    [SPECIES_COTONEASTER]: ["Cotoneaster"], // Note: there are 5 species, but it's not really a tree, good enough for now
    [SPECIES_ARBRE_DE_JUDEE]: ["Arbre de Judée", "Gainier Silicastre"],
    [SPECIES_TULIPIER]: ["Tulipier", "Arbre aux Lis"],
    [SPECIES_MAGNOLIA_GRANDIFLORA]: ["Magnolia", "Magnolia à Grandes Fleurs", "Magnolier à Grandes Fleurs", "Laurier-Tulipier"],
    [SPECIES_NOISETIER]: ["Noisetier", "Coudriers", "Aveliniers"],
    [SPECIES_ARBOUSIER]: ["Arbousier", "Arbre à Fraises"],
    [SPECIES_OLIVIER]: ["Olivier"],
    [SPECIES_SAVONNIER]: ["Savonnier", "Savonnier de Chine", "Bois de Panama", "Arbre aux Lanternes", "Arbre à Pluie d'Or", "Mimosa d'Été", "Lampions de Chine"],
    [SPECIES_CYPRES_CHAUVE]: ["Cyprès Chauve"],
    [SPECIES_GINKOBILOBA]: ["Ginkgo", "Arbre aux Quarante Écus", "Arbre aux Abricots d'Argent"],
    [SPECIES_CATALPA]: ["Catalpa", "Catalpa Commun", "Arbre aux Haricots", "Catalpa Boule"],
    [SPECIES_LILAS_PERSE]: ["Lilas de Perse", "Margousier à Feuilles de Frêne", "Mélia Faux-Neem"],
    [SPECIES_FIGUIER]: ["Figuier", "Figuier Comestible", "Figuier Commun", "Figuier de Carie", "Arbre à Cariques", "Figuier sauvage (♂)", "Caprifiguier (♂)", "Figuier de Bouc (♂)"],

    // Nefliers
    [SPECIES_NEFLIER]: ["Néflier", "Néflier d'Allemagne", "Mêlier", "Mespoulo", "Nesplier"],
    [SPECIES_NEFLIER_DU_JAPON]: ["Néflier du Japon", "Bibacier", "Bibassier"],

    // Fruitiers
    [POMMIER_SAUVAGE]: ["Pommier Sauvage", "Boquettier", "Pommier des Bois"],
    [POMMIER]: ["Pommier Domestique", "Pommier Commun"],
    [POIRIER_SAUVAGE]: ["Poirier Sauvage"],
    [POIRIER]: ["Poirier Commun"],
    [POIRIER_EPINEUX]: ["Poirier Épineux", "Poirier à Feuilles d'Amandier"],
    [POIRIER_CORDE]: ["Poirier à Feuilles en Cœur", "Poirasse"], //TODO


    // Resineux
    [SPECIES_CEDRE]: ["Cèdre"],
    [SPECIES_PIN]: ["Pin"],

    // Aubépines
    [SPECIES_AUBEPINE]: ["Aubépine Monogyne", "Aubépine à Un Style"],
    [SPECIES_AUBEPINE_EPINEUSE]: ["Aubépine Lisse", "Aubépine à Deux Styles", "Aubépine Épineuse"],
    [SPECIES_AUBEPINE_ESPAGNE]: [ "Azérolier", "Azarolier", "Épine d'Espagne", "Pommette"],

    // Platanes
    [SPECIES_PLATANE]: ["Platane Commun", "Platane à Feuilles d'Érable"],
    [SPECIES_PLATANE_ORIENT]: ["Platane d'Orient"],
    [SPECIES_PLATANE_OCCIDENT]: ["Platane d'Amérique", "Platane Occidental", "Sycamore"],

    // Micocouliers
    [SPECIES_MICOCOULIER]: ["Micocoulier de Provence", "Micocoulier du Midi"],
    [SPECIES_MICOCOULIER_OCCIDENTAL]: ["Micocoulier Occidental", "Micocoulier de Virginie"],

    // Érables
    [SPECIES_ERABLE_SYCOMORE]: ["Érable Sycomore"],
    [SPECIES_ERABLE_CHAMPETRE]: ["Érable Champêtre"],
    [SPECIES_ERABLE_ARGENTE]: ["Érable Argenté"],
    [SPECIES_ERABLE_NEGUNDO]: ["Érable Negundo"],
    [SPECIES_ERABLE_PLANE]: ["Érable Plane"],
    [SPECIES_ERABLE_OBIER]: ["Érable à Feuilles d'Obier"],
    [SPECIES_ERABLE_MONTPELLIER]: ["Érable de Montpellier"],

    // Chênes
    [SPECIES_CHENE_PEDONCULE]: ["Chêne Pédonculé", "Chêne Blanc", "Chêne Femelle", "Gravelin", "Chêne à Grappe", "Châgne"],
    [SPECIES_CHENE_SESSILE]: ["Chêne Rouvre", "Chêne Sessile", "Chêne à Trochets", "Chêne des Pierriers", "Chêne Mâle", "Chêne Noir", "Drille", "Drillar", "Durelin"],
    [SPECIES_CHENE_PUBESCENT]: ["Chêne Pubescent", "Chêne Blanc de Provence"],
    [SPECIES_CHENE_VERT]: ["Chêne Vert", "Yeuse", "Chêne Faux-Houx"],
    [SPECIES_CHENE_LIEGE]: ["Chêne Liège", "Corsier", "Surier", "Suve"],
    [SPECIES_CHENE_ROUGE]: ["Chêne Rouge d'Amérique"],

    // Tilleuls
    [SPECIES_TILLEUL_GRANDES_FEUILLES]: ["Tilleul à Grandes Feuilles"],
    [SPECIES_TILLEUL_PETITES_FEUILLES]: ["Tilleul à Petites Feuilles",  "Tilleul des Bois", "Tilleul à Feuilles en Cœur"],
    [SPECIES_TILLEUL_COMMUN]: ["Tilleul Commun"],
    [SPECIES_TILLEUL_ARGENTE]: ["Tilleul Argenté", "Tilleul de Hongrie"],

    // Frênes
    [SPECIES_FRENE_COMMUN]: ["Frêne Commun", "Frêne d'Europe", "Frêne Élevé", "Frêne à Feuilles Aiguës", "Gaïac des Allemands", "Grand Frêne", "Langue d'Oiseau", "Quinquina d'Europe"],
    [SPECIES_FRENE_FEUILLES_ETROITES]: ["Frêne à Feuilles Étroites", "Frêne du Midi", "Frêne Oxyphylle"],
    [SPECIES_FRENE_FLEURS]: ["Frêne à Fleurs", "Orne", "Frêne à Manne", "Frêne Orne", "Orne d'Europe"],

    // Bouleaux
    [SPECIES_BOULEAU]: ["Bouleau Verruqueux", "Bouleau Blanc", "Bouleau d'Europe", "Bouleau blanc d'Europe"],
    [SPECIES_BOULEAU_PUBESCENT]: ["Bouleau Pubescent"],
    [SPECIES_BOULEAU_DORE]: ["Bouleau Doré"],

    // Cornouillers
    [SPECIES_CORNOUILLER_SANGUIN]: ["Cornouiller Sanguin", "Bois Puant", "Pois Punais", "Cornouiller Femelle", "Olivier de Normandie", "Puègne Blanche", "Sanguin", "Sanguine"],
    [SPECIES_CORNOUILLER_MALE]: ["Cornouiller Mâle", "Cornier", "Fuselier"],

    // Lauriers
    [SPECIES_LAURIER_TIN]: ["Laurier Tin", "Viorne Tin" ,"Laurentin"],
    [SPECIES_LAURIER_CERISE]: ["Laurier Cerise", "Laurier de Trébizonde", "Laurier-Amande", "Laurier-Palme", "Laurelle"],
    [SPECIES_LAURIER_SAUCE]: ["Laurier Sauce", "Laurier Noble", "Laurier Vrai", "Laurier d'Appolon"],
    [SPECIES_LAURIER_ROSE]: ["Laurier Rose", "Oléandre", "Rosage", "Nérion", "Lauraine"],
    [SPECIES_LAURIER_PORTUGAL]: ["Laurier du Portugal", "Prunier du Portugal"],

    // Ormes
    [SPECIES_ORME_CHAMPETRE]: ["Orme Champêtre", "Ormeau", "Petit Orme", "Ipréau", "Orme Cilié", "Yvet"],
    [SPECIES_ORME_MONTAGNE]: ["Orme de Montagne", "Orme Blanc", "Orme Glabre"],
    [SPECIES_ORME_LISSE]: ["Orme Lisse", "Orme Pédonculé"],
    [SPECIES_ORME_HOLLANDE]: ["Orme de Hollande"],

    // Peupliers
    [SPECIES_PEUPLIER_TREMBLE]: ["Peuplier Tremble", "Tremble", "Tremble d'Europe"],
    [SPECIES_PEUPLIER_NOIR]: ["Peuplier Noir"],
    [SPECIES_PEUPLIER_BLANC]: ["Peuplier Blanc", "Peuplier de Hollande", "Abèle", "Peuplier à Feuille d'Érable", "Peuplier Argenté", "Blanc de Hollande", "Aube", "Ypréau", "Piboule"],
    [SPECIES_PEUPLIER_GRISARD]: ["Peuplier Grisard", "Peuplier Blanc x Tremble", "Franc-Picard"],
    [SPECIES_PEUPLIER_CANADA]: ["Peuplier du Canada", "Peuplier Hybride Euraméricain"],

    // Sorbiers
    [SPECIES_SORBIER_OISELEURS]: ["Sorbier des Oiseleurs", "Sorbier des Oiseaux"],
    [SPECIES_ALISIER_BLANC]: ["Alisier Blanc", "Alisier de Bourgogne", "Alouchier", "Sorbier des Alpes"],
    [SPECIES_ALISIER_TORMINAL]: ["Alisier Torminal", "Alisier des Bois", "Sorbier Torminal"],
    [SPECIES_ALISIER_MOUGEOT]: ["Alisier de Mougeot", "Sorbier de Mougeot"],
    [SPECIES_SORBIER_NAIN]: ["Sorbier Nain", "Sorbier Petit Néflier", "Alisier Nain"],
    [SPECIES_SORBIER_DOMESTIQUE]: ["Cormier", "Sorbier Domestique"],
    [SPECIES_ALISIER_FONTAINEBLEAU]: ["Alisier de Fontainebleau", "Élorsier", "Sorbier à Larges Feuilles"],

    // Noyers
    [SPECIES_NOYER]: ["Noyer"],
    [SPECIES_NOYER_AMERIQUE]: ["Noyer d'Amérique", "Noyer Noir"],

    // Fusains
    [SPECIES_FUSAIN]: ["Fusain","Fusain d'Europe", "Bonnet de Prêtre", "Bois à Lardoire", "Bonnet d'Évêque"],
    [SPECIES_FUSAIN_LARGE]: ["Fusain à Larges Feuilles"],
    [SPECIES_FUSAIN_CHINE]: ["Fusain de Chine"],
};


// ================== ADDITIONAL METADATA ==================


// Additional taxon keys for missing or rare but notable species
const missingTaxonKeys = {
    [SPECIES_SAULE_PLEUREUR]: 5372639,
    [SPECIES_LIQUIDAMBAR]: 3152823,
    [SPECIES_GINKOBILOBA]: 2687885,
    [SPECIES_MAGNOLIA_GRANDIFLORA]: 9605163,
    [SPECIES_SAVONNIER]: 3190053,
    [SPECIES_CEDRE]: 2685742,
    [SPECIES_PIN]: 2684241,
    [SPECIES_NEFLIER_DU_JAPON]: 3024146,
    [SPECIES_ERABLE_ARGENTE]: 3189837,
    [SPECIES_ERABLE_OBIER]: 7100278,
    [SPECIES_TILLEUL_ARGENTE]: 4259350,
    [SPECIES_BOULEAU_DORE]: 5331763,
    [SPECIES_ORME_HOLLANDE]: 7141604,
    [SPECIES_SORBIER_DOMESTIQUE]: 3013215,
    [SPECIES_ALISIER_FONTAINEBLEAU]: 9306058,
    [SPECIES_FUSAIN_CHINE]: 3169137,
    [SPECIES_MICOCOULIER_OCCIDENTAL]: 2984481,
    [SPECIES_PLATANE_OCCIDENT]: 3152820,
    [SPECIES_AUBEPINE_ESPAGNE]: 3013739,
}


// ================== FAMILIES ==================


const FAMILY_POMMIERS = {
    familyName: "Pommiers",
    main: POMMIER_SAUVAGE,
    mainName: "Pommier",
    species: [
        POMMIER_SAUVAGE,
        POMMIER,
    ],
    associates: []
};

const FAMILY_POIRIERS = {
    familyName: "Poiriers",
    main: POIRIER_SAUVAGE,
    mainName: "Poirier",
    species: [
        POIRIER_SAUVAGE,
        POIRIER,
        POIRIER_EPINEUX,
        POIRIER_CORDE,
    ],
    associates: []
};

const FAMILY_MICOCOULIERS = {
    familyName: "Micocouliers",
    main: SPECIES_MICOCOULIER,
    mainName: "Micocoulier",
    species: [
        SPECIES_MICOCOULIER,
        SPECIES_MICOCOULIER_OCCIDENTAL,
    ],
    associates: []
};

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
        SPECIES_PLATANE, // Only put one
        SPECIES_PEUPLIER_BLANC,
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

const FAMILY_PLATANES = {
    familyName: "Platanes",
    main: SPECIES_PLATANE,
    mainName: "Platane",
    species: [
        SPECIES_PLATANE,
        SPECIES_PLATANE_ORIENT,
        SPECIES_PLATANE_OCCIDENT,
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

// Aubépines
const FAMILY_AUBEPINES = {
    familyName: "Aubépines",
    main: SPECIES_AUBEPINE,
    mainName: "Aubépine",
    species: [
        SPECIES_AUBEPINE,
        SPECIES_AUBEPINE_EPINEUSE,
        SPECIES_AUBEPINE_ESPAGNE,
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
    SPECIES_FIGUIER,

    // TODO RESINEUX
    // SPECIES_CYPRES_CHAUVE,
    // SPECIES_CEDRE,
    // SPECIES_PIN,

    FAMILY_AUBEPINES,
    FAMILY_ERABLES,
    FAMILY_CHENES,
    FAMILY_PLATANES,
    FAMILY_TILLEULS,
    FAMILY_FRENES,
    FAMILY_CORNOUILLERS,
    FAMILY_LAURIERS,
    FAMILY_ORMES,
    FAMILY_PEUPLIERS,
    FAMILY_FUSAINS,
    FAMILY_BOULEAUX, 
    FAMILY_NOYERS, 
    FAMILY_POMMIERS,
    FAMILY_POIRIERS,
];

// Species a bit less common
const harderSpeciesNames = [
    SPECIES_GINKOBILOBA,
    SPECIES_CATALPA,
    SPECIES_LIQUIDAMBAR,
    SPECIES_LILAS_PERSE,
    SPECIES_ARBOUSIER,
    SPECIES_ARBRE_DE_JUDEE,
    SPECIES_NEFLIER,
    SPECIES_NEFLIER_DU_JAPON,

    FAMILY_SORBIERS, 
    FAMILY_MICOCOULIERS,
]

const allSpeciesNames = baseSpeciesNames.concat(harderSpeciesNames);

function enrichSpecies(species, jsonData) {
    // This processes the list of all available species names
    // and enriches them with all available metadata

    const enriched = species.map(speciesName => {

        // Define base info
        var enrichedCurrent = {
            name: speciesName,
            commonName: latinToFrench[speciesName][0],
            otherNames: latinToFrench[speciesName].slice(1, latinToFrench[speciesName].length),
        }

        // If it's a rare species, use custom taxonKey and percentage
        if (speciesName in missingTaxonKeys) {
            enrichedCurrent["taxonKey"] = missingTaxonKeys[speciesName];
            enrichedCurrent["numberOfOccurrences"] = 1;
            enrichedCurrent["percentage"] = 0.1;
            return enrichedCurrent;
        } else {
            // Otherwise, fetch translation, and taxonKey, numberOfOccurences and percentage from jsonData
            try {
                const data = jsonData.find(d => d.species === speciesName.replace(" x ", " ").replace(" × ", " ").replace("æ","ae"));
                enrichedCurrent["taxonKey"] = data.taxonKey;
                enrichedCurrent["numberOfOccurrences"] = data.numberOfOccurrences;
                enrichedCurrent["percentage"] = data.intraSpeciesPercentage;
                return enrichedCurrent;
            } catch (error) {
                // See which taxon is missing, add manually
                console.log(speciesName.replace(" x ", " ").replace(" × ", " ").replace("æ","ae"))
                console.error(error);
            }
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

