function loadingBar(n){

    let percentage = n / 10;
    let result = [];
    let dif = 10 - percentage;

    if(percentage == 10){
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else{
    for (let i = 0; i < percentage; i++) {       
        result.push('%') ;       
    }
    for (let j = 0; j < dif; j++) {
        result.push('.') ;
    }
    console.log(`${n}% [${result.join('')}]`);
    console.log(`Still loading...`);}
}
loadingBar(10)
console.log('-----------------------------------------');
loadingBar(0)
console.log('-----------------------------------------');
loadingBar(100)
console.log('-----------------------------------------');
loadingBar(50)