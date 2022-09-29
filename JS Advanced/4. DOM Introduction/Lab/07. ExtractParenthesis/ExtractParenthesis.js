function extract(elementID) {
    let content = document.getElementById(elementID).textContent;
    let pattern = /\(([\w\s]+)\)/gm;
    let matched = content.matchAll(pattern);
    let result = [];
    for(let current of matched){
        result.push(current[1]);
    }
    return result.join('; ')    
}