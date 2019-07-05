function solve(input) {
    let income = 0;
    
    for (let tokens of input) {
        tokens = tokens.split(', ');
        let price = 0;
        let insertedCoins = tokens[0];
        let typeOfDrink = tokens[1];
        if (typeOfDrink == 'coffee') {
            let typeOfDrink = tokens[2];
            if (typeOfDrink == 'caffeine') {
                price += 0.8;
            } else {
                price += 0.9;
            }
        } else {
            price += 0.80;
        }
        
        if (tokens.includes('milk')) {
            let milkPrice = Number((0.1 * price).toFixed(1));
            price += milkPrice;
        }
      
        if (tokens[tokens.length - 1] != 0) {
            price += 0.10;
        }
        
        if (price <= insertedCoins) {
            console.log(`You ordered ${typeOfDrink}. Price: ${price.toFixed(2)}$ Change: ${(insertedCoins - price).toFixed(2)}$`);
            income += price;
        } else {
            console.log(`Not enough money for ${typeOfDrink}. Need ${(price - insertedCoins).toFixed(2)}$ more.`);
        }
    }
    console.log(`Income Report: ${income.toFixed(2)}$`);
}
solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0'])