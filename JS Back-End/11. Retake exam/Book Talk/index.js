const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const router = require('./routes')
const { authentication } = require('./middlewares/authMiddleware')
const { port } = require('./constants')

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(authentication)
app.use(router);

mongoose.set('strictQuery', false)
mongoose.connect(`mongodb://127.0.0.1/bookTalks`)
    .then(() => {
        console.log('Database connected!')
        app.listen(port, () => console.log(`Server is listening on port ${port}...`));
    })
    .catch((err) => {
        console.log(err.message);
    });



