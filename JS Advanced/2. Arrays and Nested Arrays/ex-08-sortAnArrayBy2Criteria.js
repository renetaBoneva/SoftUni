function sortAnArrayBy2Criteria(data) {
    data.sort((a,b) => {return (a.toUpperCase()).localeCompare(b.toUpperCase());})
    .sort((a, b) => {return a.length - b.length;})
    for(let el of data){
        console.log(el);
    }
}
sortAnArrayBy2Criteria(['alpha',
    'beta',
    'gamma']
);
console.log('-------------------');
sortAnArrayBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);
console.log('-------------------');
sortAnArrayBy2Criteria(['test',
    'Deny',
    'omen',
    'Default']
);