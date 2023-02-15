const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'You must enter name!']
    },
    age: {
        type: Number, 
        min: 0
    },
    breed: ['persian', 'Prekrasen', 'Angora', 'Domestic']
});
//Creating scheme method
catSchema.methods.printName = function () {
    return `Hello! My name is ${this.name}`;
};
//Creating virtual property
catSchema.virtual('info').get(function () {
    return `My breed is ${this.breed} and I'm ${this.age} years old!`
})
//Custom validaion methods
catSchema.path('name').validate(function(){
    return this.name.length > 2;
}, 'The name must contain more than 2 characters!')

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;