function petShop(input){
    let numDogFood = Number(input[0]);
    let numCatFood = Number(input[1]);
    let priceDogFood = 2.50;
    let priceCatFood = 4;

    let total = numCatFood * priceCatFood + numDogFood * priceDogFood;

    console.log(`${total} lv.`)
}
petShop(["5","4"])