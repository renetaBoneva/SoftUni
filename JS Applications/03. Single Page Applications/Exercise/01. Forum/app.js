import { showHome } from "./home.js"

let homeAnchor = document.querySelector('nav a');
homeAnchor.addEventListener('click', showHome)

showHome()
