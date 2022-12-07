
let { motorcycleRider } = require('../motorcycleRider');

let { assert } = require('chai');

describe('Test motorcycleRider', () => {

    describe('Test licenseRestriction', () => {
        it('AM category', () => {
            assert.equal(motorcycleRider.licenseRestriction('AM'), "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.")
        })
        it('A1 category', () => {
            assert.equal(motorcycleRider.licenseRestriction('A1'), "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.")
        })
        it('A2 category', () => {
            assert.equal(motorcycleRider.licenseRestriction('A2'),
                "Motorcycles with maximum power of 35KW. and the minimum age is 18."
            )
        })
        it('A category', () => {
            assert.equal(motorcycleRider.licenseRestriction('A'),
                "No motorcycle restrictions, and the minimum age is 24."
            )
        })
        it('Invalid category with string', () => {
            assert.throw(() => motorcycleRider.licenseRestriction('Renka'),
                "Invalid Information!"
            )
        })
        it('Invalid category with array', () => {
            assert.throw(() => motorcycleRider.licenseRestriction([]),
                "Invalid Information!"
            )
        })
        it('Invalid category wih number input', () => {
            assert.throw(() => motorcycleRider.licenseRestriction(33),
                "Invalid Information!"
            )
        })
    })
    describe('Test motorcycleShowroom', () => {
        it('Invalid input string', () => {
            assert.throw(() => motorcycleRider.motorcycleShowroom('300', 400), "Invalid Information!")
        })
        it('Invalid input too low maxEngine', () => {
            assert.throw(() => motorcycleRider.motorcycleShowroom([250, 200, 100], 30), "Invalid Information!")
        })
        it('Invalid input array', () => {
            assert.throw(() => motorcycleRider.motorcycleShowroom([250, 200, 100], [400]), "Invalid Information!")
        })

        it('Invalid input too low maxEngine', () => {
            assert.throw(() => motorcycleRider.motorcycleShowroom([250, 200, 100], 30), "Invalid Information!")
        })
        it('Bigger cathegory test', () => {
            assert.equal(motorcycleRider.motorcycleShowroom([300, 280, 400], 250), "There are 0 available motorcycles matching your criteria!")
        })
        it('Lower cathegory test', () => {
            assert.equal(motorcycleRider.motorcycleShowroom([250, 200, 100], 250), "There are 3 available motorcycles matching your criteria!")
        })
        it('Combine cathegory test', () => {
            assert.equal(motorcycleRider.motorcycleShowroom([250, 300, 100], 250), "There are 2 available motorcycles matching your criteria!")
        })
    })
    describe('Test otherSpendings', () => {
        it('Invalid equipment type', () => {
            assert.throw(() => motorcycleRider.otherSpendings('AM', ["engine oil", "engine oil", "engine oil"], true), "Invalid Information!")
        })
        it('Invalid consumables type', () => {
            assert.throw(() => motorcycleRider.otherSpendings(['helmet', 'jacket'], "engine oil", true), "Invalid Information!")
        })
        it('Invalid discount type', () => {
            assert.throw(() => motorcycleRider.otherSpendings(['helmet', 'jacket'], ["engine oil", "engine oil", "engine oil"], [true]), "Invalid Information!")
        })
        it('Total without anything bought with discount', () => {
            assert.equal(motorcycleRider.otherSpendings([], [], true), `You spend $0.00 for equipment and consumables with 10% discount!`)
        })
        it('Total without anything bought without', () => {
            assert.equal(motorcycleRider.otherSpendings([], [], false), `You spend $0.00 for equipment and consumables!`)
        })
        it('Total without discount', () => {
            assert.equal(motorcycleRider.otherSpendings(['helmet', 'jacket'], ["engine oil", "engine oil", "engine oil"], false), `You spend $410.00 for equipment and consumables!`)
        })
        it('Total without discount', () => {
            assert.equal(motorcycleRider.otherSpendings(['helmet', 'jacket'], ["engine oil", "oil filter", 'Renka', 'tramvay', "engine oil", "engine oil"], false), `You spend $440.00 for equipment and consumables!`)
        })
        it('Total with discount', () => {
            assert.equal(motorcycleRider.otherSpendings(['helmet', 'jacket'], ["engine oil", "engine oil", "engine oil"], true), `You spend $369.00 for equipment and consumables with 10% discount!`)
        })
        it('Total with discount', () => {
            assert.equal(motorcycleRider.otherSpendings(['gosho', 'helmet', 'jacket', 'pesho'], ["engine oil", "engine oil", "engine oil"], true), `You spend $369.00 for equipment and consumables with 10% discount!`)
        })
    })
})
