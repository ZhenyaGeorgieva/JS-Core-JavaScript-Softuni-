class Kitchen {
    constructor(budget) {
        this.budget = budget,
            this.menu = {},
            this.productsInStock = {},
            this.actionsHistory = []
    }

    loadProducts(products) {
        for (let productInfo of products) {
            let tokens = productInfo.split(' ');
            let productName = tokens[0];
            let productQuantity = Number(tokens[1]);
            let productPrice = Number(tokens[2]);

            if (this.budget >= productPrice) {
                this.budget -= productPrice;
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = productQuantity;
                } else {
                    this.productsInStock[productName] += productQuantity;
                }
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        return this.actionsHistory.join('\n');
    }

    addToMenu(mealName, neededProducts, price) {
        if (!this.menu.hasOwnProperty(mealName)) {
            this.menu[mealName] = {};
            this.menu[mealName].price = Number(price);
            this.menu[mealName].products = neededProducts;
            return `Great idea! Now with the ${mealName} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        } else {
            return `The ${mealName} is already in our menu, try something different.`;
        }
    }


    showTheMenu() {
        let mealsInMenu = Object.keys(this.menu);

        if (mealsInMenu.length == 0) {
            return `Our menu is not ready yet, please come later...`;
        } else {
            let result = '';
            for (let meal of mealsInMenu) {
                let currentMeal = meal;
                let currentMealPrice = this.menu[currentMeal].price;
                result += (`${currentMeal} - $ ${currentMealPrice}\n`);
            }
            return result;
        }
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let areProductsEnough = true;
            let neededProducts = this.menu[meal].products;
            for (let productInfo of neededProducts) {
                let tokens = productInfo.split(' ');
                let neededProduct = tokens[0];
                let neededQuantity = Number(tokens[1]);
                if (this.productsInStock[neededProduct] < neededQuantity
                    || !this.productsInStock.hasOwnProperty(neededProduct)) {
                    areProductsEnough = false;
                    break;
                }
            }
            if (areProductsEnough) {
                let mealPrice = this.menu[meal].price;
                this.budget += mealPrice;
                let neededProducts = this.menu[meal].products;
                for (let productInfo of neededProducts) {
                    let tokens = productInfo.split(' ');
                    let neededProduct = tokens[0];
                    let neededQuantity = Number(tokens[1]);
                    this.productsInStock[neededProduct] -= neededQuantity;
                    if (this.productsInStock[neededProduct] <= 0) {
                        delete this.productsInStock[neededProduct];
                    }
                }
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${mealPrice}.`;
            } else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }
    }
}
let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());