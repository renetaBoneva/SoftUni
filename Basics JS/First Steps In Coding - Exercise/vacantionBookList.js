function vacantionBookList(input){
    let numberPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let numberDays = Number(input[2]);

    let neededTimeForOneBook = numberPages / pagesPerHour;
    let neededHoursPerDay = neededTimeForOneBook / numberDays;

    console.log(neededHoursPerDay);
}
vacantionBookList(["212","20","2"])