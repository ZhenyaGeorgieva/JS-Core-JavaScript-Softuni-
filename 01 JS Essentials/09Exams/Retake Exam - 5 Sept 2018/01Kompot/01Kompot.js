function solve(input) {
    
    let totalPlumKg = 0;
    let totalPeachKg = 0;
    let totalCheryKg = 0;
    let rakiaFruitsKg = 0;
    
    for (let index = 0; index < input.length; index++) {
        let tokens = input[index].split(/\s+/);
        let fruit = tokens[0];
        let fruitKg = Number(tokens[1]);
        if (fruit === 'cherry') {
            totalCheryKg += fruitKg;
        } else if (fruit === 'peach') {
            totalPeachKg += fruitKg;
        } else if (fruit === 'plum') {
            totalPlumKg += fruitKg;
        } else {
            rakiaFruitsKg += fruitKg;
        }
    }
    let peachCompots = Math.floor(((totalPeachKg * 1000) / 140) / 2.5);
    let cherryCompots = Math.floor(((totalCheryKg * 1000) / 9) / 25);
    let plumCompots = Math.floor(((totalPlumKg * 1000) / 20) / 10);
    let rakia = rakiaFruitsKg * 0.2;

    console.log(`Cherry kompots: ${cherryCompots}`);
    console.log(`Peach kompots: ${peachCompots}`);
    console.log(`Plum kompots: ${plumCompots}`);
    console.log(`Rakiya liters: ${rakia.toFixed(2)}`);
}

solve(['apple 6',
    'peach 25.158',
    'strawberry 0.200',
    'peach 0.1',
    'banana 1.55',
    'cherry 20.5',
    'banana 16.8',
    'grapes 205.65'
    , 'watermelon 20.54'])