import * as TreeSpecies from 'tree-species-i18n';

var treeNameToSearch = 'silver fir';
var silverFirKey = TreeSpecies.encode(treeNameToSearch, 'en');

console.info(`Key by species name (${treeNameToSearch}):`, silverFirKey);

if(silverFirKey){
    var silverFirEn = TreeSpecies.decode(silverFirKey, 'en');
    var silverFirEs = TreeSpecies.decode(silverFirKey, 'es');
    var silverFirDe = TreeSpecies.decode(silverFirKey, 'de');
    
    console.info(`Species name(s) by key (${silverFirKey}) (en):`, silverFirEn);
    console.info(`Species name(s) by key (${silverFirKey}) (es):`, silverFirEs);
    console.info(`Species name(s) by key (${silverFirKey}) (de):`, silverFirDe);
}

var speciesArrayEn = TreeSpecies.getList('en');
console.info('List of species(en): ', speciesArrayEn.length);

var speciesArrayEs = TreeSpecies.getList('es');
console.info('List of species(es): ', speciesArrayEs.length);

var speciesArrayDe = TreeSpecies.getList('de');
console.info('List of species (de): ', speciesArrayDe.length);