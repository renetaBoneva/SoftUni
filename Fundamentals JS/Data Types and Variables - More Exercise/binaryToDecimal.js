function binaryToDecimal(num) {

    num = num.toString();
    let reversed = "";
    let decimal = 0;

    for(let j = 7; j >=0; j--){
        reversed += num[j];
    }

    for(let i = 0; i <= 7; i++) {
        let digit = Number(reversed[i]);
        decimal += digit * Math.pow(2, i);
    }

    console.log(decimal);
}
binaryToDecimal('11101111')