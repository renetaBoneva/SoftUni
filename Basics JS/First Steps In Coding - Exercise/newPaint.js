function newPaint(input){
    let nylonNeeded = Number(input[0]);
    let paintNeeded = Number(input[1]);
    let thinnerInLitres = Number(input[2]);
    let workingHours = Number(input[3]);
    let nylonPrice = 1.50;
    let paintPrice = 14.50;
    let thinnerPrice = 5.00;
    let bag = 0.40;

    let nylonTotalAmount = (nylonNeeded + 2)*nylonPrice;
    let paintTotalAmount = (paintNeeded + paintNeeded*10/100)*paintPrice;
    let thinnerTotalAmount = thinnerInLitres*thinnerPrice;
    let workers = ((nylonTotalAmount + paintTotalAmount + thinnerTotalAmount + bag) * 0.3)*workingHours;
    let total = nylonTotalAmount + paintTotalAmount + thinnerTotalAmount + bag + workers;

    console.log(total);
}
newPaint(["5","10","10","1"])