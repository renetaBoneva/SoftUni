function equalNeighbors(matrix){

    let equalNeighborsCount = 0;

    for (let i = 1; i < matrix.length; i++) {
        let previousArr = matrix[i-1];
        let currentArr = matrix[i];
        let length = previousArr.length;
        for (let i = 0; i < length; i++) {
            if(previousArr[i] === currentArr[i]){
                equalNeighborsCount++;
            }            
        }
        for (let i = 0; i < length; i++) {
            let previous = currentArr[i -1];
            let current = currentArr[i];
            if(current === previous){
                equalNeighborsCount++;
            }
        }
    }
    for (let i = 0; i < matrix[0].length; i++) {
        let previous = matrix[0][i -1];
        let current = matrix[0][i];
        if(current === previous){
            equalNeighborsCount++;
        }
    }
    console.log(equalNeighborsCount);
}
equalNeighbors([['2', '3', '4', '7', '0'],
                ['4', '0', '5', '3', '4'],
                ['2', '3', '5', '4', '2'],
                ['9', '8', '7', '5', '4']]
);
console.log('---------------------');
equalNeighbors([['test', 'yes', 'yo', 'ho'],
                ['well', 'done', 'yo', '6'],
                ['not', 'done', 'yet', '5']]
);
console.log('---------------------');
equalNeighbors([[2, 2, 5, 7, 4],
                [4, 0, 5, 3, 4],
                [2, 5, 5, 4, 2]])