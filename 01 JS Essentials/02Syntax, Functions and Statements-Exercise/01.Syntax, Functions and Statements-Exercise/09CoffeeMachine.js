function solve(input) {
    let sum = 0;

    for (let index = 0; index < input.length; index++) {
        let tokens = input[index].split(", ");
        let coins = Number(tokens[0]);
        let drink = tokens[1];
        let drinkPrice = 0.8;

        if (tokens.includes("caffeine")) {
            drinkPrice = 0.8;
        }

        if (tokens.includes("decaf")) {
            drinkPrice = 0.9;
        }

        if (tokens.includes("milk")) {
            let additionPrice = Number((drinkPrice * 0.1).toFixed(1));
            drinkPrice += additionPrice;
        }

        let sugar = Number(tokens[tokens.length - 1]);

        if (sugar != 0) {
            drinkPrice = Number(drinkPrice) + 0.1;
        }

        if (coins >= drinkPrice) {
            let finalPrice = drinkPrice.toFixed(2);
            let difference = coins - drinkPrice;
            let finalDifference = difference.toFixed(2);
            console.log(`You ordered ${drink}. Price: $${finalPrice} Change: $${finalDifference}`);
            sum += drinkPrice;
        } else {
            let test = drinkPrice - coins;
            let fixed = test.toFixed(2);
            let final = fixed.padEnd(2, "0");
            console.log(`Not enough money for ${drink}. Need $${final} more.`)

        }
    }
    console.log(`Income Report: $${sum.toFixed(2)}`);
}
solve(['1.00, coffee, caffeine, milk, 4',
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0'])
