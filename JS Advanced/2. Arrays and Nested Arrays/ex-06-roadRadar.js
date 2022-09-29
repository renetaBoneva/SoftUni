function roadRadar(speed, area) {

    let limit = 0;

    switch (area) {
        case 'city':
            limit = 50;

            break;
        case 'residential':
            limit = 20;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'motorway':
            limit = 130;
            break;
    }
    let diff = speed - limit;
    let status;
    if (diff <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        if (diff <= 20) {
            status = 'speeding';
        } else if (diff <= 40) {
            status = 'excessive speeding';

        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}
roadRadar(40, 'city')
console.log('------------');
roadRadar(21, 'residential')
console.log('------------');
roadRadar(120, 'interstate')
console.log('------------');
roadRadar(200, 'motorway')