var chai = require('chai'), expect = chai.expect, should = chai.should();
var treeSpecies = require('../dist/index.module.js');

describe('getRandomSpeciesId', function() {

    it('in en', function(done){
        var randomSpeciesId = treeSpecies.getRandomSpeciesId('en');
        expect(randomSpeciesId).to.be.a('string')
        console.log(randomSpeciesId);
        done()
    })
    it('in es', function(done){
        var randomSpeciesId = treeSpecies.getRandomSpeciesId('es');
        expect(randomSpeciesId).to.be.a('string')
        console.log(randomSpeciesId);
        done()
    })
    it('in de', function(done){
        var randomSpeciesId = treeSpecies.getRandomSpeciesId('de');
        expect(randomSpeciesId).to.be.a('string')
        console.log(randomSpeciesId);
        done()
    })

})