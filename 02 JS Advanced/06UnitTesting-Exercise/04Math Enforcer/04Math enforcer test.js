const mathEnforcer = require('./04Math enforcer');
const expect = require('chai').expect;

describe('Math Enforcer object testing', function () {
    it('Test add five function with positive number, should return the number+5', () => {
        let expected = mathEnforcer.addFive(10);
        expect(expected).to.equal(15, 'The function returns positive number result');
    });

    it('Test add five function with negative number,should return the number+5', () => {
        let expected = mathEnforcer.addFive(-3);
        expect(expected).to.equal(2, 'The function returns negative number result');
    });

    it('Testing add five function with floating point number, should return number+5', () => {
        let expected = mathEnforcer.addFive(2.3);
        expect(expected).to.equal(7.3, 'The function returns floating point number result');
    });

    it('Test add five function with string parameter', () => {
        let expected = mathEnforcer.addFive('some string');
        expect(expected).to.equal(undefined, 'The funtion returns undefined wheh string parameter is given');
    });

    it('Test subtract ten function with positive number,should return the number -10', () => {
        let expected = mathEnforcer.subtractTen(10);
        expect(expected).to.equal(0, 'The function returns the given positive number -10');
    });

    it('Test subtract ten function with negative number, should return the given negative number -10', () => {
        let expected = mathEnforcer.subtractTen(-3);
        expect(expected).to.equal(-13, 'The function returns the given negative number -10');
    });

    it('Test subtract ten function with floating point number, should return the given floating point number-10', () => {
        let expected = mathEnforcer.subtractTen(2.5);
        expect(expected).to.be.closeTo(-7.5, 0.01, 'The function returns the given floating point number -10');
    });

    it('Test subtract ten function with string parameter, should return undefined', () => {
        let expected = mathEnforcer.subtractTen('some string value');
        expect(expected).to.equal(undefined, 'The function returns undefined when string parameter is given');
    });

    it('Test sum function with two positive numbers,should return their sum', () => {
        let expected = mathEnforcer.sum(1, 2);
        expect(expected).to.equal(3, 'The function returns the sum of two positive numbers');
    });

    it('Test sum function with two negative numbers,should return their sum', () => {
        let expected = mathEnforcer.sum(-2, -4);
        expect(expected).to.equal(-6, 'The function returns the sum of two negative numbers');
    });

    it('Test sum function with two floating point numbers, should return their sum close to 0.01', () => {
        let expected = mathEnforcer.sum(1.1, 3.2);
        expect(expected).to.be.closeTo(4.3, 0.01, 'The function returns the sum of the two floating point numbers close to 0.01');
    });

    it('Test sum function with first parameter string, should return undefined', () => {
        let expected = mathEnforcer.sum('some string', 4);
        expect(expected).to.equal(undefined, 'The function returns undefined when first parameter is string');
    });

    it('Test sum function with second parameter string, should return undefined', () => {
        let expected = mathEnforcer.sum(4, 'some string');
        expect(expected).to.equal(undefined, 'The function returns undefined when second parameter is string');
    });
})