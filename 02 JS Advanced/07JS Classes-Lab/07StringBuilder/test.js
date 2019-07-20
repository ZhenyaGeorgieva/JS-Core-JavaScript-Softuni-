const StringBuilder = require('./StringBuilder');
const expect = require('chai').expect;

describe('test stringBuilder class', function () {
    it('initiazes with anything', function () {
        let expected = '{"_stringArray":[]}';
        let sb = new StringBuilder();
        expect(JSON.stringify(sb)).to.equal(expected);
    });
    it('initializes with string more than one char', function () {
        let expected = '{"_stringArray":["s","o","m","e"," ","s","t","r","i","n","g"]}';
        let sb = new StringBuilder('some string');
        expect(JSON.stringify(sb)).to.equal(expected);
    });
    it('throws an error if attempt to append argument which is not string', function () {
        let sb = new StringBuilder('t');;
        expect(() => {
            sb.append(4);
        }).to.throw(TypeError);
    })
    it('throws an error if attempt to prepend argument which is not string', function () {
        let sb = new StringBuilder('t');;
        expect(() => {
            sb.prepend(4);
        }).to.throw(TypeError);
    });
    it('prepends string in the beginning of the array', function () {
        let expected = 'rt';
        let sb = new StringBuilder('t');
        sb.prepend('r');
        expect(sb._stringArray.join('')).to.equal(expected);
    });
    it('appends string in the end of the array', function () {
        let expected = 'tr';
        let sb = new StringBuilder('t');
        sb.append('r');
        expect(sb._stringArray.join('')).to.equal(expected);
    });
    it('instert at, converts to array and insert at given index', function () {
        let expected = 'Hello I am here';
        let sb = new StringBuilder('Hello here');
        sb.insertAt('I am ', 6);
        expect(sb._stringArray.join('')).to.equal(expected);
    })
    it('insert at throws an error if first parameter is not string', function () {
        let sb = new StringBuilder('Hello here');
        expect(() => {
            sb.insertAt(435, 6);
        }).to.throw(TypeError);
    });
    it('remove at, removes from given index inclusively the given length', function () {
        let expected = 'Helloe'
        let sb = new StringBuilder('Hello here');
        sb.remove(5, 4);
        expect(sb._stringArray.join('')).to.equal(expected);
    })
    it('remove at, removes from given index inclusively the given length, length bigger than arr length', function () {
        let expected = 'Hello'
        let sb = new StringBuilder('Hello here');
        sb.remove(5, 10);
        expect(sb._stringArray.join('')).to.equal(expected);
    })
    it('toString() joins the elements in arr, without space', function () {
        let expected = 'Hello, here I am.I am in Sofia';
        let sb = new StringBuilder('Hello, here I am.');
        sb.append('I am in Sofia');
        expect(sb.toString()).to.equal(expected);
    })
    it('testing multiple functions at once', function () {
        let str = new StringBuilder('hello');
        str.append(', there');
        str.prepend('User, ');
        str.insertAt('woop', 5);
        expect(str.toString()).to.equal('User,woop hello, there');
    });
    it('test multiple functions at once+remove', function () {
        let str = new StringBuilder('hello');
        str.append(', there');
        str.prepend('User, ');
        str.insertAt('woop', 5);
        str.remove(6, 3);
        expect(str.toString()).to.equal('User,w hello, there');
    })
    it('check if functions are attached to proto', function () {
        expect(typeof StringBuilder.prototype.append === 'function').to.be.true;
        expect(typeof StringBuilder.prototype.prepend === 'function').to.be.true;
        expect(typeof StringBuilder.prototype.insertAt === 'function').to.be.true;
        expect(typeof StringBuilder.prototype.append === 'function').to.be.true;
        expect(typeof StringBuilder.prototype.toString === 'function').to.be.true;
    })
})