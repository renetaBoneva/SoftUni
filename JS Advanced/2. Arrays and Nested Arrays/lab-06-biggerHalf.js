function biggerHalf(data){

    let sortedArr = data.sort((a,b) => a -b);
    let count = Math.ceil(sortedArr.length /2);
    let result = sortedArr.slice(-count);
    console.log(result);
}
biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])