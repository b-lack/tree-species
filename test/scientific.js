var chai = require('chai'), expect = chai.expect, should = chai.should();
var treeSpecies = require('../dist/index.module.js');


describe('get Scientific', function() {

    it('in en', function(done){
        var list = treeSpecies.getListScientific('en');
        expect(list).to.be.a('array')
        console.log(list);
        done()
    })

})