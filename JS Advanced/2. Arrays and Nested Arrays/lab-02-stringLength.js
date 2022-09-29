function stringLength(str1, str2, str3){

    let lengthSum = str1.length + str2.length + str3.length;
    let roundedAverageNum = Math.floor(lengthSum / 3);

    console.log(lengthSum);
    console.log(roundedAverageNum);
}
stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');