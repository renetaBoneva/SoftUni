function foreignLanguages(county){
    switch(county){
        case "USA": 
        case "England":
            console.log('English');
            break;
        case "Spain":
        case "Mexico":
        case "Argentina":
            console.log('Spanish');
            break;
        default:
            console.log('unknown');
    }
}
foreignLanguages(USA)