function movies(data) {

    let resultArr = [];
    for (let el of data) {
        let requestingArr = el.split(' ');


        if (requestingArr.includes('addMovie')) {
            requestingArr.shift();
            requestingArr = requestingArr.join(' ');
            resultArr.push({ 'name': requestingArr })
        }
        if (requestingArr.includes('directedBy')) {
            requestingArr = requestingArr.join(' ');
            let [name, director] = requestingArr.split(' directedBy ');
            for (let element of resultArr) {
                if (element['name'] === name) {
                    element['director'] = director;
                    break;
                }
            }
        }
        if (requestingArr.includes('onDate')) {
            requestingArr = requestingArr.join(' ');
            let [name, date] = requestingArr.split(' onDate ');
            for (let element of resultArr) {
                if (element['name'] === name) {
                    element['date'] = date;
                    break;
                }
            }
        }
    }

    for (let el of resultArr) {
        if (el.hasOwnProperty('name') && el.hasOwnProperty('date') && el.hasOwnProperty('director')) {
            console.log(JSON.stringify(el));
        }
    }

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)
console.log('======================================');
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    )