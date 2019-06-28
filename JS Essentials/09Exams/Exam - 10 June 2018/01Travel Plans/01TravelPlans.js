function solve(input) {
    let totalEarned = 0;
    let specialized = ['Programming', 'Hardware maintenance', 'Cooking', 'Translating', 'Designing'];
    let average = ['Driving', 'Managing', 'Fishing', 'Gardening'];
    let clumsy = ['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting', 'Writing', 'Lecturing', 'Modeling', 'Nursing'];
    let specializedCount = 0;
    let clumsyCount = 0;
   
    for (let line of input) {
        let tokens = line.split(' : ');
        let activity = tokens[0];
        let price = Number(tokens[1]);
        
        if (specialized.includes(activity) && price >= 200) {
            let sumToAdd = 0.8 * price;
            specializedCount++;
            if (specializedCount % 2 == 0) {
                sumToAdd += 200;
            }
            totalEarned += sumToAdd;
        } else if (average.includes(activity)) {
            totalEarned += price;
        } else if (clumsy.includes(activity)) {
            clumsyCount++;
            if (clumsyCount % 2 == 0) {
                price *= 0.95;
            } else if (clumsyCount % 3 == 0) {
                price *= 0.90;
            }
            totalEarned += price;
        }
    }
    
    if(totalEarned<1000){
        console.log(`Final sum: ${totalEarned.toFixed(2)}`);
        console.log(`Mariyka need to earn ${(1000-totalEarned).toFixed(2)} gold more to continue in the next task.`);
    }else{
        console.log(`Final sum: ${totalEarned.toFixed(2)}`);
        console.log(`Mariyka earned ${(totalEarned-1000).toFixed(2)} gold more.`);
    }
}
solve(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"])