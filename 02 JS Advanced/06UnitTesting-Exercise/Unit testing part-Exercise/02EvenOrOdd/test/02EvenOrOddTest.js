const isOddOrEven = require('../02EvenOrOdd');
const expect = require('chai').expect;

describe('isOddOrEven', function () {
    it('test with number parameter,should return undefined',function(){
        let expected=isOddOrEven(100);
        expect(expected).to.equal(undefined,'function did no return the correct result')
    })
    
});