let expect = require('chai').expect;
let Warehouse = require('./09Warehouse');

describe('Warehouse', function () {
    describe('Get tests', function () {
        it('should initialise with valid capacity', function () {
            let warehouse = new Warehouse(5);
            expect(warehouse.capacity).to.be.equal(5);
        });
    });

    describe('Set test', function () {
        it('should set correct capacity', function () {
            let ware = new Warehouse(5);
            ware.capacity = 6;
            expect(ware.capacity).to.be.equal(6);
        });

        it('should throw error with incorrect capacity', function () {
            let ware = new Warehouse(5);

            expect(() => ware.capacity = -5).to.throw('Invalid given warehouse space');
        });

        it('should throw error with incorrect capacity', function () {
            let ware = new Warehouse(5);

            expect(() => ware.capacity = '5').to.throw('Invalid given warehouse space');
        });

        it('should throw error with incorrect capacity', function () {
            let ware = new Warehouse(5);

            expect(() => ware.capacity = [5]).to.throw('Invalid given warehouse space');
        });

        it('should return error with zero', function () {
            expect(() => new Warehouse(0)).to.throw("Invalid given warehouse space");
        });

    });

    describe('addProduct', function () {
        it('should throw error when add more food than space', function () {
            let ware = new Warehouse(5);

            expect(() => ware.addProduct('Food', 'Burger', 7)).to.throw('There is not enough space or the warehouse is already full');
        });

        it('should throw error when add more drink than space', function () {
            let ware = new Warehouse(5);

            expect(() => ware.addProduct('Drink', 'Cola', 435)).to.throw('There is not enough space or the warehouse is already full');
        });

        it('should add food if there is space', function () {
            let ware = new Warehouse(5);
            ware.addProduct('Food', 'Burger', 1);

            let result = ware.availableProducts['Food'];
            expect(result['Burger']).to.be.equal(1);
        });

        it('should sum added food when its double', function () {
            let ware = new Warehouse(5);
            ware.addProduct('Food', 'Burger', 1);
            ware.addProduct('Food', 'Burger', 1);

            let result = ware.availableProducts['Food'];
            expect(result['Burger']).to.be.equal(2);
        });

        it('should add drink if there is space', function () {
            let ware = new Warehouse(5);
            ware.addProduct('Drink', 'Cola', 3);

            let result = ware.availableProducts['Drink'];
            expect(result['Cola']).to.be.equal(3);
        });

        it('should sum added drink when its double', function () {
            let ware = new Warehouse(50);
            ware.addProduct('Drink', 'Cola', 3);
            ware.addProduct('Drink', 'Cola', 3);

            let result = ware.availableProducts['Drink'];
            expect(result['Cola']).to.be.equal(6);
        });

        it('should return object with the given type when adding product successfully', () => {
            let warehouse = new Warehouse(2);
            expect(warehouse.addProduct('Food', 'Pizza', 1)).to.be.an('Object');
            expect(warehouse.addProduct('Drink', 'Water', 1)).to.be.an('Object');
            expect(warehouse.availableProducts.Food).to.haveOwnProperty('Pizza');
            expect(warehouse.availableProducts.Drink).to.haveOwnProperty('Water');

        });
    });

    describe('orderProducts', function () {
        it('should sort food products of a given type in descending order by the quantity', function () {
            let warehouse = new Warehouse(50);

            warehouse.addProduct('Food', 'Pizza', 1);
            warehouse.addProduct('Food', 'Tomato', 5);
            warehouse.addProduct('Food', 'Bred', 3);

            warehouse.orderProducts('Food');

            let expected = 'Tomato Bred Pizza';

            expect(Object.keys(warehouse.availableProducts['Food']).join(' ')).to.be.equal(expected);
        });

        it('should sort drink products of a given type in descending order by the quantity', function () {
            let warehouse = new Warehouse(50);

            warehouse.addProduct('Drink', 'Water', 1);
            warehouse.addProduct('Drink', 'Rakia', 5);
            warehouse.addProduct('Drink', 'Birichka', 3);

            warehouse.orderProducts('Drink');

            let expected = 'Rakia Birichka Water';

            expect(Object.keys(warehouse.availableProducts['Drink']).join(' ')).to.be.equal(expected);
        });

    });

    describe('occupiedCapacity', function () {
        it('should return a number, which represents the already occupied place in the warehouse', function () {
            let warehouse = new Warehouse(60);

            warehouse.addProduct('Food', 'Pizza', 2);
            warehouse.addProduct('Drink', 'Pepsi', 5);

            expect(warehouse.occupiedCapacity()).to.be.equal(7);
        });

    });

    describe('revision', function () {
        it('should throw error if there is no products in warehouse', function () {
            let warehouse = new Warehouse(60);

            expect(warehouse.revision()).to.be.equal('The warehouse is empty');
        });

        it('should return string with all products', function () {
            let warehouse = new Warehouse(60);

            warehouse.addProduct('Food', 'Banana', 2);
            warehouse.addProduct('Food', 'Pizza', 4);
            warehouse.addProduct('Food', 'Apple', 8);

            warehouse.addProduct('Drink', 'Cola', 5);
            warehouse.addProduct('Drink', 'Fanta', 2);
            warehouse.addProduct('Drink', 'Rakia', 9);

            let output = '';

            for (let types of Object.keys(warehouse.availableProducts)) {
                output += `Product type - [${types}]\n`;

                for (let prod of Object.keys(warehouse.availableProducts[types])) {
                    output += `- ${prod} ${warehouse.availableProducts[types][prod]}\n`;
                }
            }

            expect(warehouse.revision()).to.be.equal(output.trim());

        });

    });

    describe('scrapeAProduct', function () {
        it('should throw error with invalid product', function () {
            let warehouse = new Warehouse(60);

            expect(() => warehouse.scrapeAProduct('Banana', 1)).to.throw('Banana do not exist')
        });

        it('should reduce quantity', function () {
            let warehouse = new Warehouse(60);

            warehouse.addProduct('Food', 'Banana', 2);
            warehouse.scrapeAProduct('Banana', 1);

            expect(warehouse.availableProducts['Food']['Banana']).to.be.equal(1);
        });

        it('should reset product', function () {
            let warehouse = new Warehouse(60);

            warehouse.addProduct('Food', 'Banana', 2);
            warehouse.scrapeAProduct('Banana', 3);

            expect(warehouse.availableProducts['Food']['Banana']).to.be.equal(0);
        });
    });
});
