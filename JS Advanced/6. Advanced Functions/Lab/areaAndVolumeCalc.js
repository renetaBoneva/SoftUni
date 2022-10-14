function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function areaAndVolumeCalculator(area, vol, input) {
    let cordinates = JSON.parse(input);
    let result = cordinates.map( c => ({
        area: Math.abs(area.call(c)),
        volume: Math.abs(vol.call(c))
    }));
    return result;
    // for(let current of cordinates){
    //     let area1 = Math.abs(area.call(current));
    //     let volume1 = Math.abs(vol.call(current));
    //     let resultObj = { "area": area1, "volume": volume1};
    //     result.push(resultObj);
    // }
}
areaAndVolumeCalculator(area, vol,'[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]')
areaAndVolumeCalculator(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    )
areaAndVolumeCalculator(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`
    )
