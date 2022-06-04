function foodDelivery(input){
    let numChickenMenu = Number(input[0]);
    let numFishMenu = Number(input[1]);
    let numVegetarianMenu = Number(input[2]);
    let chickeMenuPrice = 10.35;
    let fishMenuPrice = 12.40;
    let vegetarianMenuPrice = 8.15;
    let deliveryPrice = 2.50;

    let desert = 0.2 * (numChickenMenu*chickeMenuPrice +numFishMenu*fishMenuPrice + numVegetarianMenu*vegetarianMenuPrice);
    let total = deliveryPrice + numChickenMenu*chickeMenuPrice + numFishMenu*fishMenuPrice + numVegetarianMenu*vegetarianMenuPrice + desert;
    
    console.log(total);
}
foodDelivery(["9","2","6"])