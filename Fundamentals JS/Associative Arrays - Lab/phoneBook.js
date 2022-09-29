function phoneBook(data) {
    let phoneBook = {};
    for(let line of data){
        let [name, phoneNum] = line.split(' ');
        phoneBook[name] = phoneNum;
    }
    for(let key in phoneBook){
        console.log(`${key} -> ${phoneBook[key]}`);
    }

}
phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)