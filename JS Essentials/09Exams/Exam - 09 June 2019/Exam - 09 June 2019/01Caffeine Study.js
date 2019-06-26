function solve(input) {

    let days = Number(input);
    let coffeeQuantityMl = 0;
    let cocaColaQuantityMl = 0;
    let teaQuantityInMl = 0;
    let energyQuantityMl = 0;

    for (let index = 1; index <= days; index++) {
        let coffeeDrunk = 3 * 150;
        coffeeQuantityMl += coffeeDrunk;

        let cocaColaDrunk = 2 * 250;
        cocaColaQuantityMl += cocaColaDrunk;

        let teaDrunk = 3 * 350;
        teaQuantityInMl += teaDrunk;

        if (index % 5 == 0) {
            let energyDrunk = 3 * 500;
            energyQuantityMl += energyDrunk;
        }
       
        if (index % 9 == 0) {
            let cocaColaDrunk = 4 * 250;
            cocaColaQuantityMl += cocaColaDrunk;

            let energyDrunk = 2 * 500;
            energyQuantityMl += energyDrunk;
        }
    }

    let coffeeCafeine = 40 / 100;
    let cocaColaCafeine = 8 / 100;
    let teaCaffeine = 20 / 100;
    let energyCaffeine = 30 / 100;

    let totalFromCoffee = coffeeCafeine * coffeeQuantityMl;
    let totalFromCocaCola = cocaColaCafeine * cocaColaQuantityMl;
    let totalFromTea = teaCaffeine * teaQuantityInMl;
    let totalFromEnergy = energyCaffeine * energyQuantityMl;

    let total = totalFromCoffee + totalFromCocaCola + totalFromTea + totalFromEnergy;
    console.log(`${total} milligrams of caffeine were consumed`)
}
solve(8)





