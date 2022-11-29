import { handleLogout } from "../views/home.js";

export function initialize(links) {
    Array.from(document.querySelectorAll('a')).forEach(a => {
        if (a.textContent == 'Logout') {
            a.addEventListener('click', handleLogout)
        } else {
             a.addEventListener('click', onNav) }
    });
    let main = document.querySelector('main');


    let ctx = {
        showSection,
        goTo,
        onNav
    }
    return ctx;

    function showSection(section) {
        main.replaceChildren(section)
    }

    function onNav(event) {
        event.preventDefault()

        let target = event.target;
        if (target.tagName == 'IMG') {
            target = target.parentNode;
        } else if (target.tagName != 'A') {
            return;
        }
        let href = target.getAttribute('href');
        goTo(href)
    }

    function goTo(href) {
        let linkToGo = links[href];
        if (typeof linkToGo == 'function') {
            checkIsLoggedIn()
            linkToGo(ctx)
        }
    }

    function checkIsLoggedIn() {
        if (localStorage.user) {

            Array.from(document.querySelectorAll('nav a')).forEach(a => {
                if (a.textContent == "Create" || a.textContent == "Logout") {
                    a.style.display = 'inline-block'
                } else if (a.textContent == "Register" || a.textContent == "Login") {
                    a.style.display = 'none'
                }
            })
        } else {

            Array.from(document.querySelectorAll('nav a')).forEach(a => {
                if (a.textContent == "Create" || a.textContent == "Logout") {
                    a.style.display = 'none'
                } else if (a.textContent == "Register" || a.textContent == "Login") {
                    a.style.display = 'inline-block'
                }
            })
        }
    }
}
