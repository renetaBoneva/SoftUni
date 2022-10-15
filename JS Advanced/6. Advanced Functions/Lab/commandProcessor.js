function solution/*commandProcessor*/(){
    let str =  ''
    return {
        append: (input) => {
            str += input;
            return str;
        },
        removeStart: (n) => {
            str = str.substring(n)
            return str;
        },
        removeEnd: (n) => {
            str = str.substring(0, str.length -n);
            return str;
        },
        print: () => {
            return console.log(str);
        }
    }

}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
