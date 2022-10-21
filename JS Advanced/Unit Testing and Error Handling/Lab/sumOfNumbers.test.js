const {expect} = require('chai');
const {sum} = require('./sumOfNumbers');

// function sum(arr) {
//     let sum = 0;
//     for (let num of arr){
//         sum += Number(num);
//     }
//     return sum;
// }
// module.exports = {sum};

describe('Function sum ', () => {

    it('should return the sum of numbers in array', () => {
        //Arrange
        let array = [1,2,3,4,5];
        //Act 
        let result = sum(array);
        //Assert
        expect(result).to.be.equal(15);
    })

})
