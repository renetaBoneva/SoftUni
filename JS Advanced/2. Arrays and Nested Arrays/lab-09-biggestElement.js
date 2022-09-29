function biggerstEement(matrix) {

    let biggest = -900000000000000000n;

    for (let array of matrix) {
        let currentBiggest = Math.max(...array);
        if (currentBiggest > biggest) {
            biggest = currentBiggest;
        }
    }
    console.log(biggest);
}
biggerstEement([[20, 50, 10],
[8, 33, 145]]
);
biggerstEement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
);