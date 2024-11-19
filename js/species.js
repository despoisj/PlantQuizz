// Individual species
const SPECIES_CHARME = "Carpinus betulus";
const SPECIES_HETRE = "Fagus sylvatica";
const SPECIES_MARRONNIER = "Aesculus hippocastanum";
const SPECIES_CHATAIGNIER = "Castanea sativa";
const SPECIES_LIQUIDAMBAR = "Liquidambar styraciflua";
const SPECIES_AULNE_GLUTINEUX = "Alnus glutinosa";
const SPECIES_COTONEASTER = "Cotoneaster horizontalis"; // A couple species, but it's not a real tree so eh TBD
const SPECIES_ARBRE_DE_JUDEE = "Cercis siliquastrum";
const SPECIES_TULIPIER = "Liriodendron tulipifera";
const SPECIES_MAGNOLIA_GRANDIFLORA = "Magnolia grandiflora";
const SPECIES_NOISETIER = "Corylus avellana";
const SPECIES_OLIVIER = "Olea europaea";
const SPECIES_SAVONNIER = "Koelreuteria paniculata";
const SPECIES_GINKOBILOBA = "Ginkgo biloba";
const SPECIES_EUCALYPTUS = "Eucalyptus globulus"; // There are others but very few
const SPECIES_CATALPA = "Catalpa bignonioides";
const SPECIES_LILAS_PERSE = "Melia azedarach";

// Fruitiers
// Note: there are a lot of common arbustes in
// the prunus category, they're not included.
const SPECIES_POMMIER = "Malus domestica";
const SPECIES_POMMIER_SAUVAGE = "Malus sylvestris";
const SPECIES_POIRIER = "Pyrus communis";
const SPECIES_POIRIER_SAUVAGE = "Pyrus pyraster";
const SPECIES_POIRIER_EPINEUX = "Pyrus spinosa";
const SPECIES_POIRIER_CORDE = "Pyrus cordata";
const SPECIES_MERISIER = "Prunus avium";
const SPECIES_CERISIER_GRAPPES = "Prunus padus";
const SPECIES_MYROBOLAN = "Prunus cerasifera";
const SPECIES_PRUNIER = "Prunus domestica";
const SPECIES_PECHER = "Prunus persica";
const SPECIES_CERISIER_NOIR = "Prunus serotina";
const SPECIES_ABRICOTIER = "Prunus armeniaca";
const SPECIES_AMANDIER = "Prunus amygdalus";
const SPECIES_CERISIER_ACIDE = "Prunus cerasus";
const SPECIES_MARMOTTIER = "Prunus brigantina";
const SPECIES_MURIER_BLANC = "Morus alba";
const SPECIES_MURIER_NOIR = "Morus nigra";
const SPECIES_MURIER_ARBRE = "Morus indica";
// Note: Very few Citronnier / Orangers / Mandarinier in France... TBC
// Note: Very few Plaqueminier lotier & Kaki... TBC
const SPECIES_GRENADIER = "Punica granatum";
const SPECIES_FIGUIER = "Ficus carica";
const SPECIES_ARBOUSIER = "Arbutus unedo";
const SPECIES_NEFLIER = "Mespilus germanica";
const SPECIES_NEFLIER_DU_JAPON = "Rhaphiolepis bibas" // Also "Eriobotrya japonica";
const SPECIES_FEVIER = "Gleditsia triacanthos";

// Saules
// Note: salix have many tiny plants and shrubs, I've selected trees only
const SPECIES_SAULE_PLEUREUR = "Salix babylonica";
const SPECIES_SAULE_BLANC = "Salix alba";
const SPECIES_SAULE_MARSAULT = "Salix caprea";
const SPECIES_SAULE_FRAGILE = "Salix fragilis"; 
const SPECIES_SAULE_TROIS_ETAMINES = "Salix triandra";
const SPECIES_SAULE_CINQ_ETAMINES = "Salix pentandra";
const SPECIES_SAULE_DAPHNE = "Salix daphnoides";
const SPECIES_SAULE_VANNIER = "Salix viminalis";

// Acacias / Mimosas
const SPECIES_ROBINIER = "Robinia pseudoacacia";
const SPECIES_MIMOSA_HIVER = "Acacia dealbata";
const SPECIES_MIMOSA_ETE = "Acacia retinodes";
const SPECIES_MIMOSA_BLEUATRE = "Acacia saligna"
// There are other mimosas with ~100 observation but I've ignored those


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
const SPECIES_SORBIER_DOMESTIQUE = "Cormus domestica"; // "Sorbus domestica";
const SPECIES_ALISIER_FONTAINEBLEAU = "Karpatiosorbus latifolia"; // "Sorbus latifolia";

// Noyer
const SPECIES_NOYER = "Juglans regia";
const SPECIES_NOYER_AMERIQUE = "Juglans nigra";

// Fusains
const SPECIES_FUSAIN = "Euonymus europaeus";
const SPECIES_FUSAIN_LARGE = "Euonymus latifolius";
const SPECIES_FUSAIN_CHINE = "Euonymus fortunei";

// ============== Resineux ==============
const SPECIES_CYPRES = "Cupressus sempervirens";
const SPECIES_CYPRES_LAMBERT = "Cupressus macrocarpa";
const SPECIES_CYPRES_ARIZONA = "Cupressus arizonica";
const SPECIES_CYPRES_LAWSON = "Chamaecyparis lawsoniana"
const SPECIES_CYPRES_CHAUVE = "Taxodium distichum";

const SPECIES_PIN_SYLVESTRE = "Pinus sylvestris";
const SPECIES_PIN_MARITIME = "Pinus pinaster";
const SPECIES_PIN_NOIR = "Pinus nigra";
const SPECIES_PIN_ALEP = "Pinus halepensis";
const SPECIES_PIN_CROCHETS = "Pinus uncinata";
const SPECIES_PIN_ALPES = "Pinus cembra";
const SPECIES_PIN_MUGO = "Pinus mugo";
const SPECIES_PIN_PARASOL = "Pinus pinea";
const SPECIES_PIN_BLANC = "Pinus strobus";

const SPECIES_EPICEA = "Picea abies";
const SPECIES_EPICEA_COLORADO = "Picea pungens";
const SPECIES_EPICEA_SITKA = "Picea sitchensis";

const SPECIES_SAPIN = "Abies alba"
const SPECIES_SAPIN_VANCOUVER = "Abies grandis"
const SPECIES_SAPIN_NORDMANN = "Abies nordmanniana" // 0.6%
const SPECIES_SAPIN_ANDALOUSIE = "Abies pinsapo" // 0.4%

const SPECIES_MELEZE = "Larix decidua";
const SPECIES_MELEZE_JAPON = "Larix kaempferi";

const SPECIES_CEDRE_ATLAS = "Cedrus atlantica";
const SPECIES_CEDRE_HIMALAYA = "Cedrus deodara"
const SPECIES_CEDRE_LIBAN = "Cedrus libani";

const SPECIES_SEQUOIA_GEANT = "Sequoiadendron giganteum";
const SPECIES_SEQUOIA_VERT = "Sequoia sempervirens";

const SPECIES_IF = "Taxus baccata";
const SPECIES_DOUGLAS = "Pseudotsuga menziesii";
const SPECIES_THUYA = "Thuja plicata"

// =================== TRANSLATIONS ================
// Note: this is necessary because they aren't provided 
// in the gbif dataset (the one consolidated into the .json file)

const latinToFrench = {
    [SPECIES_AULNE_GLUTINEUX]: ["Aulne Glutineux", "Aulne Noir", "Aulne Poisseux", "Vergne", "Verne"],
    [SPECIES_CHARME]: ["Charme", "Charme Commun", "Charmille"],
    [SPECIES_HETRE]: ["Hêtre"],
    [SPECIES_MARRONNIER]: ["Marronnier",  "Marronnier d'Inde", "Marronnier d'Europe", "Marronnier Blanc", "Châtaignier de Mer", "Marronnier Faux-Châtaignier", "Châtaignier des Chevaux"],
    [SPECIES_CHATAIGNIER]: ["Châtaignier", "Arbre à Pain", "Pain des Pauvres"],    
    [SPECIES_MAGNOLIA_GRANDIFLORA]: ["Magnolia", "Magnolia à Grandes Fleurs", "Magnolier à Grandes Fleurs", "Laurier-Tulipier"],
    [SPECIES_NOISETIER]: ["Noisetier", "Coudriers", "Aveliniers"],
    
    // Misc, often imported species
    [SPECIES_SAVONNIER]: ["Savonnier", "Savonnier de Chine", "Bois de Panama", "Arbre aux Lanternes", "Arbre à Pluie d'Or", "Mimosa d'Été", "Lampions de Chine"],
    [SPECIES_GINKOBILOBA]: ["Ginkgo", "Arbre aux Quarante Écus", "Arbre aux Abricots d'Argent"],
    [SPECIES_EUCALYPTUS]: ["Eucalyptus", "Gommier Bleu"],
    [SPECIES_CATALPA]: ["Catalpa", "Catalpa Commun", "Arbre aux Haricots", "Catalpa Boule"],
    [SPECIES_LILAS_PERSE]: ["Lilas de Perse", "Margousier à Feuilles de Frêne", "Mélia Faux-Neem"],
    [SPECIES_LIQUIDAMBAR]: ["Liquidambar", "Copalme", "Copalme d'Amérique"],
    [SPECIES_TULIPIER]: ["Tulipier", "Arbre aux Lis"],
    [SPECIES_ARBRE_DE_JUDEE]: ["Arbre de Judée", "Gainier Silicastre"],

    // Shrubs, like aubépine, TBD troenes
    [SPECIES_COTONEASTER]: ["Cotoneaster"], // Note: there are 5 species, but it's not really a tree, good enough for now

    // Acacias
    [SPECIES_ROBINIER]: ["Robinier", "Robinier Faux-Acacia", "Faux-Acacia"],
    [SPECIES_MIMOSA_HIVER]: ["Mimosa d'Hiver", "Mimosa des Fleuristes"],
    [SPECIES_MIMOSA_ETE]: ["Mimosa d'Été", "Mimosa des Quatre Saisons", "Mimosa Résineux"],
    [SPECIES_MIMOSA_BLEUATRE]: ["Mimosa Bleuâtre", "Mimosa à Feuilles de Saule"],


    // Fruitiers
    [SPECIES_POMMIER_SAUVAGE]: ["Pommier Sauvage", "Boquettier", "Pommier des Bois"],
    [SPECIES_POMMIER]: ["Pommier Domestique", "Pommier Commun"],

    // Poiriers
    [SPECIES_POIRIER_SAUVAGE]: ["Poirier Sauvage"],
    [SPECIES_POIRIER]: ["Poirier Commun"],
    [SPECIES_POIRIER_EPINEUX]: ["Poirier Épineux", "Poirier à Feuilles d'Amandier"],
    [SPECIES_POIRIER_CORDE]: ["Poirier à Feuilles en Cœur", "Poirasse"],

    // Cerisiers
    [SPECIES_MERISIER]: ["Merisier", "Cerisier des Oiseaux", "Cerisier Sauvage", "Cerisier des Bois"],
    [SPECIES_CERISIER_GRAPPES]: ["Cerisier à Grappes", "Merisier à grappes", "Amaruvier", "Bois-Puant", "Putier", "Putiet", "Putet", "Pétafouère"],
    [SPECIES_CERISIER_NOIR]: ["Cerisier Noir", "Cerisier d'Automne", "Cerisier Tardif"],
    [SPECIES_CERISIER_ACIDE]: ["Cerisier Acide", "Cerisier Aigre", "Griottier"],

    // Muriers
    [SPECIES_MURIER_BLANC]: ["Mûrier Blanc", "Mûrier Commun"],
    [SPECIES_MURIER_NOIR]: ["Mûrier Noir"],
    [SPECIES_MURIER_ARBRE]: ["Mûrier en Arbre"],

    // Other fruits
    [SPECIES_MYROBOLAN]: ["Myrobolan", "Prunier-Cerise", "Prunier Myrobolan", "Myrobalan"],
    [SPECIES_PRUNIER]: ["Prunier", "Prunier Cultivé"],
    [SPECIES_PECHER]: ["Pêcher"],
    [SPECIES_ABRICOTIER]: ["Abricotier"],
    [SPECIES_AMANDIER]: ["Amandier"],
    [SPECIES_MARMOTTIER]: ["Marmottier", "Prunier de Briançon", "Prunier des Alpes", "Abricotier de Briançon"],
    
    [SPECIES_GRENADIER]: ["Grenadier"],
    [SPECIES_ARBOUSIER]: ["Arbousier", "Arbre à Fraises"],
    [SPECIES_OLIVIER]: ["Olivier"],
    [SPECIES_FIGUIER]: ["Figuier", "Figuier Comestible", "Figuier Commun", "Figuier de Carie", "Arbre à Cariques", "Figuier sauvage (♂)", "Caprifiguier (♂)", "Figuier de Bouc (♂)"],
    [SPECIES_NEFLIER]: ["Néflier", "Néflier d'Allemagne", "Mêlier", "Mespoulo", "Nesplier"],
    [SPECIES_NEFLIER_DU_JAPON]: ["Néflier du Japon", "Bibacier", "Bibassier"],
    [SPECIES_FEVIER]: ["Févier d'Amérique", "Févier Épineux", "Févier à Trois Épines", "Févier à Trois Pointes", "Carouge à Miel", "Acacia à Trois Épines", "Épine du Christ"],

    // ============== Resineux  ==============
    [SPECIES_CYPRES]: ["Cyprès commun", "Cyprès d'Italie", "Cyprès toujours Vert", "Cyprès de Provence", "Cyprès sempervirent"],
    [SPECIES_CYPRES_LAMBERT]: ["Cyprès de Lambert", "Cyprès de Monterey"],
    [SPECIES_CYPRES_ARIZONA]: ["Cyprès de l'Arizona"],
    [SPECIES_CYPRES_LAWSON]: ["Cyprès de Lawson"],
    [SPECIES_CYPRES_CHAUVE]: ["Cyprès Chauve", "Cyprès de Louisiane", "Taxaudier", "Taxodier", "Cipre"],
    
    // Pinus
    [SPECIES_PIN_SYLVESTRE]: ["Pin sylvestre", "Pin du Nord"],
    [SPECIES_PIN_MARITIME]: ["Pin maritime", "Pin des Landes", "Pin de Bordeaux", "Pin de Corte", "Pin Mésogéen"],
    [SPECIES_PIN_NOIR]: ["Pin noir", "Pin noir d'Autriche"],
    [SPECIES_PIN_ALEP]: ["Pin d'Alep", "Pin Blanc de Provence", "Pin de Jerusalem"],
    [SPECIES_PIN_CROCHETS]: ["Pin à Crochets", "Pin de Briançon"],
    [SPECIES_PIN_ALPES]: ["Pin cembro", "Pin des Alpes", "Arolle", "Auvier", "Tinier"],
    [SPECIES_PIN_MUGO]: ["Pin mugo", "Pin de montagne", "Pin couché"],
    [SPECIES_PIN_PARASOL]: ["Pin Parasol", "Pin Pignon"],
    [SPECIES_PIN_BLANC]: ["Pin blanc", "Pin du Lord", "Pin de Weymouth"],

    [SPECIES_EPICEA]: ["Épicéa commun", "Sapinette", "Épicéa du Nord", "Épicéa élevé", "Épinette de Norvège", "Épicéa à Poix", "Faux Sapin", "Gentil Sapin", "Sapin de Noël"],
    [SPECIES_EPICEA_COLORADO]: ["Épicéa bleu", "Épinette Bleue", "Épicea du Colorado"],
    [SPECIES_EPICEA_SITKA]: ["Épicéa de Sitka", "Épinette de Sitka"],

    [SPECIES_SAPIN]: ["Sapin blanc", "Sapin pectiné", "Sapin des Vosges"],
    [SPECIES_SAPIN_VANCOUVER]: ["Sapin de Vancouver", "Sapin Géant"],
    [SPECIES_SAPIN_NORDMANN]: ["Sapin de Nordmann"],
    [SPECIES_SAPIN_ANDALOUSIE]: ["Sapin d'Andalousie", "Sapin d'Espagne"],

    [SPECIES_MELEZE]: ["Mélèze d'Europe", "Mélèze commun", "Pin de Briançon"],
    [SPECIES_MELEZE_JAPON]: ["Mélèze du Japon"],

    [SPECIES_CEDRE_ATLAS]: ["Cèdre de l'Atlas"],
    [SPECIES_CEDRE_HIMALAYA]: ["Cèdre de l'Himalaya", "Cèdre Sacré", "Cèdre Déodar"],
    [SPECIES_CEDRE_LIBAN]: ["Cèdre du Liban", "Cèdre du Mont Liban"],

    [SPECIES_SEQUOIA_GEANT]: ["Séquoia géant", "Wellingtonia"],
    [SPECIES_SEQUOIA_VERT]: ["Séquoia à Feuilles d'If", "Séquoia Sempervirent", "Séquoia toujours Vert"],

    [SPECIES_IF]: ["If", "If Commun", "If à Baies"],
    [SPECIES_DOUGLAS]: ["Douglas", "Sapin de Douglas", "Pin d'Oregon", "Douglas de Menzies"],
    [SPECIES_THUYA]: ["Thuya géant", "Cèdre Rouge de l’Ouest", "Thuya de Lobb"],

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
    [SPECIES_ERABLE_SYCOMORE]: ["Érable Sycomore", "Faux Platane", "Grand Érable", "Érable de Montagne", "Érable Blanc"],
    [SPECIES_ERABLE_CHAMPETRE]: ["Érable Champêtre"],
    [SPECIES_ERABLE_ARGENTE]: ["Érable Argenté", "Érable de Virginie", "Plaine Blanche"],
    [SPECIES_ERABLE_NEGUNDO]: ["Érable Negundo", "Érable à Giguère", "Érable à Feuilles de Frêne", "Érable Américain", "Érable à Feuilles Composées", "Érable du Manitoba"],
    [SPECIES_ERABLE_PLANE]: ["Érable Plane", "Érable de Norvège", "Iseron", "Plane", "Main-Découpée", "Plaine", "Faux-Sycomore"],
    [SPECIES_ERABLE_OBIER]: ["Érable à Feuilles d'Obier"],
    [SPECIES_ERABLE_MONTPELLIER]: ["Érable de Montpellier", "Azerou", "Agast", "Violonier"],

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

    // Grands Saules
    [SPECIES_SAULE_BLANC]: ["Saule Blanc", "Saule Commun", "Saule Argenté", "Osier Blanc", "Saule Vivier"],
    [SPECIES_SAULE_MARSAULT]: ["Saule Marsault", "Saule des Chèvres"],
    [SPECIES_SAULE_FRAGILE]: ["Saule Fragile"],
    [SPECIES_SAULE_TROIS_ETAMINES]: ["Saule à Trois Étamines", "Osier Brun", "Saule-Amandier", "Noir de Villaines"],
    [SPECIES_SAULE_CINQ_ETAMINES]: ["Saule à Cinq Étamines", "Saule Odorant", "Saule-Laurier"],
    [SPECIES_SAULE_DAPHNE]: ["Saule Faux-Daphné", "Saule Pruineux", "Saule Noir"],
    [SPECIES_SAULE_VANNIER]: ["Saule des Vanniers", "Vime", "Osier Vert"],
    [SPECIES_SAULE_PLEUREUR]: ["Saule Pleureur"],

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


// Additional manual taxon keys for missing or rare but notable species
const missingTaxonKeys = {
    // None so far, e.g. [SPECIES_X] : 1234567,
}


// ================== FAMILIES ==================

const FAMILY_CERISIERS = {
    familyName: "Cerisiers",
    resineux: false,
    main: SPECIES_MERISIER,
    mainName: "Cerisier",
    species: [
        SPECIES_MERISIER,
        SPECIES_CERISIER_GRAPPES,
        SPECIES_CERISIER_NOIR,
        SPECIES_CERISIER_ACIDE,
    ],
    associates: []
};

const FAMILY_MURIERS = {
    familyName: "Mûriers",
    resineux: false,
    main: SPECIES_MURIER_BLANC,
    mainName: "Mûrier",
    species: [
        SPECIES_MURIER_BLANC,
        SPECIES_MURIER_NOIR,
        SPECIES_MURIER_ARBRE,
    ],
    associates: []
};

const FAMILY_POMMIERS = {
    familyName: "Pommiers",
    resineux: false,
    main: SPECIES_POMMIER_SAUVAGE,
    mainName: "Pommier",
    species: [
        SPECIES_POMMIER_SAUVAGE,
        SPECIES_POMMIER,
    ],
    associates: []
};

const FAMILY_POIRIERS = {
    familyName: "Poiriers",
    resineux: false,
    main: SPECIES_POIRIER_SAUVAGE,
    mainName: "Poirier",
    species: [
        SPECIES_POIRIER_SAUVAGE,
        SPECIES_POIRIER,
        SPECIES_POIRIER_EPINEUX,
        SPECIES_POIRIER_CORDE,
    ],
    associates: []
};

const FAMILY_MICOCOULIERS = {
    familyName: "Micocouliers",
    resineux: false,
    main: SPECIES_MICOCOULIER,
    mainName: "Micocoulier",
    species: [
        SPECIES_MICOCOULIER,
        SPECIES_MICOCOULIER_OCCIDENTAL,
    ],
    associates: []
};


const FAMILY_SAULES = {
    familyName: "Grands Saules",
    resineux: false,
    main: SPECIES_SAULE_PLEUREUR,
    mainName: "Saule",
    species: [
        SPECIES_SAULE_MARSAULT,
        SPECIES_SAULE_BLANC,
        SPECIES_SAULE_TROIS_ETAMINES,
        SPECIES_SAULE_VANNIER,
        SPECIES_SAULE_FRAGILE,
        SPECIES_SAULE_CINQ_ETAMINES,
        SPECIES_SAULE_PLEUREUR,
        SPECIES_SAULE_DAPHNE,
    ],
    associates: []
};


const FAMILY_ERABLES = {
    familyName: "Érables*",
    resineux: false,
    main: SPECIES_ERABLE_SYCOMORE,
    mainName: "Érable",
    species: [
        SPECIES_ERABLE_CHAMPETRE,
        SPECIES_ERABLE_SYCOMORE,
        SPECIES_ERABLE_PLANE,
        SPECIES_ERABLE_OBIER,
        SPECIES_ERABLE_NEGUNDO,
        SPECIES_ERABLE_MONTPELLIER,
        SPECIES_ERABLE_ARGENTE,
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
    resineux: false,
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

const FAMILY_MIMOSAS = {
    familyName: "Mimosas",
    resineux: false,
    main: SPECIES_MIMOSA_HIVER,
    mainName: "Mimosa",
    species: [
        SPECIES_MIMOSA_HIVER,
        SPECIES_MIMOSA_ETE,
        SPECIES_MIMOSA_BLEUATRE,
    ],
    associates: [
        SPECIES_ROBINIER,
    ]
};

const FAMILY_PLATANES = {
    familyName: "Platanes",
    resineux: false,
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
    resineux: false,
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
    resineux: false,
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
    resineux: false,
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
    resineux: false,
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
    resineux: false,
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
    resineux: false,
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
    resineux: false,
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
    resineux: false,
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
    resineux: false,
    main: SPECIES_SORBIER_OISELEURS,
    mainName: "Sorbier",
    species: [
        SPECIES_SORBIER_OISELEURS,
        SPECIES_ALISIER_BLANC,
        SPECIES_ALISIER_TORMINAL,
        SPECIES_ALISIER_MOUGEOT,
        SPECIES_SORBIER_DOMESTIQUE,
        SPECIES_SORBIER_NAIN,
        SPECIES_ALISIER_FONTAINEBLEAU,
    ],
    associates: []
};

// Fusains family
const FAMILY_FUSAINS = {
    familyName: "Fusains",
    resineux: false,
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
    resineux: false,
    main: SPECIES_NOYER,
    mainName: "Noyer",
    species: [
        SPECIES_NOYER,
        SPECIES_NOYER_AMERIQUE,
    ],
    associates: []
};

const FAMILY_FRUITS = {
    familyName: "Arbres Fruitiers",
    resineux: false,
    main: SPECIES_POMMIER_SAUVAGE,
    mainName: "N/A",
    species: [
        SPECIES_POMMIER_SAUVAGE,
        SPECIES_POMMIER,
        SPECIES_POIRIER_SAUVAGE,
        SPECIES_POIRIER,
        SPECIES_POIRIER_EPINEUX,
        SPECIES_POIRIER_CORDE,
        SPECIES_MURIER_BLANC,
        SPECIES_MURIER_NOIR,
        SPECIES_MURIER_ARBRE,
        SPECIES_MERISIER,
        SPECIES_CERISIER_GRAPPES,
        SPECIES_CERISIER_NOIR,
        SPECIES_CERISIER_ACIDE,
        SPECIES_MYROBOLAN,
        SPECIES_PRUNIER,
        SPECIES_PECHER,
        SPECIES_ABRICOTIER,
        SPECIES_AMANDIER,
        SPECIES_MARMOTTIER,
        SPECIES_GRENADIER,
        SPECIES_FIGUIER,
        SPECIES_OLIVIER,
        SPECIES_ARBOUSIER,
        SPECIES_NEFLIER,
        SPECIES_NEFLIER_DU_JAPON,
        SPECIES_FEVIER,
    ],
    associates: []
};

// ================ Resineux ================
const FAMILY_PINS = {
    familyName: "Pins",
    resineux: true,
    main: SPECIES_PIN_SYLVESTRE,
    mainName: "Pin",
    species: [
        SPECIES_PIN_SYLVESTRE,
        SPECIES_PIN_MARITIME,
        SPECIES_PIN_NOIR,
        SPECIES_PIN_ALEP,
        SPECIES_PIN_CROCHETS,
        SPECIES_PIN_ALPES,
        SPECIES_PIN_MUGO,
        SPECIES_PIN_PARASOL,
        SPECIES_PIN_BLANC,
    ],
    associates: []
};

const FAMILY_CYPRES = {
    familyName: "Cyprès",
    resineux: true,
    main: SPECIES_CYPRES_CHAUVE,
    mainName: "Cyprès",
    species: [
        SPECIES_CYPRES_CHAUVE,
        SPECIES_CYPRES,
        SPECIES_CYPRES_LAWSON,
        SPECIES_CYPRES_LAMBERT,
        SPECIES_CYPRES_ARIZONA,
    ],
    associates: []
};

const FAMILY_EPICEAS = {
    familyName: "Epicéas",
    resineux: true,
    main: SPECIES_EPICEA,
    mainName: "Epicéa",
    species: [
        SPECIES_EPICEA,
        SPECIES_EPICEA_COLORADO,
        SPECIES_EPICEA_SITKA,
    ],
    associates: []
};

const FAMILY_SAPINS = {
    familyName: "Sapins",
    resineux: true,
    main: SPECIES_SAPIN,
    mainName: "Sapin",
    species: [
        SPECIES_SAPIN,
        SPECIES_SAPIN_VANCOUVER,
        SPECIES_SAPIN_NORDMANN,
        SPECIES_SAPIN_ANDALOUSIE,
    ],
    associates: []
};

const FAMILY_MELEZES = {
    familyName: "Mélèzes",
    resineux: true,
    main: SPECIES_MELEZE,
    mainName: "Mélèze",
    species: [
        SPECIES_MELEZE,
        SPECIES_MELEZE_JAPON,
    ],
    associates: []
};

const FAMILY_CEDRES = {
    familyName: "Cèdres",
    resineux: true,
    main: SPECIES_CEDRE_ATLAS,
    mainName: "Cèdre",
    species: [
        SPECIES_CEDRE_ATLAS,
        SPECIES_CEDRE_HIMALAYA,
        SPECIES_CEDRE_LIBAN,
    ],
    associates: []
};

const FAMILY_SEQUOIAS = {
    familyName: "Séquoias",
    resineux: true,
    main: SPECIES_SEQUOIA_GEANT,
    mainName: "Séquoia",
    species: [
        SPECIES_SEQUOIA_GEANT,
        SPECIES_SEQUOIA_VERT,
    ],
    associates: []
};

// We need this list for essences to filter individual non-family species
const LIST_OTHER_RESINEUX = [
    SPECIES_IF,
    SPECIES_DOUGLAS,
    SPECIES_THUYA,
]


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
    SPECIES_AULNE_GLUTINEUX,
    SPECIES_COTONEASTER,
    SPECIES_TULIPIER,
    SPECIES_MAGNOLIA_GRANDIFLORA,
    SPECIES_NOISETIER,
    SPECIES_OLIVIER,
    SPECIES_SAVONNIER,
    SPECIES_FIGUIER,

    FAMILY_MIMOSAS,
    FAMILY_SAULES,
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
    FAMILY_CERISIERS,
    FAMILY_MURIERS,

    // Resineux
    FAMILY_PINS,
    FAMILY_SAPINS,
    FAMILY_CEDRES,
    FAMILY_SEQUOIAS,
];

// Species a bit less common
const harderSpeciesNames = [
    SPECIES_GINKOBILOBA,
    SPECIES_EUCALYPTUS,
    SPECIES_CATALPA,
    SPECIES_LIQUIDAMBAR,
    SPECIES_LILAS_PERSE,
    SPECIES_ARBOUSIER,
    SPECIES_ARBRE_DE_JUDEE,
    SPECIES_NEFLIER,
    SPECIES_NEFLIER_DU_JAPON,

    FAMILY_SORBIERS, 
    FAMILY_MICOCOULIERS,
    FAMILY_FRUITS,

    // Resineux
    SPECIES_IF,
    SPECIES_THUYA,
    SPECIES_DOUGLAS,
    FAMILY_EPICEAS,
    FAMILY_MELEZES,
    FAMILY_CYPRES,
]

const allSpeciesNames = baseSpeciesNames.concat(harderSpeciesNames);

function enrichSpecies(species, csvData) {
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
            // Otherwise, fetch translation, and taxonKey, numberOfOccurences and percentage from csvData
            try {
                const data = csvData.find(d => d.species === speciesName.replace(" x ", " ").replace(" × ", " ").replace("æ","ae"));
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
    // Recompute percentage for Sorbiers and Lauriers etc.
    // which are a collection of species and not a real genus
    // Also for Saules which have too much stuff inside of it (grass etc.)
    const fakeFamilyNames = ["Lauriers", "Sorbiers", "Grands Saules", "Cerisiers", "Cyprès", "Séquoias"];
    const families = allSpecies.filter(species => fakeFamilyNames.includes(species.familyName));

    // For each family
    families.forEach(family => {
        // Find total number of occurences in family
        var total = 0
        family.species.forEach(species => {
            total += parseInt(species.numberOfOccurrences)
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
    // Not sure if good idea
    //COLLECTION_ORME_CHARME,
    //COLLECTION_ERABLE_AUBEPINE,
]

async function loadSpecies(){
    // Enrich species with all available metadata (translation, dict, etc.)
    // First load the CSV file
    await $.get('data/france_plants_percentages.csv', function(data) {
        csvData = $.csv.toObjects(data, {"separator":";"})

        // First enrich everything without thinking about families
        // Easiest (but hacky) way is to use translation dict keys
        // This assumes they will always be all keys in the dict
        enrichedSpecies = enrichSpecies(Object.keys(latinToFrench), csvData);

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

