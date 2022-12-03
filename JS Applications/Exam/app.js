import { logout } from "./api/data.js"
import { page, render } from "./lib.js"
import { showAddAlbum } from "./views/addAlbum.js"
import { showDashboard } from "./views/dashboard.js"
import { showDetailsView } from "./views/details.js"
import { showEdit } from "./views/edit.js"
import { showHome } from "./views/home.js"
import { showLogin } from "./views/login.js"
import { notFound } from "./views/notFound.js"
import { showRegister } from "./views/register.js"

const main = document.querySelector('main')
const userNav = document.querySelector('nav .user')
const guestNav = document.querySelector('nav .guest')

page(isCorrectNav)
page('/', showHome)
page('/dashboard', showDashboard)
page('/addAlbum', showAddAlbum)
page('/logout', handleLogout)
page('/login', showLogin)
page('/register', showRegister)
page('/details/:id', showDetailsView)
page('/edit/:id', showEdit)
page('*', notFound)
page.start()


function isCorrectNav(ctx, next) {
    ctx.renderView = function (content) {
        render(content, main)
    }

    if (sessionStorage.getItem('userData')){
        userNav.style.display = 'inline-block'
        guestNav.style.display = 'none'
    } else{
        userNav.style.display = 'none'
        guestNav.style.display = 'inline-block'
    }

    next()
}
async function handleLogout(){
    try{
        await logout()
        page.redirect('/dashboard')
    } catch(error){
        alert(error.message)
    }
}