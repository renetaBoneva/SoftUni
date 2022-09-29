function softUniBarIncome(input) {

    let information = input.join('-');
    let reggex = /%(?<name>[A-Z][a-z]+)%[^$%|.]*\<(?<product>\w+)\>[^$|%.a-z]*\|(?<count>\d+)[^$|%.]*\|(?<price>\d+\.\d+)?\$/gm;
    let totalIncome = 0;
    let currentMatch = reggex.exec(information);
    while (currentMatch !== null) {
        let currentTotal = Number(currentMatch.groups['count']) * currentMatch.groups['price'];
        let currentProduct = currentMatch.groups['product'];
        let currentClient = currentMatch.groups['name'];
        totalIncome += currentTotal;
        console.log(`${currentClient}: ${currentProduct} - ${currentTotal.toFixed(2)}`);

        currentMatch = reggex.exec(information);
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])
console.log('------------------------');
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])
