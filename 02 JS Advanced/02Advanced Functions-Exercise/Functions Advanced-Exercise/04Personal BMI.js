function solve(name, age, weight, height) {
    let chart = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(weight / Math.pow(height / 100, 2)),
        status: ''
    }

    if (chart.BMI< 18.5) {
        chart.status='underweight';
    } else if (chart.BMI < 25) {
        chart.status= 'normal';
    } else if (chart.BMI< 30) {
        chart.status='overweight';
    } else {
        chart.status='obese';
        chart.recommendation = 'admission required';
    }

    return chart;
}
console.log(solve('Peter', 29, 75, 182));
