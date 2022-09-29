function dayOfWeek(n) {

    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (n >= 1 && n <= 7) {
        console.log(weekDays[n - 1]);
    } else {
        console.log('Invalid day!');
    }
}
dayOfWeek()