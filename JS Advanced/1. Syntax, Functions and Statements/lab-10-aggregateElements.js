function aggregateElemenrts(input){
    function sum(data){
        let sum = 0;
        for(let el of data){
            sum += el;
        }
        console.log(sum);
    }

    function devidedNumsSum(data){
        let sum = 0;
        for(let el of data){
            sum += 1 / el;
        }
        console.log(sum);
    }

    function concat(data){
        let concat = '';
        for(let el of data){
            concat += el;
        }
        console.log(concat);
    }


    sum(input);
    devidedNumsSum(input);
    concat(input)

}
aggregateElemenrts([1, 2, 3]);
console.log('------------');
aggregateElemenrts([2, 4, 8, 16]);