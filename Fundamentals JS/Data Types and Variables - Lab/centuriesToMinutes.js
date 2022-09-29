function centuriesToMinutes(centuires) {
    let years = centuires * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${centuires} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
//1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes
//5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes
centuriesToMinutes()