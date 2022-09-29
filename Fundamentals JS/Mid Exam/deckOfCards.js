function deckOfCards(array) {
    let arr = array.slice();
    let deck = arr.shift().split(', ');
    let commandNum = arr.shift();

    for (let i = 0; i < commandNum; i++) {
        let currentLine = arr[i].split(', ');
        let currentComand = currentLine[0];
        let cardName = '';
        let index = 0;
        switch (currentComand) {
            case 'Add':
                cardName = currentLine[1];
                if (deck.includes(cardName)) {
                    console.log('Card is already in the deck');
                } else {
                    deck.push(cardName);
                    console.log('Card successfully added');
                }
                break;
            case 'Remove':
                cardName = currentLine[1];
                if (deck.includes(cardName)) {
                    deck.splice(deck.indexOf(cardName), 1);
                    console.log('Card successfully removed');
                } else {
                    console.log('Card not found');
                }
                break;
            case 'Remove At':
                index = currentLine[1];
                if (index < 0 || index > deck.length) {
                    console.log('Index out of range');
                } else {
                    deck.splice(index, 1);
                    console.log('Card successfully removed');
                }

                break;
            case 'Insert':
                cardName = currentLine[2];
                index = currentLine[1];
                if (index < 0 || index > deck.length) {
                    console.log('Index out of range');
                } else if (deck.includes(cardName)) {
                    console.log('Card is already in the deck');
                } else {
                    deck.splice(index, 0, cardName);
                    console.log('Card successfully added');
                }
                break;

        }
    }
    console.log(deck.join(', '));
}
deckOfCards(["Ace of Clubs, Jack of Clubs, King of Diamonds",
    "2","Remove At, 1", "Remove At, 3"]);
console.log('================================================');




function deckOfCards1(array) {
    let arr = array.slice();
    let deck = arr.shift().split(', ');
    let commandNum = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let currentLine = arr[i].split(', ');
        let currentComand = currentLine[0];
        let cardName = '';
        let index = 0;
        switch (currentComand) {
            case 'Add':
                cardName = currentLine[1];
                if (deck.includes(cardName)) {
                    console.log('Card is already in the deck');
                } else {
                    deck.push(cardName);
                    console.log('Card successfully added');
                }
                break;
            case 'Remove':
                cardName = currentLine[1];
                if (deck.includes(cardName)) {
                    deck.splice(deck.indexOf(cardName), 1);
                    console.log('Card successfully removed');
                } else {
                    console.log('Card not found');
                }
                break;
            case 'Remove At':
                index = currentLine[1];
                if (index < 0 || index > deck.length) {
                    console.log('Index out of range');
                } else {
                    deck.splice(index, 1);
                    console.log('Card successfully removed');
                }

                break;
            case 'Insert':
                cardName = currentLine[2];
                index = currentLine[1];
                if (index < 0 || index > deck.length) {
                    console.log('Index out of range');
                } else if (deck.includes(cardName)) {
                    console.log('Card is already in the deck');
                } else {
                    deck.splice(index, 0, cardName);
                    console.log('Card successfully added');
                }
                break;

        }
    }
    console.log(deck.join(', '));
}