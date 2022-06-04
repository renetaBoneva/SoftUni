function toyShop(input){
    let travelPrice = Number(input[0]);
    let puzzleNum = Number(input[1]);
    let dollNum = Number(input[2]);
    let teddyBearNum = Number(input[3]);
    let miniNum = Number(input[4]);
    let truckNum = Number(input[5]);

    let pricePuzzle = 2.60;
    let priceDoll = 3;
    let priceTeddyBear = 4.10;
    let priceMini = 8.20;
    let priceTruck = 2;

    let total = puzzleNum * pricePuzzle + dollNum * priceDoll + teddyBearNum * priceTeddyBear + miniNum * priceMini + truckNum * priceTruck;
    let toysNum = puzzleNum + dollNum + teddyBearNum + miniNum + truckNum;
    
    if(toysNum >=50 ){
        total = total * 0.75;
    }

    let profit = total * 0.9;
    let restMoney = 0;

     if(profit >= travelPrice){
        restMoney = profit - travelPrice;
         console.log(`Yes! ${(restMoney).toFixed(2)} lv left.`);
     } else {
        restMoney = travelPrice - profit;
         console.log(`Not enough money! ${(restMoney).toFixed(2)} lv needed.`);
     }
}
toyShop(['40.8', '20', '25', '30', '50', '10'])