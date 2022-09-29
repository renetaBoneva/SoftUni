function messageTranslator(input){
    let data = input.slice();
    let n = Number(data.shift());
    for(let i = 0; i < n; i++){
        let line = data[i];
        let reggex = /!(?<command>[A-Z]{1}[a-z]{2,})!:\[(?<string>[A-Za-z]{8,})\]/gm
        let isValid = reggex.test(line);
        if(isValid){
            let validArr = [];
            let commmandRegexp = /!(?<command>[A-Z]{1}[a-z]{2,})!:/gm
            let stringRegexp = /\[(?<string>[A-Za-z]{8,})\]/gm
            let command = commmandRegexp.exec(line).groups['command'];
            let string = stringRegexp.exec(line).groups['string'];

            for(let letter of string){
                let code = letter.charCodeAt(0);
                validArr.push(code)
            }
            console.log(`${command}: ${validArr.join(' ')}`);

        } else{
            console.log("The message is invalid");
        }
    }
}
messageTranslator(['3',
    "!play!:[TheNewSong]",
    "!Ride!:[Bike]",
    "!Watch!:[LordofTheRings]"])
console.log('-----------------');
messageTranslator((["2",
"!Send!:[IvanisHere]",
"*Time@:[Itis5amAlready"])
)
console.log('-----------------');
messageTranslator((["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"])
)
