function storage(delivery) {

    //Creatig storage object
    let storage = new Map();

    for (let line of delivery) {
        //Receiving the delivery
        let product = line.split(' ')[0];
        let quantity = Number(line.split(' ')[1]);

        //Arrange products in the storage
        if (storage.has(product)) {
            let oldQuantity = storage.get(product);
            let newQuantity = quantity + oldQuantity;
            storage.set(product,newQuantity);

        } else {
            storage.set(product, quantity);
        }
    }

    //Printing storage content
    for(let product of storage){
        console.log(`${product[0]} -> ${product[1]}`);
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)