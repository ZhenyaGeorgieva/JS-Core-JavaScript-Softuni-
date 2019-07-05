function coffeeStorage() {
    let coffeeBrands = {};
    let textArea = Array.from(JSON.parse(document.getElementsByTagName('textarea')[0].value));

    let paragraphs = document.getElementsByTagName('p');
    let reportSection = paragraphs[0];
    let inspectSection = paragraphs[1];

    for (let command of textArea) {
        if (command == 'REPORT') {
            let report = printReport(coffeeBrands);
            reportSection.innerHTML = report;
        } else if (command == 'INSPECTION') {
            let inspect = printInspect(coffeeBrands);
            inspectSection.innerHTML = inspect;
        } else if (command.includes('IN')) {
            command = command.split(', ');
            let brand = command[1];
            let coffee = command[2];
            let expireDate = command[3];
            let quantity = Number(command[4]);

            if (!coffeeBrands.hasOwnProperty(brand)) {
                coffeeBrands[brand] = {};
                coffeeBrands[brand][coffee] = {};
                coffeeBrands[brand][coffee].expireDate = expireDate;
                coffeeBrands[brand][coffee].quantity = quantity;
            } else {
                if (!coffeeBrands[brand].hasOwnProperty(coffee)) {
                    coffeeBrands[brand][coffee] = {};
                    coffeeBrands[brand][coffee].expireDate = expireDate;
                    coffeeBrands[brand][coffee].quantity = quantity;
                } else {
                    if (coffeeBrands[brand][coffee].expireDate < expireDate) {
                        coffeeBrands[brand][coffee].expireDate = expireDate;
                        coffeeBrands[brand][coffee].quantity = quantity;
                    } else if (coffeeBrands[brand][coffee].expireDate == expireDate) {
                        coffeeBrands[brand][coffee].quantity += quantity;
                    }
                }
            }
        } else if (command.includes('OUT')) {
            command = command.split(', ');
            let brandToSearch = command[1];
            let coffeeToSearch = command[2];
            let dateToCheck = command[3];
            let quantityToCheck = command[4];
            if (coffeeBrands.hasOwnProperty(brandToSearch)
                && coffeeBrands[brandToSearch].hasOwnProperty(coffeeToSearch)) {
                if (coffeeBrands[brandToSearch][coffeeToSearch].expireDate > dateToCheck) {
                    if (coffeeBrands[brandToSearch][coffeeToSearch].quantity >= quantityToCheck) {
                        coffeeBrands[brandToSearch][coffeeToSearch].quantity -= quantityToCheck;
                        if (coffeeBrands[brandToSearch][coffeeToSearch].quantity == 0) {
                            delete coffeeBrands[brandToSearch][coffeeToSearch];
                        }
                    }
                }
            }
        }
    }

    function printReport(coffeeBrands) {
        let report = '';
        for (let coffeeBrand in coffeeBrands) {
            report += `${coffeeBrand}:`;
            let coffees = coffeeBrands[coffeeBrand];
            for (let coffee in coffees) {
                let nameCoffee = coffee;
                let expireDate = coffees[coffee].expireDate;
                let quantity = coffees[coffee].quantity;
                report += ` ${nameCoffee} - ${expireDate} - ${quantity}.`;
            }
            report += '<br/>';
        }
        return report;
    }

    function printInspect(coffeeBrands) {
        let inspect = '';
        let sortedCoffeeBrands = Object.keys(coffeeBrands).sort((a, b) => a.localeCompare(b));
        for (let coffeeBrand of sortedCoffeeBrands) {
            inspect += `${coffeeBrand}:`;
            let sortedByQuantity = Object.entries(coffeeBrands[coffeeBrand]).sort((a, b) => b[1].quantity - a[1].quantity);
            for (let [coffee, obj] of sortedByQuantity) {
                let nameCoffee = coffee;
                let expireDate = obj.expireDate;
                let quantity = obj.quantity;
                inspect += ` ${nameCoffee} - ${expireDate} - ${quantity}.`;
            }
            inspect += '<br/>';
        }
        return inspect;
    }
    console.log(coffeeBrands);
}