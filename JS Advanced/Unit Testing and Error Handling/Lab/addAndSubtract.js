const {expect} = require('chai');
const {createCalculator} = require('../addSubtract.js');
// function createCalculator() {
//     let value = 0;
//     return {
//         add: function(num) { value += Number(num); },
//         subtract: function(num) { value -= Number(num); },
//         get: function() { return value; }
//     }
// }
// module.exports = {createCalculator};

describe('Trying add property of the returned object with', () => {
    it('whole number input', () => {
        //Arrange and Act
        let num = createCalculator()
        num.add(1);
        num.add(5);
        num.add(4);
        
        //Assert
        expect(num.get()).to.be.equal(10)
    })
    it('whole string number input', () => {
        //Arrange and Act
        let num = createCalculator()
        num.add('1');
        num.add('5');
        num.add("4");
        
        //Assert
        expect(num.get()).to.be.equal(10)
    })
    it('decimal number input', () => {
        //Arrange and Act
        let num = createCalculator()
        num.add(1.5);
        num.add(5.3);
        num.add(4.7);
        
        //Assert
        expect(num.get()).to.be.equal(11.5)
    })
    it('decimal string number input', () => {
        //Arrange and Act
        let num = createCalculator()
        num.add('1.5');
        num.add('5.3');
        num.add('4.7');
        
        //Assert
        expect(num.get()).to.be.equal(11.5)
    })    
    it('string input', () => {
        //Arrange and Act
        let num = createCalculator()
        num.add('edno');
        
        //Assert
        expect(num.get()).to.be.NaN
    })
    it('object input', () => {
        //Arrange and Act
        let num = createCalculator()
        num.add({1:1});
        
        //Assert
        expect(num.get()).to.be.NaN
    })
    it('array input', () => {
        //Arrange and Act
        let num = createCalculator()
        num.add([2,3,4]);
        
        //Assert
        expect(num.get()).to.be.NaN
    })
})

describe('Trying subtract property of the returned object with', () => {
    it('whole number input', () => {
        //Arrange and Act
        let num = createCalculator()
        num.subtract(1);
        num.subtract(5);
        num.subtract(4);
        
        //Assert
        expect(num.get()).to.be.equal(-10)
    })
    it('whole string number input', () => {
        //Arrange and Act
        let num = createCalculator()
        num.subtract('1');
        num.subtract('5');
        num.subtract("4");
        
        //Assert
        expect(num.get()).to.be.equal(-10)
    })
    it('decimal number input', () => {
        //Arrange and Act
        let num = createCalculator()
        num.subtract(1.0);
        num.subtract(1.5);
        num.subtract(4.5);
        
        //Assert
        expect(num.get()).to.be.equal(-7.0)
    })
    it('decimal string number input', () => {
        //Arrange and Act
        let num = createCalculator()
        num.subtract('1.5');
        num.subtract('5.3');
        num.subtract('4.7');
        
        //Assert
        expect(num.get()).to.be.equal(-11.5)
    })    
    it('string input', () => {
        //Arrange and Act
        let num = createCalculator()
        num.subtract('edno');
        
        //Assert
        expect(num.get()).to.be.NaN
    })
    it('object input', () => {
        //Arrange and Act
        let num = createCalculator()
        num.subtract({1:1});
        
        //Assert
        expect(num.get()).to.be.NaN
    })
    it('array input', () => {
        //Arrange and Act
        let num = createCalculator()
        num.subtract([2,3,4]);
        
        //Assert
        expect(num.get()).to.be.NaN
    })
})

describe('Mixed actions - add and subtract', () => {
    it('add and then subtract whole numbers', () => {
        //Arrange and Act
        let num = createCalculator()
        num.add(1);
        num.subtract(5);
        
        //Assert
        expect(num.get()).to.be.equal(-4)
    })
    it('add and then subtract decimal numbers', () => {
        //Arrange and Act
        let num = createCalculator()
        num.add(1.5);
        num.subtract(5.5);
        
        //Assert
        expect(num.get()).to.be.equal(-4)
    })
    it('add and then subtract whole string numbers', () => {
        //Arrange and Act
        let num = createCalculator()
        num.add('1');
        num.subtract('5');
        
        //Assert
        expect(num.get()).to.be.equal(-4)
    })    
    it('add and then subtract decimal string numbers', () => {
        //Arrange and Act
        let num = createCalculator()
        num.add('1.5');
        num.subtract('5.5');
        
        //Assert
        expect(num.get()).to.be.equal(-4)
    })
    
    it('subtract and then add whole string numbers', () => {
        //Arrange and Act
        let num = createCalculator()
        num.subtract('5');
        num.add('1');
        
        //Assert
        expect(num.get()).to.be.equal(-4)
    })
})
