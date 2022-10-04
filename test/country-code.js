var chai = require('chai'), expect = chai.expect, should = chai.should();
var treeSpecies = require('../dist/index.esm');

describe('getList', function() {

    it('de de', function(done){
        var countSpecies = treeSpecies.getList('de', 'DE');
        expect(countSpecies).to.be.a('array')
        done()
    })
    it('de jp', function(done){
        var countSpecies = treeSpecies.getList('de', 'JP');
        expect(countSpecies).to.be.a('array')
        done()
    })
})