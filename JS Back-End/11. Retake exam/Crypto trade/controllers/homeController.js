exports.getHomePage = (req, res) =>{
    res.render('home');
}

exports.getErrorPage = (req, res) =>{
    res.render('home/404');
}
