const assert = require("assert");
const obj = require("./index");


describe('Testing describe', function(){

    it('Testing it', function(){
        assert.equal(obj.test(), 9, "its not equal")
    });

});