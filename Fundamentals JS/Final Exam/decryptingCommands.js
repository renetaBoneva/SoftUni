function decryptingCommands(input){

    let data = input.slice();
    let resultingMessage = data.shift();
    let i = 0;
    let line = data[i];

    while(line !== "Finish"){

        if(line.includes('Replace')){
            
            let [command, currentChar, newChar] = line.split(' ');
            let isOccurrence = resultingMessage.includes(currentChar);
            while (isOccurrence) {
                resultingMessage = resultingMessage.replace(currentChar, newChar);
                isOccurrence = resultingMessage.includes(currentChar);
            }      
            console.log(resultingMessage);
                        
        } else if(line.includes('Cut')){
            
            let [command, startIndex, endIndex] = line.split(' ');
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            let isValidIndex = resultingMessage.length - 1;
            if((isValidIndex - startIndex >=0) && (isValidIndex - endIndex >=0) 
                && ( startIndex >0 ) && (endIndex >0)){
                resultingMessage = resultingMessage.split('');
                let cuted = resultingMessage.splice(startIndex, endIndex - startIndex +1);
                resultingMessage = resultingMessage.join('');
                console.log(resultingMessage);
            } else{
                console.log("Invalid indices!");
            }           

        } else if(line.includes('Make')){

            let [command, action] = line.split(' ');
            if(action === 'Upper'){
                resultingMessage = resultingMessage.toUpperCase();
            } else if(action === 'Lower'){
                resultingMessage = resultingMessage.toLowerCase();
            }        
            console.log(resultingMessage);

        } else if(line.includes('Check')){
            
            let [command, string] = line.split(' ');
            if(resultingMessage.includes(string)){
                console.log(`Message contains ${string}`);
            } else{
                console.log(`Message doesn't contain ${string}`);
            }

        } else if(line.includes('Sum')){
            
            let [command, startIndex, endIndex] = line.split(' ');
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            let isValidIndex = resultingMessage.length - 1;
            let slice = resultingMessage.substring(startIndex, endIndex+1);
            let sum = 0;
            if( (isValidIndex - startIndex >=0) && (isValidIndex - endIndex >=0) 
                && ( startIndex >0 ) && (endIndex >0)){
                    for(let char of slice){
                        let charCode = char.charCodeAt(0);
                        sum+=charCode;
                    }
            
             console.log(sum);
            } else {
                console.log("Invalid indices!");
            }
            
        }
        i++
        line = data[i];
    }
}
decryptingCommands((["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut -1 10",
"Finish"])
)
console.log('-------------');
decryptingCommands((["HappyNameDay",
"Replace p r",
"Make Lower",
"Cut 2 23",
"Sum -2 2",
"Finish"])
)