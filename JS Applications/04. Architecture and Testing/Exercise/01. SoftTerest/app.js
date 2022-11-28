import { initialize } from "./api/router.js";
import { showCreate } from "./views/create.js";
import { showDashboard } from "./views/dashboard.js";
import { showDetails } from "./views/details.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";


let allSections = document.querySelector('#allSections');
allSections.remove()



let links = {
    '/home-view': showHome,
    '/create-view': showCreate,
    '/dashboard-holder': showDashboard,
    '/login-view': showLogin,
    '/register-view': showRegister,
    '/details-view': showDetails,
};

const router = initialize(links);

router.goTo('/home-view')