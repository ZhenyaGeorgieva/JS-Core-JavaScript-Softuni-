const isOddOrEven = require('./02EvenOrOdd');
const expect = require('chai').expect;

describe('isOddOrEven', function () {
    it('test with number parameter,should return undefined', function () {
        let expected = isOddOrEven(100);
        expect(expected).to.equal(undefined, 'function did not return the correct result')
    });

    it('test with object parameter, should return undefined', function () {
        let expected = isOddOrEven({ name: 'Ivo' });
        expect(expected).to.equal(undefined, 'function did not return the correct result')
    });

    it('string parameter with even length, should return even', function () {
        let expected = isOddOrEven('js');
        expect(expected).to.equal('even', 'function returned the right length value which is even')
    });

    it('string parameter with even length, should return odd', function () {
        let expected = isOddOrEven('j');
        expect(expected).to.equal('odd', 'function returned the right length value which is odd')
    });
});