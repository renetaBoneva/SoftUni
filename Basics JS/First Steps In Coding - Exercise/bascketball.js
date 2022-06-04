function bascketball(input){
    let taxPerYear = Number(input[0]);

    let sneckers = taxPerYear * 0.6;
    let clothing = sneckers * 0.8;
    let ball = clothing * 0.25;
    let accessories = ball * 0.2;
    let total = taxPerYear + sneckers + clothing + ball + accessories;

    console.log(total);
}
bascketball(['550'])