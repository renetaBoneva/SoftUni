function rightPlace(before, char, after) {

    let before1 = before.replace("_", char);
    
    if (before1 == after) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'i', 'String')