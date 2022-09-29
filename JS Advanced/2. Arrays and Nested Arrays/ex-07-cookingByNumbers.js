function cookingByNumbers(num, command1, command2, command3, command4, command5){

    num = Number(num);
    let operations = [command1, command2, command3, command4, command5]
    for (let i = 0; i < operations.length; i++) {
        
        switch (operations[i]) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num ++;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num = num * 0.8;
                break;
        }
        if(num % 1 > 0){
            console.log(num.toFixed(1));
        }else{
            console.log(num);
        }
        
    }

}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
console.log('-----------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')