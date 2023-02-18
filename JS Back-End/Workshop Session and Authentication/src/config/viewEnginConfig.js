const handelbars = require('express-handlebars');

function setupViewEngine(app) {
    app.engine('hbs', handelbars.engine({
        extname: 'hbs',
        defaultLayout: 'index'
    }));
    app.set('view engine', 'hbs');
    app.set('views', './src/views')
}

module.exports = setupViewEngine;