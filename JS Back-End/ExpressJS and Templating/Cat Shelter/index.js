const express = require('express');
const handlebars = require('express-handlebars');

let homePage, editCat, deleteCatPage, siteStyle, addBreedPage, addCatPage;
const catData = require('./dataBase/data.json');
const app = express();

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))


app.get('/', homePageRender);
app.get('/home', homePageRender);


app.get('/cats/add-breed', (req, res) => {
    res.render('addBreed');
});

app.get('/cats/add-cat', (req, res) => {
    res.render('addCat');
});

app.get('/cats/:catId/edit', (req, res)=>{
    const catId = req.params.catId;
    const ourCatData =  catData.find(cat => cat.id == catId);
    res.render('delete-shelterCat', ourCatData);
})

app.get('/cats/:catId/delete', (req, res)=>{
    const catId = req.params.catId;
    const ourCatData =  catData.find(cat => cat.id == catId);
    res.render('editCat', ourCatData);
})

app.get('/styles/site.css', (req, res)=>{
    res.send('You just got the site\'s style :)')
});

app.get('*', (req, res)=>{
    res.send('<h1>Error : Not found </h1>')
})
app.listen(5050, ()=> console.log("Server is running on port 5050..."));

function homePageRender(req, res) {
    console.log('Welcome to home page ;)');
    res.render('home', {catData})
}
