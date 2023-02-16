const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {        
        type: String,
        required: true,
        maxLength: 500,
    },
    imageUrl:{        
        type: String,
        required: true,
        match: [/^https?/, 'Invalid URL!']
    },
    cubes: {

    }
})

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;

