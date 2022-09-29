function colorize() {
    let rowsArr = document.querySelectorAll("table tr");
    for(let i = 1; i< rowsArr.length; i+= 2){
        rowsArr[i].style.background = 'teal';
    }
}