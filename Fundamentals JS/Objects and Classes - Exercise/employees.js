function employees(data){

   let result = [];
   for(let currentPerson of data){

    let personalNum = currentPerson.length;
    let currentObj = {};
    currentObj.name = currentPerson;
    currentObj.personalNum = personalNum;
    result.push(currentObj);
   }

   for (let currentPerson of result) {
    let [nameCurrent, numCurrent] = Object.values(currentPerson);
    console.log(`Name: ${nameCurrent} -- Personal Number: ${numCurrent}`);
   }
      
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
console.log(`----------------------------------`);
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    )