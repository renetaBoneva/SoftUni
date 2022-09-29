function smallestTwoNumbers(array) {
    let result = [];
    let length = array.length;
    if (length <= 2) {
        console.log(array.join(' '));
    } else {
        for (let i = 1; i <= 2; i++) {
            let smallest = 900719925124740998n;
            let index = undefined;
            for (let i = 1; i < length; i++) {
                let previous = array[i - 1];
                let current = array[i];
                if (current <= previous && current < smallest) {
                    smallest = current;
                    index = i;
                } else if (previous < current && previous < smallest) {
                    smallest = previous;
                    index = i - 1;
                }
            }
            result.push(smallest)
            array.splice(index, 1);
        }
        console.log(result.join(' '));
    }
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3])
console.log('--------');
smallestTwoNumbers([30, 15, 50, 5])
console.log('--------');
smallestTwoNumbers([-3, 15, -50, 5, 6, -100])
console.log('--------');
smallestTwoNumbers([0])