function matchFullName(input){

    let pattern = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}/g;

    let validNames = [];
    let currentValidName = pattern.exec(input);
    while(currentValidName !== null){
        validNames.push(currentValidName[0]);

        currentValidName = pattern.exec(input);
    }
    console.log(validNames.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")
