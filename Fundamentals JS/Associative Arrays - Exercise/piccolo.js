//Ne dava tochki v judge
function piccolo(data) {

    let garage = new Map();

    for (let line of data) {
        let [command, carNumber] = line.split(', ');
        let number = carNumber.split('');
        number = Number(number.slice(2, 6).join(''));
        if (command === 'IN') {
            garage.set(carNumber, number);
        } else {
            garage.delete(carNumber);
        }
    }
    
    if(garage.size === 0){
        console.log(`Parking Lot is Empty`);        
    } else{        
        let sortedArr = Array.from(garage.entries())
            .sort(([keyA, valueA],
                [keyB, valueB]) => {
                return valueA - valueB
            })

        for (let [car, number] of sortedArr) {
            console.log(car);
    
        }
    }
}
piccolo(
    ['IN, CA2844AA',
        'OUT, CA2844AA',
        'IN, CA1234TA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU']
)
console.log('----------------------');
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)
