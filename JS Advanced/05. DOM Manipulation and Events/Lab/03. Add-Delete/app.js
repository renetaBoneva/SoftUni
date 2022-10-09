function addItem() {
    let input = document.getElementById('newItemText').value;
    let list = document.getElementById('items');

    let li = document.createElement('li');
    li.textContent = input;

    let a = document.createElement('a');
    a.href = '#';
    a.textContent = '[Delete]';
    a.addEventListener('click', deleteItem)

    function deleteItem(){
        list.removeChild(a.parentNode);
    }

    li.appendChild(a);
    list.appendChild(li);

    document.getElementById('newItemText').value = '';
}
