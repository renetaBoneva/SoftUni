function convertToJSON(firstName, lastName, hairColor){
    let obj = {};
    obj.name = firstName;
    obj.lastName = lastName;
    obj.hairColor = hairColor;
    console.log(JSON.stringify(obj));
}
convertToJSON('George', 'Jones', 'Brown')