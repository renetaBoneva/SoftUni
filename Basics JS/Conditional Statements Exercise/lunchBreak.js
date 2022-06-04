function lunchBreak(input){
    let serialName = input[0]
    let oneSeriaTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime * 1/8 ;
    let havingFunTime = breakTime * 1/4;
    let timeForSerial = breakTime - (lunchTime + havingFunTime);
    let difTime = Math.ceil(Math.abs(timeForSerial - oneSeriaTime));

    if(timeForSerial >= oneSeriaTime){
        console.log(`You have enough time to watch ${serialName} and left with ${difTime} minutes free time.`);
    } else{        
        console.log(`You don't have enough time to watch ${serialName}, you need ${difTime} more minutes.`);
    }
}
lunchBreak(["Teen Wolf",
"48",
"60"])


