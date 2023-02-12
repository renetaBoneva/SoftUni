const express = require('express');

const config = require('./config/portConfig');
const setupViewEngine = require('./config/viewEnginConfig');
const routes = require('./routes');

const app = express();
setupViewEngine(app)

app.use(express.static('src/public'))
app.use(routes)

app.listen(config.PORT, ()=> console.log(`Server is running on port ${config.PORT}...`));