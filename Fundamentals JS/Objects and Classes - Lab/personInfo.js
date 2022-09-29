function personInfo(firstName, lastName, age){
    let myPerson = {
        firstName,
        lastName,
        age
    }
    return myPerson;
}
console.log(personInfo("Peter", "Pan","20"));