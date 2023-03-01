var chai = require('chai'), expect = chai.expect, should = chai.should();
var treeSpecies = require('../dist/index.module.js');

describe('getSpeciesLength', function() {

    it('in en', function(done){
        var countSpecies = treeSpecies.getSpeciesLength('en');
        expect(countSpecies).to.be.a('number')
        console.log(countSpecies);
        done()
    })
    it('in es', function(done){
        var countSpecies = treeSpecies.getSpeciesLength('es');
        expect(countSpecies).to.be.a('number')
        console.log(countSpecies);
        done()
    })
    it('in de', function(done){
        var countSpecies = treeSpecies.getSpeciesLength('de');
        expect(countSpecies).to.be.a('number')
        console.log(countSpecies);
        done()
    })

})