function furniture(list){

    let furniturePattern = /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/gm;
    let totalPrice = 0;
    let boughtFurniture = [];
    let currentFurniture = furniturePattern.exec(list);

    while(currentFurniture !==  null){
        let furniture = currentFurniture.groups['furniture'];
        let price = Number(currentFurniture.groups['price']);
        let quantity = Number(currentFurniture.groups['quantity']);

        totalPrice += price * quantity;
        boughtFurniture.push(furniture);

        currentFurniture = furniturePattern.exec(list);
    }
    
    console.log('Bought furniture:');
    for(let furniture of boughtFurniture){
        console.log(furniture);
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])
console.log('------------------------');
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase'])