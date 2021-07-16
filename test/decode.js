var chai = require('chai'), expect = chai.expect, should = chai.should();
var treeSpecies = require('../dist/index.cjs');

var speciesId = 'cDD';
var speciesIdSupposedToFail = '666';

describe('speciesId = cDD', function() {

    it('in en', function(done){
        var list = treeSpecies.decode(speciesId, 'en');
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('string')
        done()
    })
    it('in es', function(done){
        var list = treeSpecies.decode(speciesId, 'es');
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('string')
        done()
    })
    it('in de', function(done){
        var list = treeSpecies.decode(speciesId, 'de');
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('string')
        done()
    })

})

describe('speciesId = 666', function() {

    it('in en', function(done){
        var list = treeSpecies.decode(speciesIdSupposedToFail, 'en');
        expect(list).to.be.an('undefined');
        done()
    })
    it('in es', function(done){
        var list = treeSpecies.decode(speciesIdSupposedToFail, 'es');
        expect(list).to.be.an('undefined');
        done()
    })
    it('in de', function(done){
        var list = treeSpecies.decode(speciesIdSupposedToFail, 'de');
        expect(list).to.be.an('undefined');
        done()
    })

})