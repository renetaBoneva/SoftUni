function burgerBus(array){

    let arr = array.slice();
    let numberOfCities = Number(arr.shift());
    let profit = 0;
    let cityCount = 1;

    for (let i = 0; i < numberOfCities*3; i+=3) {
        let currentCity = arr[i];
        let earnedMonet = Number(arr[i + 1]);
        let expenses = Number(arr[i +2]);
        if((cityCount % 3 === 0 && cityCount % 5 === 0) || cityCount % 5 === 0){
            earnedMonet -= earnedMonet * 0.1;
        }
        else if(cityCount % 3 === 0) {
            expenses += expenses * 0.5;
        } 

        
        let currentProfit = earnedMonet - expenses; 
        profit += currentProfit;
        cityCount++; 

        console.log(`In ${currentCity} Burger Bus earned ${currentProfit.toFixed(2)} leva.`);
    }
    console.log(`Burger Bus total profit: ${profit.toFixed(2)} leva.`);

}

burgerBus(["3",
"Sofia",
"895.67",
"213.50",
"Plovdiv",
"2563.20",
"890.26",
"Burgas",
"2360.55",
"600.00"]);
