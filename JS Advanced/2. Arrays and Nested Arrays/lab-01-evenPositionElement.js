function evenPositionElement(array){

    let result = [];

    for (let i = 0; i < array.length; i++) {
        if(i%2 == 0){
            let currentElement = array[i];
            result.push(currentElement);
        }        
    }
    console.log(result.join(' '));
}
evenPositionElement(['20', '30', '40', '50', '60'])
evenPositionElement(['5', '10'])