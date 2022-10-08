function generateReport() {
    let checkbox = document.querySelectorAll('tr th input');
    let checkedIndexes =[];
    let result = [];

    for(let i= 0; i < checkbox.length; i++){
        let current = checkbox[i];
        if(current.checked === true){
            checkedIndexes.push(i);
        } 
    }

    let tbodyRows = document.querySelectorAll('tbody tr');

    for(let i = 0; i < tbodyRows.length; i++){
        let currentRowInfo = {};
        for(let j = 0; j < checkedIndexes.length; j++){
            let index = checkedIndexes[j];
            let name = checkbox[index].getAttribute('name');
            let info = tbodyRows[i].getElementsByTagName('td')[index].textContent;           
            currentRowInfo[name] = info;
        }
        result.push(currentRowInfo);
    }
    result = JSON.stringify(result);
    document.getElementById('output').textContent = result;
    
}
