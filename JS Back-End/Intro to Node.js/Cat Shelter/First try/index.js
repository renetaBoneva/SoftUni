const http = require('http');
const fs = require('fs/promises');
const fss = require('fs');

let homePage, editCat, deleteCatPage, siteStyle, addBreedPage, addCatPage;
const catData = require('./dataBase/data.json');

const editReggex = /\/cats\/\d+\/edit/gi;
const deleteReggex = /\/cats\/\d+\/delete/gi;

const server = http.createServer(async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    if (req.url == '/styles/site.css' || req.url == '/cats/styles/site.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        });
        siteStyle = await fs.readFile(__dirname +'/styles/site.css', {encoding: 'utf-8'});
        
        res.write(siteStyle);
        console.log('You just got the site\'s style :)');
        
    } else if (req.url == '/' || req.url == '/home') {
        homePage = await fs.readFile(__dirname + '/views/homePage.html', { encoding :'utf-8'});
        const catTemplateHtml = fss.readFileSync(__dirname + '/partials/catTemplate.html', { encoding :'utf-8'});
        
        let allCatsHtml = catData.map(cat => fillHtml(cat, catTemplateHtml)).join('');         
        homePage = homePage.replaceAll('{{cats}}', allCatsHtml);  

        res.write(homePage);
        console.log('Welcome to home page ;)');

    } else if (req.url == '/cats/add-breed') {
        addBreedPage = await fs.readFile(__dirname + '/views/addBreed.html', { encoding :'utf-8'})

        res.write(addBreedPage);
        console.log('Now you can add breed ->');

    } else if (req.url == '/cats/add-cat') {
        addCatPage = await fs.readFile(__dirname + '/views/addCat.html', { encoding :'utf-8'})

        res.write(addCatPage);
        console.log('Now you can add breed ->');

    } else if (editReggex.test(req.url)) {
        const catId = req.url.split('/')[2];
        const ourCatInfo = catData.find(c =>  c.id == catId);
        editCat = await fs.readFile(__dirname + '/views/editCat.html', { encoding :'utf-8'});
        let filledCatForm = await fs.readFile(__dirname + '/partials/editCatTempl.html', { encoding :'utf-8'});
        
        filledCatForm = fillHtml(ourCatInfo, filledCatForm);
        editCat = editCat.replace('{{catForm}}', filledCatForm);

        res.write(editCat);
        console.log('Now you can edit our cat.');

    } else if (deleteReggex.test(req.url)) {
        const catId = req.url.split('/')[2];
        const ourCatInfo = catData.find(c =>  c.id == catId);

        deleteCatPage = await fs.readFile(__dirname + '/views/delete-shelterCat.html', { encoding :'utf-8'});
        let deleteCatForm = await fs.readFile(__dirname + '/partials/delete-shelterCat-templ.html', { encoding :'utf-8'});
        
        deleteCatForm = fillHtml(ourCatInfo, deleteCatForm);
        deleteCatPage = deleteCatPage.replaceAll('{{catForm}}', deleteCatForm);

        res.write(deleteCatPage);
        console.log('Now you can shelter the chosen cat |XX');

    } else {
        res.write('<h1>Error : Not found </h1>')
    }

    res.end();
});
server.listen(5050);

console.log("Server is running on port 5050...");

function fillHtml(cat, html){
    return Object.keys(cat).reduce((result, key) => {
        return result.replaceAll(`{{${key}}}`, cat[key]);
     }, html);
}
