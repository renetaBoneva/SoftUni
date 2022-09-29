function orders(product, num) {

    let result = 0;
    switch (product) {
        case 'coffee': result = num * 1.50; break;
        case 'water': result = num * 1.00; break;
        case 'coke': result = num * 1.40; break;
        case 'snacks': result = num * 2.00; break;
    }
    return result.toFixed(2);
}
console.log(orders("coffee", 2));