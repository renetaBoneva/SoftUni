function dungeonestDark(firstArr) {

    let arr1 = firstArr.join('');
    let arr = arr1.split('|');
    arr1 = arr.join(' ');
    arr = arr1.split(' ');
    let arrL = arr.length;
    let health = 100;
    let coins = 0;

    for (let i = 0; i < arrL; i++) {
        if (i % 2 === 0) {
            let currentString = arr[i];
            let currentNum = Number(arr[i + 1]);
            if (currentString === 'potion') {
                if (health <= 100 && (currentNum + health) >= 100) {
                    let dif = 100 - health;
                    console.log(`You healed for ${dif} hp.`);
                    health = 100;
                } else if((health <= 100 && (currentNum + health) < 100)){
                    health += currentNum;
                    console.log(`You healed for ${currentNum} hp.`);
                } 
                else {
                    console.log(`You healed for 0 hp.`);
                }
                console.log(`Current health: ${health} hp.`);
            } else if (currentString === 'chest') {
                coins += currentNum;
                console.log(`You found ${currentNum} coins.`);
            } else {
                health -= currentNum;
                if (health > 0) {
                    console.log(`You slayed ${currentString}.`);
                } else {
                    let room = Math.ceil((i + 1) / 2);
                    console.log(`You died! Killed by ${currentString}.`);
                    console.log(`Best room: ${room}`);
                    break;
                }

            }
            if(i === arrL - 2){
                console.log("You've made it!");
                console.log(`Coins: ${coins}`);
                console.log(`Health: ${health}`);
            }
        }
    }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])
