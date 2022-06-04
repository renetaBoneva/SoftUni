function shopping(input){
    let budget = Number(input[0]);
    let videocardNum = Number(input[1]);
    let processorNum = Number(input[2]);
    let RAMnum = Number(input[3]);

    let priceVideocard = 250 * videocardNum;
    let priceProcessor = (0.35 * priceVideocard)*processorNum;
    let priceRAM = (0.1 * priceVideocard)*RAMnum;
    let total = priceProcessor + priceRAM + priceVideocard;

    if(videocardNum > processorNum){
        total = total * 0.85;
    }    
    let restMoney = Math.abs(budget - total);

    if(budget >= total){
        console.log(`You have ${restMoney.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${restMoney.toFixed(2)} leva more!`);
    }
}
shopping(["920.45","3","1","1"])
