function solve(inputN) {
    let obj1 = { num: inputN, solution };
    function solution(n) {
        let sum = this.num + Number(n);
        return sum;
    }
    let addNum = obj1.solution;
    let add = addNum.bind(obj1);
    return add;
}

let add5 = solve(5);
console.log(add5(2));
console.log(add5(3));

