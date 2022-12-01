import {render,html} from "./node_modules/lit-html/lit-html.js"
import { repeat } from './node_modules/lit-html/directives/repeat.js';
import { classMap } from './node_modules/lit-html/directives/class-map.js';
import { towns } from "./towns.js"

const root = document.getElementById('towns')
const matchesRoot = document.getElementById('result');

let searchBtn = document.querySelector('button');
searchBtn.addEventListener('click', search)

function search(event) {
   event.preventDefault();
   let searchedTown = document.getElementById('searchText').value;
   displayTowns(towns, searchedTown)

   matchesRoot.textContent = `${countMatches()} matches found`
}

function displayTowns(towns, searchedTown){
   const ul = html`<ul>
      ${repeat(towns,
          (i)=> Math.random(100),
            (town)=> html`<li class=${town.includes(searchedTown)?"active":""}>${town}</li>`)}
   </ul>`
   render(ul, root)
}

function countMatches(){
   let activeElements = document.getElementsByClassName('active');
   return activeElements.length;
}

displayTowns(towns)
