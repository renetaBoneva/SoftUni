//NE E VQRNA

function nextDay(year, month, day){
    let newYear = year;
    let newMonth= month;
    let newDay = day;
    
    if((day < 28 && month == 2) || 
            (day < 30 && (month == 4 || month == 6 || month== 9 || month==11)) ||
                (day < 31 && (month == 1 || month == 3 || month == 5 || month== 7 || month==8 || month== 10 || month==12))) {
                    newDay ++;
    } else if(day == 30){
        switch(month){
            case 4:
            case 6:
            case 9:
            case 11:  
            newDay = 1;
            newMonth ++;
            break;
        }
    } else if(day == 31){
        switch(month){
            case 1:
            case 3:
            case 5:
            case 7:  
            case 10:  
            case 8:  
            newDay = 1;
            newMonth ++;
            break;
            case 12:
            newDay = 1;
            newMonth = 1;
            newYear ++;
        }
    } else if(day = 28 && year % 4 != 0 && month == 2){
        newDay = 1;
        newMonth ++;
    } else if(day = 28 && year % 4 == 0 && month == 2){
        newMonth ++;
        newDay ++;
    } else if(day = 29 && year % 4 == 0 && month == 2){
        newDay = 1;
        month ++;
    }

    console.log(`${newYear}-${newMonth}-${newDay}`);
}
nextDay