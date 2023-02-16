const express = require('express');

const config = require('./config');
const setupViewEngine = require('./config/viewEnginConfig');
const routes = require('./routes');
const initDatabase = require('./config/initDatabase')

const app = express();
setupViewEngine(app)

app.use(express.static('src/public'))
app.use(express.urlencoded({ extended: false }));
app.use(routes)

initDatabase()
    .then(() => app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`)))
    .catch((err) => console.error(err.message));
