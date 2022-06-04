function time15min(input){
    let inputHour = Number(input[0]);
    let inputMin = Number(input[1]);
    let outMin = inputMin + 15;
    let outHour = inputHour;

    if(outMin >= 60){
        outHour += 1;
        outMin = outMin % 60;
    }
    if(outHour == 24){
        outHour = 0;
    }
    
    if(outMin < 10){
        console.log(`${outHour}:0${outMin}`);
    }else if(outMin >= 10){
        console.log(`${outHour}:${outMin}`);
    }
}
time15min(["1", "46"])