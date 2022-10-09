function deleteByEmail() {
    let input = document.getElementsByName("email")[0].value;
    let emailList = document.querySelectorAll('tbody tr td:nth-of-type(even)');
    let l = emailList.length;
    let result = document.getElementById('result');

    for(let i = 0 ; i < l; i++){
        let currentEmail = emailList[i].textContent;
        if(currentEmail === input){
            let row = emailList[i].parentNode;
            document.querySelector('tbody').removeChild(row);
            result.textContent = 'Deleted.'
            break;
        } else  if(emailList[i] == emailList[l-1]){
            result.textContent = 'Not found.';
        }
        debugger;
    }
}
