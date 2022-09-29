function towns(data){
    for(let el of data){
        let [town, latitude, longtitude] = el.split(' | ');
        let result = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longtitude).toFixed(2)
        };
        console.log(result);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)
