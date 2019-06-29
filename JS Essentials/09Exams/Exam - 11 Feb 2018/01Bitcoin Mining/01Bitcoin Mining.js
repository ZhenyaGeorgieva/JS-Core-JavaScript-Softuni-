function solve(input) {
    let daysCount = 0;
    let firstBitCoinDay = 0;
    let totalGold = 0;
    let firstDayAlreadyWritten = false;
   
    for (let goldAmount of input) {
        goldAmount = Number(goldAmount);
        daysCount++;
        if (daysCount % 3 == 0) {
            goldAmount *= 0.7;
        }
        totalGold += goldAmount;
        let currentSum = totalGold * 67.51;
        if (currentSum >= 11949.16 && !firstDayAlreadyWritten) {
            firstDayAlreadyWritten = true;
            firstBitCoinDay = daysCount;
        }
    }
    let bitCoinsBought = parseInt((totalGold * 67.51) / 11949.16);
    let bitCoinsBoughtPrice = bitCoinsBought * 11949.16;
    let moneyLeft = (totalGold * 67.51) - bitCoinsBoughtPrice;
    console.log(`Bought bitcoins: ${bitCoinsBought}`);
    
    if (bitCoinsBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitCoinDay}`);
    }
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
}
solve([3124.15, 504.212, 2511.124])

