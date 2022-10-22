function getPeople(){
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let dataArr = ['Anna Simpson 22 anna@yahoo.com', 'SoftUni', 'Stephan Johnson 25', 'Gabriel Peterson 24 g.p@gmail.com'];
    let result = [];
    for(let data of dataArr){
        let [firstName, lastName, age, email] = data.split(' ');
        let currentPerson;
        if(age == undefined){
            currentPerson = new Person(firstName, lastName, age, email);
        } else{
            currentPerson = new Person(firstName, lastName, Number(age), email);
        }
        result.push(currentPerson);
    }
    return result;
}
