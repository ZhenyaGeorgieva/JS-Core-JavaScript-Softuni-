function solve(examPoints, homeworkCompleted, totalHomework) {
    if (examPoints == 400) {
        console.log('6.00');
    } else {
        let gotFromTotalPoints = ((examPoints / 400) * 0.9) * 100;
        let gotFromHomework = ((homeworkCompleted / totalHomework) * 0.1) * 100;
        let totalPoints = gotFromTotalPoints + gotFromHomework;
        let grade = 3 + 2 * (totalPoints - 100 / 5) / (100 / 2);
        
        if (grade >= 6) {
            console.log('6.00');
        } else if (grade < 3) {
            console.log('2.00');
        } else {
            console.log(grade.toFixed(2));
        }
    }
}
solve(200, 5, 5)