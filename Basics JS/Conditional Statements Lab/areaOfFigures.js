function areaOfFigures (input){
    let figure = input[0];
    let s = 0;
    if(figure == 'square'){        
        let lengthSide = Number(input[1]);
        s = lengthSide * lengthSide;
        console.log(s.toFixed(3));
    } else if(figure == 'rectangle'){
        let lengthSide1 = Number(input[1]);
        let lengthSide2 = Number(input[2]);
        s = lengthSide1 * lengthSide2;
        console.log(s.toFixed(3));
    } else if(figure == 'circle'){
        let radius = Number(input[1]);
        s = radius * radius * Math.PI;
        console.log(s.toFixed(3));        
    } else if(figure == 'triangle'){
        let lengthSide = Number(input[1]);
        let lengthHigh = Number(input[2]);
        s = (lengthHigh*lengthSide)/2;
        console.log(s.toFixed(3)); 
    }

}
areaOfFigures(["rectangle", "7"])