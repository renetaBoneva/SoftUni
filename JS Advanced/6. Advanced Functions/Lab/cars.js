function cars(inputArr) {
    function doTheInstructions() {
        let result = {}
        return {
            create: (name) => {
                result[name] = {
                    'inherit': []
                };

            },
            inherit: (name, parentName) => {
                if (result[name]) {
                } else {
                    result[name] = {
                        'inherit': []
                    };
                }
                let current = result[name];
                current.inherit.push(parentName);
                if (result[parentName]['inherit'].length > 0) {
                    //getParents(name, parentName);
                    for (let parentC of result[parentName]['inherit']) {
                        if (!result[name]['inherit'].includes(parentC)) {
                            current.inherit.push(parentC);
                        }
                    }
                }
                // function getParents(name, parentName) {                
                // }
            },
            set: (name, key, value) => {
                let current = result[name];
                current[key] = value;
            },
            print: (name) => {
                let current = result[name];
                let parents = current.inherit;
                if (parents.length > 0) {
                    for (let parent of parents) {
                        let parentObj = result[parent];
                        for (let key in parentObj) {
                            let value = parentObj[key];
                            if (key !== 'inherit') {
                                current[key] = value;
                            }
                        }
                    }
                }
                delete current['inherit']
                let r = [];
                for (let [key, value] of Object.entries(current)) {
                    r.push(`${key}:${value}`);
                }
                console.log(r.join(','));
            }
        }
    }
    let functions = doTheInstructions();
    for (let line of inputArr) {
        let [command, nameObj, key, value] = line.split(' ');
        switch (command) {
            case 'create':
                if (key === undefined) {
                    functions.create(nameObj);
                } else if (key === 'inherit') {
                    functions.inherit(nameObj, value);
                }
                break;
            case 'set':
                functions.set(nameObj, key, value);
                break;
            case 'print':
                functions.print(nameObj);
                break;
        }
    }
}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])
console.log('----------');
cars(['create pesho',
    'create gosho inherit pesho',
    'create stamat inherit gosho',
    'set pesho rank number1',
    'set gosho nick goshko',
    'print stamat'])