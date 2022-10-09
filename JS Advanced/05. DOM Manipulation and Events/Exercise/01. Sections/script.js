function create(words) {
   let container = document.getElementById('content');
   for (let phrase of words) {
      let p = document.createElement('p');
      p.textContent = phrase;
      p.style.display = 'none';
      let div = document.createElement('div');
      div.appendChild(p);
      div.addEventListener('click', function displatP() {
         p.style.display = 'block';
      })
      container.appendChild(div)
   }
}
