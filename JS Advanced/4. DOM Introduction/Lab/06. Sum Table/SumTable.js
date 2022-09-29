function sumTable() {
    let tableRows = document.querySelectorAll('table tr')
    let sum = 0;
    for (let i = 1; i < tableRows.length; i++) {
        let cols = tableRows[i].children; 
        let num = Number(cols[1].textContent); 
        sum += num; 
    }
    document.getElementById('sum').innerText = sum;
}