function solve() {

  let generateBtn = document.querySelector('button');
  document.querySelector('tbody tr td input').disabled = false;

  generateBtn.addEventListener('click', addFurniture);

  function addFurniture() {
    let newEls = document.querySelector('textarea').value;
    newEls = JSON.parse(newEls);
    for (let newEl of newEls) {
      let thead = Array.from(document.querySelectorAll('table thead tr th'));
      let table = document.querySelector('table tbody');
      let tr = document.createElement('tr');


      for (let i = 0; i < thead.length - 1; i++) {
        let colName = thead[i];
        colName = colName.textContent;
        let td = document.createElement('td');

        for (let info in newEl) {
          if (info === 'img' && colName === 'Image') {
            let img = document.createElement('img');
            img.setAttribute('src', newEl[info])
            td.appendChild(img);
            break;
          } else if ((info === 'name' && colName === 'Name') ||
            (info === 'price' && colName === 'Price') ||
            (info === 'decFactor' && colName === 'Decoration factor')) {
            let p = document.createElement('p');
            p.textContent = newEl[info];
            td.appendChild(p)
            break;
          }
        }

        tr.appendChild(td);
      }
      tr.innerHTML += `<td><input type="checkbox"/></td>`;
      table.appendChild(tr);
    }
  }

  let buyBtn = document.querySelectorAll('button')[1];
  buyBtn.addEventListener('click', shoppingCart)

  function shoppingCart() {
    let checkboxArr = Array.from(document.querySelectorAll('input[type=checkbox]'));
    let l = checkboxArr.length;
    let productNames = [];
    let totalPrice = 0;
    let avrgDecFactor = 0;
    let count = 0;

    if (l > 0) {
      for (let i = 0; i < l; i++) {
        if (checkboxArr[i].checked === true) {
          count++
          let tr = checkboxArr[i].parentNode.parentNode;
          let tdArr = tr.querySelectorAll('td p');
          productNames.push(tdArr[0].textContent);
          totalPrice += Number(tdArr[1].textContent);
          avrgDecFactor += Number(tdArr[2].textContent);
        }
      }
    }
    avrgDecFactor /= count;

    document.querySelectorAll('div textarea')[1].value = `Bought furniture: ${productNames.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avrgDecFactor}`

  }
}
