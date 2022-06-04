function godzilaVsKong(input){
    let moveBudget = Number(input[0]);
    let numExtra = Number(input[1]);
    let clothCostFor1 = Number(input[2]);

    let decor = moveBudget * 0.1;

    if(numExtra >= 150){
        clothCostFor1 = clothCostFor1 * 0.9;
    }

    let clothesCost = clothCostFor1 * numExtra;
    let total = clothesCost + decor;
    let restMoney = 0;

    if(total > moveBudget){
        restMoney = total - moveBudget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${restMoney.toFixed(2)} leva more.`);

    } else {
        restMoney = moveBudget - total;
        console.log("Action!");
        console.log(`Wingard starts filming with ${restMoney.toFixed(2)} leva left.`);
    }

}
godzilaVsKong