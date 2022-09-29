function toggle() {
    let button = document.getElementsByClassName('button')[0].innerText;
    let moreText = document.getElementById('extra');

    if(button.toUpperCase() === 'MORE'){
        moreText.style.display = 'block';
        document.getElementsByClassName('button')[0].innerText = 'Less';
    } else if(button.toUpperCase() === 'LESS'){
        moreText.style.display = 'none';
        document.getElementsByClassName('button')[0].innerText = 'More';

    }
}
