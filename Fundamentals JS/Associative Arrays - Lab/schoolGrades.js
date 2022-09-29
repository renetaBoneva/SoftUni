function schoolGrades(input) {

    //Making a copy of input array
    let data = input.slice();
    let inputObj = new Map;
    //Pushing students and their grades in result object
    for (let line of data) {
        line = line.split(' ');
        let name = line.shift();
        let grades = line.join(' ');
        if (inputObj.has(name)) {
            let oldGrades = inputObj.get(name);
            inputObj.set(name, `${oldGrades} ${grades}`);
        } else {
            inputObj.set(name, grades);
        }
    }
    //Sorting names alphabeticly
    let keys = Array.from(inputObj.keys()).sort((a, b) => { return a.localeCompare(b) });
    

    //Summing average grade
    let result = {};
    for (let studentInfo of inputObj) {
        let name = studentInfo.shift();
        let gradesArr = studentInfo[0].split(' ');
        let sum = 0;
        let gradesNum = gradesArr.length;
        for (let currentGrade of gradesArr) {
            sum += Number(currentGrade);
        }
        let averageGrade = sum / gradesNum;

        result[name] = averageGrade;
          
    }

    //Printing result
    for(let name of keys){
        console.log(`${name}: ${result[name].toFixed(2)}`);
    }

}
schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)
console.log('===========');
schoolGrades([
    'Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']
)