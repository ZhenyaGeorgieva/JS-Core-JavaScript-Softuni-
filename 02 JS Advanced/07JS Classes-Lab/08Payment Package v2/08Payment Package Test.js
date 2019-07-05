const PaymentPackage = require('./08Payment Package');
const expect = require('chai').expect;

describe('test payment package class', function () {

    it('should throw Error,initialize with first param - empty string', function () {
        expect(() => {
            let pay = new PaymentPackage('', 435);
            pay.name
        }).to.throw(Error)
    });
    it('should throw Error,initialize with first param- not string', function () {
        expect(() => {
            let pay = new PaymentPackage(4, 435);
            pay.name
        }).to.throw(Error)
    });
    it('should throw Error,initialize with second param - not number', function () {
        expect(() => {
            let pay = new PaymentPackage('sdd', 'sdfvvc');
            pay.name
        }).to.throw(Error)
    });
    it('should throw Error,initialize with second param - negative number', function () {
        expect(() => {
            let pay = new PaymentPackage('sdd', -3);
            pay.name
        }).to.throw(Error)
    });
    it('initialize with correct params', function () {
        let expected = '{"_name":"bank account","_value":54356,"_VAT":20,"_active":true}';
        let pay = new PaymentPackage('bank account', 54356);
        expect(JSON.stringify(pay)).to.equal(expected);
    });
    it('test accessor name, set other value', function () {
        let pay = new PaymentPackage('bank account', 54356);
        pay.name = 'other name';
        expect(pay.name).to.equal('other name')
    })
    it('test accessor name, not string', function () {
        expect(() => {
            let pay = new PaymentPackage('bank account', 54356);
            pay.name = 5;
            pay.name
        }).to.throw(Error)
    });
    it('test accessor name, empty string', function () {
        expect(() => {
            let pay = new PaymentPackage('bank account', 54356);
            pay.name = '';
            pay.name
        }).to.throw(Error)
    });

    it('test accessor value, set other value', function () {
        let pay = new PaymentPackage('bank account', 54356);
        pay.value = 954;
        expect(pay.value).to.equal(954)
    })
    it('test accessor value, not number', function () {
        expect(() => {
            let pay = new PaymentPackage('bank account', 54356);
            pay.value = 'some string';
            pay.value
        }).to.throw(Error)
    });
    it('test accessor value, negative num', function () {
        expect(() => {
            let pay = new PaymentPackage('bank account', 54356);
            pay.value = -5;
            pay.value
        }).to.throw(Error)
    });
    it('test accessor VAT, set other value', function () {
        let pay = new PaymentPackage('bank account', 54356);
        pay.VAT = 9;
        expect(pay.VAT).to.equal(9)
    })
    it('test accessor VAT, negative number', function () {
        expect(() => {
            let pay = new PaymentPackage('bank account', 54356);
            pay.VAT = -9;
            pay.VAT
        }).to.throw(Error)
    })
    it('test accessor VAT, not a number', function () {
        expect(() => {
            let pay = new PaymentPackage('bank account', 54356);
            pay.VAT = 'some string';
            pay.VAT
        }).to.throw(Error)
    })
    it('test accessor active, not boolean', function () {
        expect(() => {
            let pay = new PaymentPackage('bank account', 54356);
            pay.active = 'some string';
            pay.active
        }).to.throw(Error)
    })
    it('test accessor active, right boolean value', function () {
        let pay = new PaymentPackage('bank account', 54356);
        pay.active = true;
        expect(pay.active).to.be.true;
    })
    it('toString() returns overview of the instance', function () {
        let expected = `Package: bank account\n`
        expected += `- Value (excl. VAT): 54356\n`
        expected += `- Value (VAT 43%): 77729.08`;
        let pay=new PaymentPackage('bank account',54356);
        pay.VAT=43;
        pay.active=true;
        expect(pay.toString()).to.equal(expected)
    })
    it('toString() returns overview of the instance- with inactive label', function () {
        let expected = `Package: bank account (inactive)\n`
        expected += `- Value (excl. VAT): 54356\n`
        expected += `- Value (VAT 43%): 77729.08`;
        let pay=new PaymentPackage('bank account',54356);
        pay.VAT=43;
        pay.active=false;
        expect(pay.toString()).to.equal(expected)
    })

})