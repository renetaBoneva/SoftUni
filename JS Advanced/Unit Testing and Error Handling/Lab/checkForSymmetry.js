const { expect } = require('chai');
const { isSymmetric } = require('../checkForSymmetry.js');
// function isSymmetric(arr) {
//     if (!Array.isArray(arr)){
//         return false; // Non-arrays are non-symmetric
//     }
//     let reversed = arr.slice(0).reverse(); // Clone and reverse
//     let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
//     return equal;
// }


describe('Function which cheks if the array is symmetric', () => {
    it('should return false if its not an array', () => {
        //Arrange
        let invalidInput = { 'one': 1 }

        //Act
        let result = isSymmetric(invalidInput);

        //Assert
        expect(result).to.be.false;
    })

    it('should return false if its not an array', () => {
        //Arrange
        let invalidInput = 0;

        //Act
        let result = isSymmetric(invalidInput);

        //Assert
        expect(result).to.be.false;
    })

    it('should return false if its not an array', () => {
        //Arrange
        let invalidInput = false;

        //Act
        let result = isSymmetric(invalidInput);

        //Assert
        expect(result).to.be.false;
    })

    it('should return false if the array is not symetric', () => {
        //Arrange
        let input = [2, 3, 5, 6, 7];

        //Act
        let result = isSymmetric(input);

        //Assert
        expect(result).to.be.false;
    })

    it('should return true if the array is symetric', () => {
        //Arrange
        let input = [2, 3, 5, 3, 2];

        //Act
        let result = isSymmetric(input);

        //Assert
        expect(result).to.be.true;
    })

    it('should return true if the array is symetric', () => {
        //Arrange
        let input = [[2, 2, 3, 2], [3], [2, 2, 3, 2]];

        //Act
        let result = isSymmetric(input);

        //Assert
        expect(result).to.be.true;
    })
})

describe('Function with mixed data input', () => {
    it('should return true', () => {
        let input = [2, 'NaN', 2];
        let result = isSymmetric(input);
        expect(result).to.be.true;
    })
})
