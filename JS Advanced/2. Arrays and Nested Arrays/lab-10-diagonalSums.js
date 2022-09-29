function diagonalSums(matrix) {
    let length = matrix[0].length;
    let i = 0;
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    
    for (let arr of matrix) {
        if (i < length){
            mainDiagonal += Number(arr[i]);
        } else{
            break;
        }
        i++;
    }
    i = length-1;
    for (let arr of matrix) {
        if (i >= 0){
            secondaryDiagonal += Number(arr[i]);
        } else{
            break;
        }
        i--;
    }

    console.log(mainDiagonal, secondaryDiagonal);
}
diagonalSums([[20, 40],
[10, 60]]
);
diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
);
diagonalSums([[1, 1], [1, 1]]);