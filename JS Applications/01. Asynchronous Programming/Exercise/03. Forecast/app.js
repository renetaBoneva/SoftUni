function attachEvents() {
    let submitBtn = document.querySelector('#submit');

    submitBtn.addEventListener('click', getWeather)

}

function getWeather() {
    let submitBtn = document.querySelector('#submit');
    let urlLocation = 'http://localhost:3030/jsonstore/forecaster/locations';
    let location = document.querySelector('#location').value;
    let errorAlert = document.querySelector('body #current');
    let forecastDiv = document.getElementById('forecast');
    let degrees = '&#176';
    forecastDiv.style.display = 'block';
    
    fetch(urlLocation)
    .then((response) => {
        if (response.ok == false) {
                throw new Error()
            }
            return response.json();
        })
        .then(data => getWeather(data))
        .catch(handleError)
        
        
        function getWeather(data) {
            let code = getLocationCode(data);
            submitBtn.disabled = true;
            
            let urlCurrentConditions = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
            fetch(urlCurrentConditions)
            .then((response) => {
                if (response.ok == false) {
                    throw new Error()
                }
                return response.json();
            })
            .then(loadCurrenForecast)
            .catch(handleError)

        let url3DaysForecast = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
        fetch(url3DaysForecast)
            .then((response) => {
                if (response.ok == false) {
                    throw new Error()
                }
                return response.json();
            })
            .then(load3DaysForecast)
            .catch(handleError)

    }

    function handleError() {
        forecastDiv.style.display = 'nlock';
        document.querySelector('body #current .label').style.display = 'block';
        document.querySelector('body #upcoming').style.display = 'none';
        errorAlert.textContent = 'Error';
    }

    function getLocationCode(data) {
        let el = Array.from(data)
            .map(obj => Array.from(Object.values(obj)))
            .filter(([code, loc]) => {
                if (loc === location) {
                    return 1;
                }
                return 0;
            })
        let code = el[0][0];
        return code;
    }

    function loadCurrenForecast(data) {
        let currentDiv = document.getElementById('current')

        let div = document.createElement('div');
        div.classList.add('forecasts')

        let conditionSymbolSpan = document.createElement("SPAN");
        conditionSymbolSpan.innerHTML = getSymbol(data.forecast.condition);
        conditionSymbolSpan.setAttribute('class', 'symbol');
        div.appendChild(conditionSymbolSpan)

        let conditionSpan = document.createElement('SPAN')
        conditionSpan.classList.add('condition');

        let locationSpan = document.createElement('SPAN')
        locationSpan.classList.add('forecast-data');
        locationSpan.textContent = data.name;

        let temperatureSpan = document.createElement('SPAN')
        temperatureSpan.classList.add('forecast-data');
        temperatureSpan.innerHTML = `${data.forecast.low}${degrees}/${data.forecast.high}${degrees}`

        let conditionWordSpan = document.createElement('SPAN')
        conditionWordSpan.classList.add('forecast-data');
        conditionWordSpan.textContent = data.forecast.condition;

        conditionSpan.appendChild(locationSpan)
        conditionSpan.appendChild(temperatureSpan)
        conditionSpan.appendChild(conditionWordSpan)
        div.appendChild(conditionSpan)

        currentDiv.appendChild(div)
    }

    function getSymbol(condition) {
        let symbol = 0;
        switch (condition) {
            case 'Sunny':
                symbol = '&#x2600';
                break;
            case 'Partly sunny':
                symbol = '&#x26C5'
                break;
            case 'Overcast':
                symbol = '&#x2601'
                break;
            case 'Rain':
                symbol = '&#x2614'
                break;
            default:
                break;
        }
        return symbol;
    }

    function load3DaysForecast(data) {
        let forecast3daysArr = data.forecast;
        let upcommingDiv = document.getElementById('upcoming');

        let forecastInfoDiv = document.createElement('div');
        forecastInfoDiv.classList.add('forecast-info')

        forecast3daysArr.map(obj => {
            let spanUpcomming = document.createElement('span')
            spanUpcomming.classList.add('upcoming')

            let symbolSpan = document.createElement('span');
            symbolSpan.classList.add('symbol')
            symbolSpan.innerHTML = getSymbol(obj.condition)

            let forecastDegreesSpan = document.createElement('span');
            forecastDegreesSpan.classList.add('forecast-data')
            forecastDegreesSpan.innerHTML = `${obj.low}${degrees}/${obj.high}${degrees}`;


            let forecastConditionSpan = document.createElement('span');
            forecastConditionSpan.classList.add('forecast-data')
            forecastConditionSpan.innerHTML = obj.condition;

            spanUpcomming.appendChild(symbolSpan)
            spanUpcomming.appendChild(forecastDegreesSpan)
            spanUpcomming.appendChild(forecastConditionSpan)
            forecastInfoDiv.appendChild(spanUpcomming)
        });

        upcommingDiv.appendChild(forecastInfoDiv)
    }
}
attachEvents();
