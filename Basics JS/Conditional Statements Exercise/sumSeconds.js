function sumSeconds(input){
    let firstRacer = Number(input[0]);
    let secondRacer = Number(input[1]);
    let thirdRacer = Number(input[2]);

    let sumTime = firstRacer + secondRacer + thirdRacer;
    let minutes = Math.floor(sumTime / 60);
    let seconds = sumTime % 60;

    if(seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    } else{        
        console.log(`${minutes}:${seconds}`);
    }

}
sumSeconds(["35","45","44"])
