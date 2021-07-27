
var TreeSpeciesI18n = require('../dist/index.esm.js');

var treeNameToSearch = 'silver fir';
var silverFirKey = TreeSpeciesI18n.encode(treeNameToSearch, 'en');

console.info(`Key by species name (${treeNameToSearch}):`, silverFirKey);

if(silverFirKey){
    var silverFirEn = TreeSpeciesI18n.decode(silverFirKey, 'en');
    var silverFirEs = TreeSpeciesI18n.decode(silverFirKey, 'es');
    var silverFirDe = TreeSpeciesI18n.decode(silverFirKey, 'de');
    
    console.info(`Species name(s) by key (${silverFirKey}) (en):`, silverFirEn);
    console.info(`Species name(s) by key (${silverFirKey}) (es):`, silverFirEs);
    console.info(`Species name(s) by key (${silverFirKey}) (de):`, silverFirDe);
}

var speciesArrayEn = TreeSpeciesI18n.getList('en');
console.info('List of species(en): ', speciesArrayEn.length);

var speciesArrayEs = TreeSpeciesI18n.getList('es');
console.info('List of species(es): ', speciesArrayEs.length);

var speciesArrayDe = TreeSpeciesI18n.getList('de');
console.info('List of species (de): ', speciesArrayDe.length);