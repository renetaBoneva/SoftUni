const { expect } = require('chai');
const { rgbToHexColor } = require('../RGBtoHex.js');
// function rgbToHexColor(red, green, blue) {
//     if (!Number.isInteger(red) || (red < 0) || (red > 255)){
//         return undefined; // Red value is invalid
//     }
//     if (!Number.isInteger(green) || (green < 0) || (green > 255)){
//         return undefined; // Green value is invalid
//     }
//     if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)){
//         return undefined; // Blue value is invalid
//     }
//     return "#" +
//         ("0" + red.toString(16).toUpperCase()).slice(-2) +
//         ("0" + green.toString(16).toUpperCase()).slice(-2) +
//         ("0" + blue.toString(16).toUpperCase()).slice(-2);
// }
// console.log(rgbToHexColor(1))
// module.exports = {rgbToHexColor};

describe('Function gets only numbers', () => {
    it('wcich are negative and retunr undefined', () => {
        //Act and Arrange
        let result = rgbToHexColor(-10, 10, 3)
        //Assert
        expect(result).to.be.undefined
    })
    it('wcich are double and return undefined', () => {
        //Act and Arrange
        let result = rgbToHexColor(10.3, 10.4, 10/3)
        //Assert
        expect(result).to.be.undefined
    })
    it('wcich are double and return undefined', () => {
        //Act and Arrange
        let result = rgbToHexColor(Math.PI, 10.4, 10/3)
        //Assert
        expect(result).to.be.undefined
    })
    it('wcich are double and return undefined', () => {
        //Act and Arrange
        let result = rgbToHexColor(24.1 , 10.4, 10/3)
        //Assert
        expect(result).to.be.undefined
    })
    it('wcich are negative and retunr undefined', () => {
        //Act and Arrange
        let result = rgbToHexColor(-10, -10, -3)
        expect(result).to.be.undefined
    })
    it('wcich are out of range and retunr undefined', () => {
        //Act and Arrange
        let result = rgbToHexColor(1000, 10, 3)
        expect(result).to.be.undefined
    })
    it('wcich are out of range and retunr undefined', () => {
        //Act and Arrange
        let result = rgbToHexColor(1000, 257, 0)
        expect(result).to.be.undefined
    })
    it('wcich are valid and return the correct output', () => {
        //Act and Arrange
        let result = rgbToHexColor(33, 66, 99)
        expect(result).to.be.equal('#214263')
    })
    it('wcich are 0 and return #000000', () => {
        //Act and Arrange
        let result = rgbToHexColor(33, 66, 99)
        expect(result).to.be.equal('#214263')
    })
})

describe('function gets invalid data type input', () => {
    it('whitch is string', () => {
        let result = rgbToHexColor('1', '2', '3');
        expect(result).to.be.undefined;
    })
    it('whitch is string', () => {
        let result = rgbToHexColor(1, '2', '3');
        expect(result).to.be.undefined;
    })
    it('whitch is string', () => {
        let result = rgbToHexColor('one', '2', '3');
        expect(result).to.be.undefined;
    })
    it('which is array of numbers', () => {
        let result = rgbToHexColor([1, 2, 3]);
        expect(result).to.be.undefined;
    })
    it('whitch is array of string', () => {
        let result = rgbToHexColor([1], [2], [3]);
        expect(result).to.be.undefined;
    })
})

describe('Function gets partually input', () => {
    it('just first argument', () => {
        let result = rgbToHexColor(1);
        expect(result).to.be.undefined;
    })
    it('first and second argument', () => {
        let result = rgbToHexColor(2, 3);
        expect(result).to.be.undefined;
    })
})
