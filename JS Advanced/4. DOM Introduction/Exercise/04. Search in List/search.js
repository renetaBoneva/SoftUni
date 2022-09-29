function search() {
   let townsCollection = document.querySelectorAll('#towns li');
   let searchText = document.getElementById('searchText').value;
   let count = 0;
   for(let town of townsCollection){
      let name = town.innerText;
      if(name.includes(searchText)){
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         count++
      } else{
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   document.getElementById('result').innerText = `${count} matches found`;
}
