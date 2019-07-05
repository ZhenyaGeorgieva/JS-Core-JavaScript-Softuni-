function solve(priceVat, vatRate) {

    let vatRatePercent = vatRate / 100;
    let priceWithoutVat = priceVat / (1 + vatRatePercent);
    console.log(priceWithoutVat.toFixed(2));
}
solve(120.00,
    20.00)