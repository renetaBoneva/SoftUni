class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.")
        }

        this.products.push({ product, quantity });
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`
    }
    quantityCheck(product, minimalQuantity) {
        let currenProduct = this.products.find(prodObj => prodObj.product == product)

        if (!currenProduct) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }

        if (minimalQuantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        } else if (minimalQuantity <= currenProduct.quantity) {
            return `You have enough from product ${product}.`
        } else {
            let difference;
            this.products.forEach(prodObj => {
                if (prodObj.product == product) {
                    difference = minimalQuantity - prodObj.quantity;
                    prodObj.quantity = minimalQuantity;
                }
            })
            return `You added ${difference} more from the ${product} products.`
        }
    }

    sellProduct(product) {
        let currenProduct = this.products.find(prodObj => prodObj.product == product)
        if (!currenProduct) {
            throw new Error(`There is no ${product} in the warehouse.`)
        } else {
            this.products.forEach(prodObj => {
                if (prodObj.product == product) {
                    prodObj.quantity--;
                    this.sales.push({ product, 'quantity': 1 })
                }
            })
            return `The ${product} has been successfully sold.`
        }
    }
    revision() {
        if (this.sales.length == 0) {
            throw new Error("There are no sales today!")
        }
        let result = '';
        result += `You sold ${this.sales.length} products today!\nProducts in the warehouse:\n`
        let leftProductsArr = []
        this.products.forEach(prodObj => {
            leftProductsArr.push(`${prodObj.product}-${prodObj.quantity} more left`);
        })
        result += leftProductsArr.join('\n')
        return result;
    }

}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());


