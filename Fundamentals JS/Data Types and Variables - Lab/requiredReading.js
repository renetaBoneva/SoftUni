function requiredReading(pagesNum, pagesPerHour, daysMustRead){
    totalTimeInHours = pagesNum / pagesPerHour;
    neededHouresPerDay = totalTimeInHours / daysMustRead;
    console.log(neededHouresPerDay);
}
requiredReading(212, 20, 2)