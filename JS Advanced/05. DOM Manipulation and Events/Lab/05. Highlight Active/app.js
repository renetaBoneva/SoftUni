function focused() {
   let inputArr = document.querySelectorAll('input');
   for(let input of inputArr){
    input.addEventListener('focus', function setNewClass(){
    input.parentNode.setAttribute('class', 'focused');
    })

    input.addEventListener('blur', function clearOldClass(){
    input.parentNode.removeAttribute('class'); 
    })
   }
}
