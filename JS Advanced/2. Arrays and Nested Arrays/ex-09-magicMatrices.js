function magicMatrices(matrix){

    let result = true;
    for(let i = 0; i < matrix.length; i++){
        let lineSum = 0;
        let columnSum = 0;
        for(let el of matrix[i]){
            lineSum += el;
        }
        for(let j = 0; j < matrix.length; j++){
            columnSum += matrix[j][i];
        }
        if(lineSum != columnSum){
            result = false;
            break;
        }
    }
    console.log(result);

}
magicMatrices([[4, 5, 6],
                [6, 5, 4],
                [5, 5, 5]]
            );
magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );
magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   )