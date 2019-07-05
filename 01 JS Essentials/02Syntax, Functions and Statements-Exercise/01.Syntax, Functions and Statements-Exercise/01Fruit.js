function solve(fruit, quantity, price) {
 
    let kg = quantity / 1000;
    let money = kg * price;
    console.log(`I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
}
solve('orange', 2500, 1.80)