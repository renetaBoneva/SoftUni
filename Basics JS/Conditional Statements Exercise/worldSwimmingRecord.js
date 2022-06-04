function worldSwimmingRecord(input){
    let recordInSeconds = Number(input[0]);
    let recordInMetres = Number(input[1]);
    let recordTime = Number(input[2]);

    let ivansTime = recordInMetres * recordTime;
    let bonusTime = (Math.floor(recordInMetres /15 )).toFixed(0)* 12.5;
    let totalTime = ivansTime + bonusTime;
    let dif = Math.abs(totalTime - recordInSeconds);

    if(totalTime > recordInSeconds){
        console.log(`No, he failed! He was ${dif.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}
worldSwimmingRecord(["10464","1500","20"])



