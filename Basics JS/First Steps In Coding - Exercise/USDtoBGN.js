function usdToBGN(input){
    let usd = Number(input[0]);
    let course = 1.79549 ;

    let bgn = usd * course;

    console.log(bgn); 
}
usdToBGN(['22'])