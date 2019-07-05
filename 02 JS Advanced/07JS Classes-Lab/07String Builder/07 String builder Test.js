const StringBuilder = require('./07 String builder');
const expect = require('chai').expect;

describe('String builder tests', function () {
    let sb;
    beforeEach(function () {
        sb = new StringBuilder();
    });
    describe('check if functions are attached to prototype', function(){
        it('check if functions are attached to proto', function(){
            expect (typeof StringBuilder.prototype.append==='function').to.be.true;
            expect (typeof StringBuilder.prototype.prepend==='function').to.be.true;
            expect (typeof StringBuilder.prototype.insertAt==='function').to.be.true;
            expect (typeof StringBuilder.prototype.append==='function').to.be.true;
            expect (typeof StringBuilder.prototype.toString==='function').to.be.true;
        });
    })
    describe('constructor tests', function () {
        it('is initialized without params', function () {
            expect(sb._stringArray.join('')).to.be.equal('', 'Expected empty string');
        });

        it('is initialized with params', function () {
            sb = new StringBuilder('Test');
            const expected = 'Test';
            expect(sb._stringArray.join('')).to.be.equal(expected, 'Expected to return Test');
        });
    });

    describe('prepend tests', function () {
        it('ís initialized with wrong parameter type', function () {
            expect(() => {
                sb.prepend({ name: 'Pesho' })
            }).to.throw(TypeError);
        });

        it('is initialized with correct data', function () {
            const expected = 'Test123';
            sb.prepend('Test123');
            expect(sb._stringArray.join('')).to.be.equal(expected, 'Expected to return Test123');
        });

        it('is initialized with multiple correct data', function () {
            const expected = 'HellofromJS';
            sb.prepend('JS');
            sb.prepend('from');
            sb.prepend('Hello');

            expect(sb._stringArray.join('')).to.be.equal(expected, 'Expected to return HellofromJS');
        });
    });

    describe('append tests', function () {
        it('ís initialized with wrong parameter type', function () {
            expect(() => {
                sb.append({ name: 'Pesho' })
            }).to.throw(TypeError);
        });

        it('is initialized with correct data', function () {
            const expected = 'Test123';
            sb.append('Test123');
            expect(sb._stringArray.join('')).to.be.equal(expected, 'Expected to return Test123');
        });

        it('is initialized with multiple correct data', function () {
            const expected = 'HellofromJS';
            sb.append('Hello');
            sb.append('from');
            sb.append('JS');

            expect(sb._stringArray.join('')).to.be.equal(expected, 'Expected to return HellofromJS');
        });
    });

    describe('remove tests', function () {
        it('works correctly', function () {
            const expected = 'Hello JS';
            sb.append('Heello');
            sb.append(' JS');
            sb.remove(1, 1);
            expect(sb._stringArray.join('')).to.be.equal(expected, `Expected to return ${expected}`);
        });
       
        it('should work correctly when the function is called multiple times', function () {
            sb.append('abcdefghi');
            sb.remove(5, 2);
            sb.remove(3, 1);
            sb.remove(1, 2);
            const expected = 'aehi'
            expect(sb.toString()).to.be.equal(expected,`Expected to return ${expected}`);
        });

        it('should work correctly when multiple functions are called', function () {

            sb.append('ghi');  
            sb.prepend('abc');  
            sb.insertAt('def', 3); 
            sb.remove(3, 3);
      
            const expected = 'abcghi';
            expect(sb.toString()).to.be.equal(expected,`Expected to return ${expected}`);
        });
    });

    describe('insertAt tests', function () {
        it('works correctly', function () {
            const expected = 'Hello';
            sb.append('Hllo');
            sb.insertAt('e', 1);
            expect(sb._stringArray.join('')).to.be.equal(expected, `Expected to return ${expected}`);
        });

        it('ís tested with wrong parameter type', function () {
            expect(() => {
                sb.insertAt({ name: 'Pesho' }, 1)
            }).to.throw(TypeError);
        });
    });

    describe('toString tests', function () {
        it('test if it works correctly', function () {
            sb.prepend('Test123');
            expect(sb.toString()).to.be.equal('Test123')
        });
    });
});
