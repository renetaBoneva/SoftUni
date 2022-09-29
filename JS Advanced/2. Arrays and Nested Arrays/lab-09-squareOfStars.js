function squareOfStars(size){

    if(typeof(size) === 'undefined'){
        size = 5;
    }

    let toRepeat = '* '
    for(let i = 1; i <= size; i++){
        console.log(toRepeat.repeat(size));
    }

}
squareOfStars()