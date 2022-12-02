import { logout } from './api/data.js'
import { render, html } from './lib.js'
import { page } from './lib.js'
import { showCreate } from './views/create.js'
import { showDashboardView } from './views/dashboard.js'
import { showDetails } from './views/details.js'
import { showEditView } from './views/edit.js'
import { showLoginView } from "./views/login.js"
import { showMyFurniture } from './views/myFurniture.js'
import { notFound } from './views/notFound.js'
import { showRegister } from './views/register.js'

const contairenDIV = document.querySelector('div.container')
const navRoot = document.querySelector('nav');

page(isCorrectNav)
page('/', showDashboardView)
page('/index.html', showDashboardView)
page('/dashboard', showDashboardView)
page('/dashboard/:id', showDetails)
page('/catalog', showDashboardView)
page('/catalog/:id', showDetails)
page('/login', showLoginView)
page('/logout', handleLogout)
page('/register', showRegister)
page('/create', showCreate)
page('/edit/:id', showEditView)
page('/myFurniture', showMyFurniture)
page('*', notFound)
page.start()


function isCorrectNav(ctx, next) {
    ctx.renderView = function (content) {
        render(content, contairenDIV)
    }

    const navContent = sessionStorage.getItem('userData')
        ? html`
            <a id="createLink" href="/create">Create Furniture</a>
            <a id="profileLink" href="/myFurniture" >My Publications</a>
            <a id="logoutBtn" href="/logout">Logout</a>`
        : html`        
            <a id="loginLink" href="/login">Login</a>
            <a id="registerLink" href="/register">Register</a>`
    render(navContent, navRoot)

    let anchers = document.querySelector('nav a');
    Array.from(anchers).forEach(a => {
        if(a.getAttribute('href') == ctx.page.path){
            a.setAttribute('class', 'active')
        } else{
            a.classList.removeItem('active');
        }
    })
    next()
}

async function handleLogout(){
    await logout()
    page.redirect('/')
}
