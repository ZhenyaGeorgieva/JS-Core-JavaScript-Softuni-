const lookupChar = require('./03Char');
const expect = require('chai').expect;

describe('lookup char', function () {
    it('sholud return undefined if the first parameter is not string', function () {
        let expected = lookupChar(1, 2);
        expect(expected).to.equal(undefined, 'first parameter has to be string');
    });

    it('should return undefined if second parameter is not integer', function () {
        let expected = lookupChar('lklkl', 2.3);
        expect(expected).to.equal(undefined, 'second parameter has to be integer');
    });

    it('should return Incorrect index message if index parameter is negative', function () {
        let expected = lookupChar('hello', -2);
        expect(expected).to.equal('Incorrect index', 'second parameter has to be positive integer ')
    });

    it('should return Incorrect index message if index parameter is bigger than string length', function () {
        let expected = lookupChar('hello', 22);
        expect(expected).to.equal('Incorrect index', 'second parameter has to be smaller than string length')
    });

    it('shoud return the char at the given index', function () {
        let expected = lookupChar('hello', 2);
        expect(expected).to.equal('l', 'Does not return the correct char at the given index')
    });
})