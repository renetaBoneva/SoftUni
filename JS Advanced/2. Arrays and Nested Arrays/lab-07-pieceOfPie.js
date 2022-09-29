function pieceOfPie(array, start, end){

    let startIndex;
    let endIndex;

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if(current === start){
            startIndex = i;
        } else if(current === end){
            endIndex = i;
        }        
    }

    let result = array.slice(startIndex, endIndex+1);
    return result;

}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)
pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)