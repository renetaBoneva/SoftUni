function catalogue(data) {
    //Pushing products and their prices in an object;
    let productsObj = {};
    for (let line of data) {
        let [product, price] = line.split(' : ');
        productsObj[product] = price;
    }

    //Pushing first letters in an object;
    let letterObj = {};
    for (let currentProduct in productsObj) {
        let char = currentProduct.charAt(0);
        letterObj[char] = char;
    }

    //Sorting letters;
    let letterArr = [];
    for (let letter in letterObj) {
        letterArr.push(letter);
    }
    letterArr.sort((a, b) => { return a.localeCompare(b) })

    //Printing letters
    for (let letter of letterArr) {
        console.log(letter);

        //Sorting products
        let sortArr = [];
        for (let currentProduct in productsObj) {
            sortArr.push(currentProduct);
            sortArr.sort((a, b) => { return a.localeCompare(b) });
        }

        for (let product of sortArr) {
            let char = product.charAt(0);

            //Cheking if letters are similar
            if (letter === char) {
                console.log(`  ${product}: ${productsObj[product]}`);
            }
        }
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)
console.log('=======================');
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]
);
