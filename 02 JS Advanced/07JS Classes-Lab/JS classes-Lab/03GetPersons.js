function getPersons(){
    let resultArr=[];
    class Person{
        constructor(firstName,lastName,age,email){
            this.firstName=firstName,
            this.lastName=lastName,
            this.age=age,
            this.email=email
        };
    
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        };
    }
    let personOne=new Person('Anna','Simpson',22,'anna@yahoo.com');
    resultArr.push(personOne);

    let personTwo=new Person('SoftUni');
    resultArr.push(personTwo);

    let personThree=new Person('Stephan','Johnson',	25);
    resultArr.push(personThree);

    let personFour=new Person('Gabriel','Peterson',24,'g.p@gmail.com');
    resultArr.push(personFour);

    return resultArr;
}


