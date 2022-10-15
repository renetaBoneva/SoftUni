function listProcessor(inputArr){

    function createStr(){
        //let str = '';
        let result = []
        return {
            add: (input) => {
                result.push(input)
            },
            remove: (input) => {
                let index = result.indexOf(input);
                result.splice(index, 1);
            },
            print: () => {
                console.log(result.join(','));
            }
        }
    }
    let obj = createStr();
    for(let line of inputArr){
        let [command, value] = line.split(' ');
        switch(command){

            case 'add':
                obj.add(value);
                break;
            case 'remove':
                obj.remove(value);
                break;
            case 'print':
                obj.print();
                break;
        }
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])
listProcessor(['print'])