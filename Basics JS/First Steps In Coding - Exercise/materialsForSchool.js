function materialsForSchool(input){
    let numBoxPencil = Number(input[0]);
    let numBoxMarkers = Number(input[1]);
    let litresCleaner = Number(input[2]);
    let percentDiscount = Number(input[3]);
    let priceBoxPencil = 5.80;
    let priceBoxMarkers = 7.20;    
    let priceCleanerPerLiter = 1.20;

    let totalPencil = numBoxPencil * priceBoxPencil;
    let totalMarkers = numBoxMarkers * priceBoxMarkers;
    let totalCleaner = litresCleaner * priceCleanerPerLiter;
    let sum = totalCleaner + totalMarkers + totalPencil;
    let discount = sum *percentDiscount / 100;
    let total = sum - discount;

    console.log(total);     
}
materialsForSchool(["4","2","5","13"])