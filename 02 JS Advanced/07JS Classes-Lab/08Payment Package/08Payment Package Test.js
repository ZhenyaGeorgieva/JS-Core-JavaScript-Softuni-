const PaymentPackage = require('./08Payment Package');
const expect = require('chai').expect;

describe('Payment package', function () {
    let paymentPackage = null;

    beforeEach(function () {
        paymentPackage = new PaymentPackage('test', 100);
    });

    describe('name testing', function () {
        it('initializes with correct data', function () {
            let expected = '{"_name":"Ivan","_value":50,"_VAT":20,"_active":true}';
            let newPayment = new PaymentPackage('Ivan', 50);
            expect(JSON.stringify(newPayment)).to.equal(expected)
        })
        it('should throw an error when non string argument is given', function () {
            expect(() => {
                paymentPackage.name({})
            }).to.throw(Error);
        });

        it('should throw an error when empty string argument is given', function () {
            expect(() => {
                paymentPackage.name('')
            }).to.throw(Error);
        });

        it('should set the name value when correct string parameter is given', function () {
            let expected = 'John';
            paymentPackage.name = 'John';
            expect(paymentPackage.name).to.be.equal(expected, 'Expected to return John');
        });
    });

    describe('value testing', function () {
        it('should thow an error when non number argument is given', function () {
            expect(() => {
                paymentPackage.value('some string')
            }).to.throw(Error);
        });

        it('should throw an error when negative number argument is given', function () {
            expect(() => {
                paymentPackage.value(-3)
            }).to.throw(Error);
        });

        it('should set the right value when correct argument is given', function () {
            let expected = 200;
            paymentPackage.value = 200;
            expect(paymentPackage.value).to.be.equal(expected, 'expected to return 200')
        });

        it('should work corretly if 0 parameter is given', function () {
            let expected = 0;
            paymentPackage.value = 0;
            expect(paymentPackage.value).to.be.equal(expected, 'expeced to return 0')
        });
    });
    describe('Vat testing', function () {
        it('should throw an error when non number parameter is given', function () {
            expect(() => {
                paymentPackage.VAT = {}
            }).to.throw(Error);
        });

        it('should throw an error when negative value is given', function () {
            expect(() => {
                paymentPackage.VAT = -4
            }).to.throw(Error);
        });

        it('should have defauld value of 20', function () {
            let expected = 20;
            expect(paymentPackage.VAT).to.be.equal(expected, 'should return default VAT value of 20')
        });

        it('should set VAT value when correct parameter is given', function () {
            let expected = 30;
            paymentPackage.VAT = 30;
            expect(paymentPackage.VAT).to.be.equal(expected, 'should return vat value of 30')
        });
    });

    describe('Active testing', function () {
        it('should return error when non boolean parameter is given', function () {
            expect(() => {
                paymentPackage.active = {}
            }).to.throw(Error)
        });

        it('should be true by default', function () {
            expect(paymentPackage.active).to.be.true;
        });

        it('should set the given active value', function () {
            paymentPackage.active = false;
            expect(paymentPackage.active).to.be.false;
        })
    });

    describe('toString testing', function () {
        it('should print the result correctly', function () {
            let expected = 'Package: test\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120';
            expect(paymentPackage.toString()).to.be.equal(expected, 'should print the right formatted text')
        });

        it('should attach inactive label when active==false', function () {
            let expected = 'Package: test (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120';
            paymentPackage.active = false;
            expect(paymentPackage.toString()).to.be.equal(expected, 'should attach the inactive label when active==false')
        })
    });
})