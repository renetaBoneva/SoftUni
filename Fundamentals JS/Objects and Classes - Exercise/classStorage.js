function classStorage() {

    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = 0;
        }

        addProduct(product) {
            let [name, price, quantity] = Object.values(product);
            this.capacity -= quantity;
            this.totalCost += price * quantity;
            this.storage.push(product);
        }

        getProducts() {
            let reult = [];
            for (let currentProduct of this.storage) {
                reult.push(JSON.stringify(currentProduct));
            }
            return reult.join('\n')
        }

    }

    let productOne = { name: 'Tomato', price: 0.90, quantity: 19 };
    let productTwo = { name: 'Potato', price: 1.10, quantity: 10 };
    let storage = new Storage(30);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    console.log(storage.totalCost);

}
classStorage()