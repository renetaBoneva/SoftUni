function solve() {
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let info = document.getElementById('info');
    let id = 'depot';
    let currentStopName;

    function depart() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${id}`
        fetch(url)
            .then((response) => {
                if (response.ok == false) {
                    throw new Error()
                }
                return response.json()
            })
            .then(data => displayNextStop(data))
            .catch(handleError)
        function displayNextStop(data) {
            currentStopName = data.name;
            info.textContent = `Next stop ${currentStopName}`
            id = data.next;
            arriveBtn.disabled = false
            departBtn.disabled = true
        }
    }

    function arrive() {
        info.textContent = `Arriving at ${currentStopName}`
        arriveBtn.disabled = true
        departBtn.disabled = false
    }

    function handleError() {        
        info.textContent = `Error`
        arriveBtn.disabled = true
        departBtn.disabled = true
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
