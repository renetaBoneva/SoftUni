function yardGreening(input){
    let squareMeters = Number(input[0]);
    let pricePerSquareMeters = 7.61;
    let percentDiscount = 0.18;

    let discount = squareMeters * pricePerSquareMeters * percentDiscount;
    let total = (squareMeters * pricePerSquareMeters ) - discount;

    console.log(`The final price is: ${total} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
yardGreening(['550'])