function attachGradientEvents() {
    let div = document.getElementById('gradient');
    let result = document.getElementById('result');

    div.addEventListener('mousemove', getPercentage)
    div.addEventListener('mouseout', clearPercentage)

    function getPercentage(event){
    let another = event.target.clientWidth - 1;
    let width = event.offsetX;
    let percentage = Math.trunc((width / another)*100);
    result.textContent = percentage + '%';
    }

    function clearPercentage(){
    result.textContent = '';
    }
}
