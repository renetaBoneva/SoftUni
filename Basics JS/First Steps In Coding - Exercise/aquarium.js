function aquarium(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let high = Number(input[2]);
    let percent = Number(input[3]);

    let volume = length * width * high;
    let volumeLitres = volume / 1000;
    let unavailableArea = percent / 100;
    let neededLitres = volumeLitres*(1-unavailableArea);

    console.log(neededLitres);
}
aquarium(["105","77","89","18.5"])