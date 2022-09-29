function numbers(array) {

    let myArr = array.slice();
    let arr = myArr.shift().split(' ');
    let i = 0;
    while (myArr[i] != 'Finish') {

        let currentLine = myArr[i].split(' ');
        let currentComand = currentLine[0];
        let value = currentLine[1];
        switch (currentComand) {
            case 'Add':
            arr.push(value);
                break;
            case 'Remove':
            if (arr.includes(value)) {
                arr.splice(arr.indexOf(value),1);
            }
                break;
            case 'Replace':
            if (arr.includes(value)) {
                let replaceNum = currentLine[2];
                arr.splice(arr.indexOf(value),1, replaceNum);
            }
                break;
            case 'Collapse':
                arr = arr.filter(el => el > Number(value));
                break;

        }

        i++;
    }
    return arr.join(' ');
}

console.log(numbers(["1 20 -1 10",
    "Collapse 8",
    "Finish"]));
console.log('___________________________');console.log(numbers(["5 9 70 -56 9 9",
    "Replace 9 10",
    "Remove 9",
    "Finish"]));console.log(numbers(["1 4 5 19",
    "Add 1",
    "Remove 4",
    "Finish"]));
console.log('___________________________');

