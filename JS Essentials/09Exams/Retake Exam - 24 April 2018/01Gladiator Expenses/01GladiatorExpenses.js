function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalPrice = 0;
    let brokenShiedCount = 0;
    
    for (let index = 1; index <= lostFights; index++) {
        if (index % 2 == 0) {
            totalPrice += helmetPrice;
        }
        if (index % 3 == 0) {
            totalPrice += swordPrice;
        }
        if (index % 6 == 0) {
            totalPrice += shieldPrice;
            brokenShiedCount++;
            if (brokenShiedCount % 2 == 0) {
                totalPrice += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);

}
solve(23,
    12.50,
    21.50,
    40,
    200)

