function addItem() {
    let input = document.getElementById('newItemText').value;
    let ul = document.getElementById('items');
    let li = document.createElement('li');
    li.textContent = input;
    ul.appendChild(li);
    if(input !== ''){
        document.getElementById('newItemText').value = '';
    }
}
