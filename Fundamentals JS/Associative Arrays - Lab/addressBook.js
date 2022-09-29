function addressBook(data) {

    let addressBook = new Map();
    // Pushing ifo into the map
    for(let line of data){
        let [name, address] = line.split(':');
        addressBook.set(name, address);
    }

    //Sorting names alphabeticly
    let sorted = Array.from(addressBook.keys()).sort((a,b) => {return a.localeCompare(b)});
    
    for(let personInfo of sorted){
    console.log(`${personInfo} -> ${addressBook.get(personInfo)}`);
    }

}
addressBook([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
)