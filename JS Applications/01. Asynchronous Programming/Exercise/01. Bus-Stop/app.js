function getInfo() {
    let inputId = document.getElementById('stopId').value;
    let url = `http://localhost:3030/jsonstore/bus/businfo/${inputId}`

    let busList = document.getElementById('buses');
    busList.innerHTML = '';

    fetch(url)
        .then((response) => {
            if(response.ok == false){
                throw new Error();
            }
            return response.json()})
        .then(data => printUpcommingBusses(data))
        .catch(manageError)
}

let stopName = document.getElementById('stopName');
function printUpcommingBusses(data) {
    stopName.textContent = data.name;
    let bussesUL = document.getElementById('buses');
    let upcommingBusses = Array.from(Object.entries(data.buses));
    let listUpcommingBusses = upcommingBusses.map(([busID, time]) => {
        let li =document.createElement('li');
        li.textContent=`Bus ${busID} arrives in ${time} minutes`
        return li;
    })
    bussesUL.replaceChildren(...listUpcommingBusses)
}

function manageError() {
    stopName.textContent = 'Error';
}
