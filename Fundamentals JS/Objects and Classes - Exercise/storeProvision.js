function storeProvision(currentStock, orderedProdusts) {

    let currentStockL = currentStock.length;
    let orderedProdustsL = orderedProdusts.length;
    let result = {};

    for (let i = 0; i < currentStockL; i += 2) {
        let stock = currentStock[i];
        let quantity = Number(currentStock[i + 1]);
        result[stock] = quantity;
    }

    for (let i = 0; i < orderedProdustsL; i += 2) {
        let stock = orderedProdusts[i];
        let quantity = Number(orderedProdusts[i + 1]);
        if (result.hasOwnProperty(stock)) {
            result[stock] += quantity;
        } else {
            result[stock] = quantity;
        }
        
    }
    
    for( let product in result){
        let quantity = result[product];
        console.log(`${product} -> ${quantity}`);
    }

}
storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)