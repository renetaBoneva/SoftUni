function validate() {
    let textarea = document.getElementById('email');
    let reggex = /[a-z]+@[a-z]+.[a-z]+/gm;

    textarea.addEventListener('change', function isValid() {

        let input = textarea.value;
        let match = input.match(reggex);

        console.log(match);
        if (match === null) {
            textarea.setAttribute('class', 'error')
        } else {
            textarea.removeAttribute('class');
        }
    })
}
