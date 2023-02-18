const mongoose = require('mongoose');
const config = require('../config/index');

const uri = config.connectionString;

async function initDatabase(){
    mongoose.set('strictQuery', false);
    mongoose.connect(uri)
    console.log('Database Connected');
}

module.exports = initDatabase;