class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer,
            this.destination = destination,
            this.budget = budget,
            this.kids = {}
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }
        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
            this.kids[grade].push(`${name}-${budget}`);
            return this.kids[grade];
        } else {
            let filteredByName = this.kids[grade].filter(x => x == `${name}-${budget}`);
            if (filteredByName.length == 0) {
                this.kids[grade].push(`${name}-${budget}`);
                return this.kids[grade];
            } else {
                return `${name} is already in the list for this ${this.destination} vacation.`;
            }
        }
    }

    removeChild(name, grade) {
        if (this.kids.hasOwnProperty(grade)) {
            let filteredByName = this.kids[grade].filter(x => x.startsWith(name));
            if (filteredByName.length == 0) {
                return `We couldn't find ${name} in ${grade} grade.`;
            }
            let foundName = filteredByName[0];
            let findIndex = this.kids[grade].indexOf(foundName);
            this.kids[grade].splice(findIndex, 1);
            return this.kids[grade];
        }
    }

    toString() {
        let sorted = Object.keys(this.kids).sort((a, b) => a - b);
        if (this.numberOfChildren == 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        let result = `${this.organizer} will take ${this.numOfChildren} children on trip to ${this.destination}\n`;

        for (let grade of sorted) {
            result += `Grade: ${grade}\n`;
            let currentNum = 0;
            for (let kid of this.kids[grade]) {
                currentNum++;
                result += `${currentNum}. ${kid}\n`;
            }
        }
        return result;
    }

    get numberOfChildren() {
        this._numOfChildren = 0;
        for (let key of Object.keys(this.kids)) {
            this._numOfChildren += this.kids[key].length;
        }
        return this._numOfChildren;
    }
}
let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Lilly', 6, 2100));
console.log(vacation.registerChild('Pesho', 6, 2400));
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Tanya', 5, 6000));
console.log(vacation.registerChild('Mitko', 10, 1590));
console.log(vacation.numberOfChildren)