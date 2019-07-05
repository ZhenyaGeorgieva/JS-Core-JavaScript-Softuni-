function solve(input) {
    let totalATM = 0;
    let banknotes = [];
    
    for (let arr of input) {
        if (arr.length > 2) {
            let insertedTotal = 0;
            for (let insertedMoney of arr) {
                banknotes.push(+insertedMoney);
                totalATM += +insertedMoney;
                insertedTotal += +insertedMoney;
            }
            console.log(`Service Report: ${insertedTotal}$ inserted. Current balance: ${totalATM}$.`);
        } else if (arr.length == 2) {
            let currentBalance = arr[0];
            let moneyToWithdraw = arr[1];
            if (currentBalance < moneyToWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${currentBalance}$.`);
            } else if (totalATM < moneyToWithdraw) {
                console.log('ATM machine is out of order!');
            } else {
                totalATM-=moneyToWithdraw;
                console.log(`You get ${moneyToWithdraw}$. Account balance: ${currentBalance - moneyToWithdraw}$. Thank you!`);
                banknotes = banknotes.sort((a, b) => b - a);
                for (let i=0;i<=banknotes.length;i++) {
                    if (moneyToWithdraw <= 0) {
                        break;
                    }
                    if (banknotes[i] <= moneyToWithdraw) {
                        moneyToWithdraw -= banknotes[i];
                        banknotes.splice(i, 1);
                        i--;
                    }    
                }
            }
        } else if (arr.length == 1) {
            let banknoteSearch = arr[0];
            let filtered = banknotes.filter(x => x == banknoteSearch);
            console.log(`Service Report: Banknotes from ${banknoteSearch}$: ${filtered.length}.`);
        }
    }
}
solve([[20, 5, 100, 20, 1],
[457, 25],
[1],
[10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
[20, 85],
[5000, 4500]])