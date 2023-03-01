var chai = require('chai'), expect = chai.expect, should = chai.should();
var treeSpecies = require('../dist/index.module.js');

describe('search', function() {

    it('decurrens', function(done){
        var randomSpeciesId = treeSpecies.search('decurrens');
        expect(randomSpeciesId).to.be.a('object')
        console.log(randomSpeciesId);
        done()
    })

})