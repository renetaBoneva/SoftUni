const http = require('http');

const homePage = require('./views/homePage.js');
const addBreedPage = require('./views/addBreed.js');
const addCatPage = require('./views/addCat.js');
const deleteCatPage = require('./views/delete-shelterCat');
const editCat = require('./views/editCat.js');
const siteStyle = require('./styles/site.css');
const catData = require('./dataBase/data.json');

const editReggex = /\/cats\/\d+\/edit/gi;
const deleteReggex = /\/cats\/\d+\/delete/gi;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    if (req.url == '/styles/site.css' || req.url == '/cats/styles/site.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        });
        res.write(siteStyle);
        console.log('You just got the site\'s style :)');

    } else if (req.url == '/' || req.url == '/home') {
        res.write(homePage);
        console.log('Welcome to home page ;)');

    } else if (req.url == '/cats/add-breed') {
        res.write(addBreedPage);
        console.log('Now you can add breed ->');

    } else if (req.url == '/cats/add-cat') {
        res.write(addCatPage);
        console.log('Now you can add breed ->');

    } else if (editReggex.test(req.url)) {
        const catId = req.url.split('/')[2];
        const ourCatInfo = catData.find(c =>  c.id == catId);
        res.write(editCat(ourCatInfo));
        console.log('Now you can edit our cat.');

    } else if (deleteReggex.test(req.url)) {
        const catId = req.url.split('/')[2];
        const ourCatInfo = catData.find(c =>  c.id == catId);
        const output =  deleteCatPage(ourCatInfo);
        res.write(output);
        console.log('Now you can shelter the chosen cat |XX');

    } else {
        res.write('<h1>Error : Not found </h1>')
    }

    res.end();
});
server.listen(5050);

console.log("Server is running on port 5050...");


