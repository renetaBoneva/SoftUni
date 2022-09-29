function triplesOfLatinLetters(num) {
    for (let i = 0; i < num; i++) {
        let letter1 = String.fromCharCode(97 + i);

        for (let j = 0; j < num; j++) {
            let letter2 = String.fromCharCode(97 + j);

            for (let g = 0; g < num; g++) {

                let letter3 = String.fromCharCode(97 + g);
                console.log(letter1 + letter2 + letter3);
            }
        }

    }
}
triplesOfLatinLetters('3')