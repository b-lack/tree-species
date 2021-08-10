var chai = require('chai'), expect = chai.expect, should = chai.should();
var treeSpecies = require('../dist/index.esm');


describe('get Enum', function() {

    it('in en', function(done){
        var list = treeSpecies.getEnum('en');
        console.log(list);
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('string')
        done()
    })
    it('in es', function(done){
        var list = treeSpecies.getEnum('es');
        console.log(list);
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('string')
        done()
    })
    it('in de', function(done){
        var list = treeSpecies.getEnum('de');
        console.log(list);
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('string')
        done()
    })

})

describe('get Values', function() {

    it('in en', function(done){
        var list = treeSpecies.getValues('en');
        console.log(list);
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('array')
        done()
    })
    it('in es', function(done){
        var list = treeSpecies.getValues('es');
        console.log(list);
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('array')
        done()
    })
    it('in de', function(done){
        var list = treeSpecies.getValues('de');
        console.log(list);
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('array')
        done()
    })

})

describe('get first Values', function() {

    it('in en', function(done){
        var list = treeSpecies.getFirstValues('en');
        console.log(list);
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('string')
        done()
    })
    it('in es', function(done){
        var list = treeSpecies.getFirstValues('es');
        console.log(list);
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('string')
        done()
    })
    it('in de', function(done){
        var list = treeSpecies.getFirstValues('de');
        console.log(list);
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('string')
        done()
    })

})