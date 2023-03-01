var chai = require('chai'), expect = chai.expect, should = chai.should();
var treeSpecies = require('../dist/index.module.js');


describe('get Enum', function() {

    it('in en', function(done){
        var list = treeSpecies.getEnum('en');
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('string')
        done()
    })
    it('in es', function(done){
        var list = treeSpecies.getEnum('es');
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('string')
        done()
    })
    it('in de', function(done){
        var list = treeSpecies.getEnum('de');
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('string')
        done()
    })

})

describe('get first List', function() {

    it('in en', function(done){
        var list = treeSpecies.getFirstList('en');
        console.log(list);
        expect(list).to.be.a('object')
        done()
    })
    it('in es', function(done){
        var list = treeSpecies.getFirstList('es');
        console.log(list);
        expect(list).to.be.a('object')
        done()
    })
    it('in de', function(done){
        var list = treeSpecies.getFirstList('de');
        console.log(list);
        expect(list).to.be.a('object')
        done()
    })

})

describe('get Values', function() {

    it('in en', function(done){
        var list = treeSpecies.getValues('en');
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('array')
        done()
    })
    it('in es', function(done){
        var list = treeSpecies.getValues('es');
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('array')
        done()
    })
    it('in de', function(done){
        var list = treeSpecies.getValues('de');
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('array')
        done()
    })

})

describe('get first Values', function() {

    it('in en', function(done){
        var list = treeSpecies.getFirstValues('en');
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('string')
        done()
    })
    it('in es', function(done){
        var list = treeSpecies.getFirstValues('es');
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('string')
        done()
    })
    it('in de', function(done){
        var list = treeSpecies.getFirstValues('de');
        expect(list).to.be.a('array')
        expect(list).lengthOf.greaterThan(0)
        expect(list[0]).to.be.a('string')
        done()
    })

})