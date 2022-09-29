function fruit(fruit, weight, price){

    let weightInKG = weight / 1000;
    let total = weightInKG * price

    console.log(`I need \$${total.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruit}.`);

}
fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)
