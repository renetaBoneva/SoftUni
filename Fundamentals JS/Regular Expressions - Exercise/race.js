function race(input) {

    //Making a copu of the input
    let data = input.slice();
    //Getting an array of names 
    let nameList = data.shift().split(', ');
    //Making a rang list with all he names of namelist
    let rangListObj = new Map();
    for (let name of nameList) {
        rangListObj.set(name, 0)
    }


    let i = 0;
    let curentLine = undefined;
    let isEnd = true;
    //Reading the result of the players
    while (isEnd) {
        curentLine = data[i];
        if (curentLine === 'end of race') {
            isEnd = false;
            break;
        }

        let namePattern = /[^A-Za-z]/;
        let digitPattern = /[^0-9]+/;
        let currentName = curentLine.split(namePattern).join('');
        let currentRanDigits = curentLine.split(digitPattern).join('');
        let ranKM = 0;
        //Counting ran kilometres
        for (let digit of currentRanDigits) {
            ranKM += Number(digit);
        }

        //Writing the result of the competitor
        if (nameList.includes(currentName)) {
            let oldRanDistance = rangListObj.get(currentName);
            let updatedRanDistance = oldRanDistance + ranKM;
            rangListObj.set(currentName, updatedRanDistance);
        }
        i++;
    }

    let sortedArr = Array.from(rangListObj.entries())
        .sort(([keyA, valueA], [keyB, valueB]) => {
            return valueB - valueA;
        })

    //Printing first 3 
    let [fisrt, result1] = sortedArr[0];
    let [second, result2] = sortedArr[1];
    let [third, result3] = sortedArr[2];

    console.log(`1st place: ${fisrt}`);
    console.log(`2nd place: ${second}`);
    console.log(`3rd place: ${third}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)
console.log('---------------------');
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']
)