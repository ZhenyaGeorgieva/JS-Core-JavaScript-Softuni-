class Organization {
    constructor(name, budget) {
        this.name = name,
            this.budget = budget,
            this.employees = []
        this._departmentsBudget = {
            marketing: 0.4 * this.budget,
            finance: 0.25 * this.budget,
            production: 0.35 * this.budget
        }
    }
    get departmentsBudget() {
        return this._departmentsBudget;
    }
    add(employeeName, department, salary) {
        if (this.departmentsBudget[department] >= Number(salary)) {
            let obj = {};
            obj.employeeName = employeeName;
            obj.department = department;
            obj.salary = Number(salary);
            this.employees.push(obj);
            this._departmentsBudget[department] -= salary;
            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;
        }
        return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${this.departmentsBudget[department]}.`;
    }
    employeeExists(employeeName) {
        let filteredByName = this.employees.filter(x => x.employeeName == employeeName);
        if (filteredByName.length > 0) {
            return `Mr./Mrs. ${employeeName} is part of the ${filteredByName[0].department} department.`;
        }
        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
    }
    leaveOrganization(employeeName) {
        let employeeToLeave = this.employees.find(x => x.employeeName == employeeName);
        if (employeeToLeave) {
            let departmentToLeave = employeeToLeave.department;
            this._departmentsBudget[departmentToLeave] += Number(employeeToLeave.salary);
            let index = this.employees.indexOf(employeeToLeave);
            this.employees.splice(index, 1);
            return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
        }

        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
    }
    status() {
        let result = `${this.name.toUpperCase()} DEPARTMENTS:`;
        let marketing = this.employees.filter(x => x.department == 'marketing');
        let finance = this.employees.filter(x => x.department == 'finance');
        let production = this.employees.filter(x => x.department == 'production');
        marketing = marketing.sort((a, b) => b.salary - a.salary).map(x => x.employeeName);
        finance = finance.sort((a, b) => b.salary - a.salary).map(x => x.employeeName);
        production = production.sort((a, b) => b.salary - a.salary).map(x => x.employeeName);
        result += `\nMarketing | Employees: ${marketing.length}: ${marketing.join(', ')} | Remaining Budget: ${this.departmentsBudget.marketing}`;
        result += `\nFinance | Employees: ${finance.length}: ${finance.join(', ')} | Remaining Budget: ${this.departmentsBudget.finance}`;
        result += `\nProduction | Employees: ${production.length}: ${production.join(', ')} | Remaining Budget: ${this.departmentsBudget.production}`;
        return result;
    }
}
let organization = new Organization('SBTech', 10000);

organization.add('Peter', 'marketing', 800);
organization.add('Robert', 'production', 200);
organization.add('Peter', 'production', 300);
console.log(organization.status())



