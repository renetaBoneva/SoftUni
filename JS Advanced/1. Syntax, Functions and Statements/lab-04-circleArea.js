function circleArea(data){

    let dataType = typeof(data);
    if(dataType === 'number'){
        let circleArea = (data ** 2) * Math.PI;
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${dataType}.`);
    }
}
circleArea(5)
circleArea('name')