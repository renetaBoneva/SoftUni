function makeADictonary(data) {
    let result = {};
    let sortArr = [];
    for (let line of data) {
        result[Object.keys(JSON.parse(line)).join()] = Object.values(JSON.parse(line)).join();
    }

    for (let key in result) {
        sortArr.push(key);
    }

    sortArr.sort((a, b) => { return a.localeCompare(b); })
    for (let currenTerm of sortArr) {
        let definition = result[currenTerm];
        console.log(`Term: ${currenTerm} => Definition: ${definition}`);
    }
}
makeADictonary(
    [
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Coffee":"MY DEFINITION"}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
)