function solve() {
   let dataTr = Array.from(document.querySelectorAll('tbody > tr'));
   let searchBtn = document.querySelector("#searchBtn");
   let searchField = document.querySelector("#searchField");
   searchBtn.addEventListener('click', function () {
       let regex = new RegExp(searchField.value, 'gim');
       dataTr.map(e => {
           e.classList.remove('select');
           if (e.innerHTML.match(regex) !== null) {
               e.className = 'select';
           }
       });
       searchField.value = '';
   });

   //Solution without addind a new class 'select'
   // function onClick() {
   //    let info = document.querySelectorAll('tbody tr td');
   //    let searchedText = document.getElementById('searchField').value;
   //    let rowsCount = 0;
   //    for (let i = 0; i < info.length; i += 3) {
   //       let currentInfo = info[i].innerText;
   //       let nextInfo = info[i + 1].innerText;
   //       let afterNextInfo = info[i + 2].innerText;
   //       rowsCount++

   //       if (currentInfo.includes(searchedText) || nextInfo.includes(searchedText)
   //          || afterNextInfo.includes(searchedText)) {
   //          info[i].style.backgroundColor = '#FFF842';
   //          info[i + 1].style.backgroundColor = '#FFF842';
   //          info[i + 2].style.backgroundColor = '#FFF842';
   //       } else {
   //          if (rowsCount % 2 === 0) {
   //             info[i].style.backgroundColor = '#2C3446';
   //             info[i + 1].style.backgroundColor = '#2C3446';
   //             info[i + 2].style.backgroundColor = '#2C3446';
   //          } else if (rowsCount % 2 !== 0) {
   //             info[i].style.backgroundColor = '#323C50';
   //             info[i + 1].style.backgroundColor = '#323C50';
   //             info[i + 2].style.backgroundColor = '#323C50';
   //          }

   //       }
   //    }
   // }
}
