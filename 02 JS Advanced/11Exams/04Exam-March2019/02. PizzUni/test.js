const PizzUni = require('./PizzUni');
const expect = require('chai').expect;

describe('test class', function () {
    it('constructor test', function () {
        let expected = '{"registeredUsers":[],"availableProducts":{"pizzas":["Italian Style","Barbeque Classic","Classic Margherita"],"drinks":["Coca-Cola","Fanta","Water"]},"orders":[]}'
        let pizz = new PizzUni();
        expect(JSON.stringify(pizz)).to.equal(expected);
    });

    it('register email', function () {
        let expected = '{"email":"abv@abv.bg","orderHistory":[]}';
        let pizz = new PizzUni();
        expect(JSON.stringify(pizz.registerUser('abv@abv.bg'))).to.equal(expected);
    });
    it('adds email to the registeredUsers property', function () {
        let expected = '[{"email":"abv@abv.bg","orderHistory":[]}]';
        let pizz = new PizzUni();
        pizz.registerUser('abv@abv.bg');
        expect(JSON.stringify(pizz.registeredUsers)).to.equal(expected);
    })
    it('register email, error, email already used', function () {
        let pizz = new PizzUni();
        pizz.registerUser('abv@abv.bg');
        expect(() => {
            pizz.registerUser('abv@abv.bg')
        }).to.throw('This email address (abv@abv.bg) is already being used!')
    })
    it('register email, error, email already used', function () {
        let pizz = new PizzUni();
        pizz.registerUser('abv@abv.bg');
        expect(() => {
            pizz.registerUser('abv@abv.bg')
        }).to.throw(Error);
    })
    it('make order, try to use unregistered email,error', function () {
        let pizz = new PizzUni();
        pizz.registerUser('abv@abv.bg');
        expect(() => {
            pizz.makeAnOrder('vera@abv.bg', 'Italian Style', 'Coca-Cola')
        }).to.throw(Error)
    });
    it('make order, try to use unregistered email,error', function () {
        expect(() => {
            let pizz = new PizzUni();
            pizz.registerUser('abv@abv.bg');
            pizz.makeAnOrder('vera@abv.bg', 'Italian Style', 'Coca-Cola')
        }).to.throw('You must be registered to make orders!');
    });
    it('make order,try to order not existing pizza,error', function () {
        expect(() => {
            let pizz = new PizzUni();
            pizz.registerUser('abv@abv.bg');
            pizz.makeAnOrder('abv@abv.bg', 'Italian Style2', 'Coca-Cola')
        }).to.throw('You must order at least 1 Pizza to finish the order.')
    })
    it('make order,everyting ok, with drink', function () {
        let expected = '[{"orderedPizza":"Italian Style","orderedDrink":"Coca-Cola","email":"abv@abv.bg","status":"pending"}]';
        let pizz = new PizzUni();
        pizz.registerUser('abv@abv.bg');
        pizz.makeAnOrder('abv@abv.bg', 'Italian Style', 'Coca-Cola');
        expect(JSON.stringify(pizz.orders)).to.equal(expected);
    });
    it('make order, everything ok, without drink', function () {
        let expected = '[{"orderedPizza":"Italian Style","email":"abv@abv.bg","status":"pending"}]';
        let pizz = new PizzUni();
        pizz.registerUser('abv@abv.bg');
        pizz.makeAnOrder('abv@abv.bg', 'Italian Style');
        expect(JSON.stringify(pizz.orders)).to.equal(expected);
    })
    it('make order, everythig ok, returns index of order', function () {
        let pizz = new PizzUni();
        pizz.registerUser('abv@abv.bg');
        expect(pizz.makeAnOrder('abv@abv.bg', 'Italian Style')).to.equal(0)
    });
    it('complete order,returns object of the order', function () {
        let expected = '{"orderedPizza":"Italian Style","orderedDrink":"Coca-Cola","email":"abv@abv.bg","status":"completed"}';
        let pizz = new PizzUni();
        pizz.registerUser('abv@abv.bg');
        pizz.makeAnOrder('abv@abv.bg', 'Italian Style', 'Coca-Cola')
        expect(JSON.stringify(pizz.completeOrder())).to.equal(expected);
    });
    it('complete order, change status in orders prop', function () {
        let expected = '[{"orderedPizza":"Italian Style","orderedDrink":"Coca-Cola","email":"abv@abv.bg","status":"completed"},{"orderedPizza":"Italian Style","orderedDrink":"Coca-Cola","email":"abv1@abv.bg","status":"pending"}]'
        let pizz = new PizzUni();
        pizz.registerUser('abv@abv.bg');
        pizz.registerUser('abv1@abv.bg');

        pizz.makeAnOrder('abv@abv.bg', 'Italian Style', 'Coca-Cola')
        pizz.makeAnOrder('abv1@abv.bg', 'Italian Style', 'Coca-Cola')
        pizz.completeOrder()
        expect(JSON.stringify(pizz.orders)).to.equal(expected)
    })
    it('status, if order exists', function () {
        let expected = 'Status of your order: completed';
        let pizz = new PizzUni();
        pizz.registerUser('abv@abv.bg');
        pizz.registerUser('abv1@abv.bg');

        pizz.makeAnOrder('abv@abv.bg', 'Italian Style', 'Coca-Cola')
        pizz.makeAnOrder('abv1@abv.bg', 'Italian Style', 'Coca-Cola')
        pizz.completeOrder()
        expect(pizz.detailsAboutMyOrder(0)).to.equal(expected)
    });
    it('status, if order does not exist', function () {
        let expected = undefined;
        let pizz = new PizzUni();
        pizz.registerUser('abv@abv.bg');
        pizz.registerUser('abv1@abv.bg');

        pizz.makeAnOrder('abv@abv.bg', 'Italian Style', 'Coca-Cola')
        pizz.makeAnOrder('abv1@abv.bg', 'Italian Style', 'Coca-Cola')
        pizz.completeOrder()
        expect(pizz.detailsAboutMyOrder(3)).to.equal(expected);
    });
    it('does the user exists, returns object', function(){
     let expected='{"email":"abv@abv.bg","orderHistory":[{"orderedPizza":"Italian Style","orderedDrink":"Coca-Cola"}]}'
     let pizz=new PizzUni();
     pizz.registerUser('abv@abv.bg');
     pizz.registerUser('abv1@abv.bg');
     pizz.makeAnOrder('abv@abv.bg', 'Italian Style', 'Coca-Cola')
     pizz.makeAnOrder('abv1@abv.bg', 'Italian Style', 'Coca-Cola')
     pizz.completeOrder()
     expect(JSON.stringify(pizz.doesTheUserExist('abv@abv.bg'))).to.equal(expected)
    })
})