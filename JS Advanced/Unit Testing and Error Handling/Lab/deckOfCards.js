function deckOfCards(cardsArr) {
    let result = []

    for (let card of cardsArr) {
        let face = card.slice(0, card.length - 1);
        let suit = card.slice(card.length - 1);

        function playingCards(cardFace, cardSuit) {
            let currentCard = {
                'face': undefined,
                'suit': undefined,
                toString() {
                    return this.face + this.suit;
                }
            }
            switch (cardFace) {
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                case '10':
                case 'J':
                case 'Q':
                case 'K':
                case 'A':
                    currentCard.face = cardFace;
                    break;
                default:
                    //throw new Error('Error');
                    currentCard.face = `Invalid card: ${card}`
                    currentCard.suit = "";

                    break;
            }
            if (!currentCard.face.includes('Invalid')) {
                switch (cardSuit) {
                    case 'S':
                        cardSuit = '\u2660';
                        currentCard.suit = cardSuit.toString()
                        break;
                    case 'H':
                        cardSuit = '\u2665';
                        currentCard.suit = cardSuit.toString()
                        break;
                    case 'D':
                        cardSuit = '\u2666';
                        currentCard.suit = cardSuit.toString()
                        break;
                    case 'C':
                        cardSuit = '\u2663';
                        currentCard.suit = cardSuit.toString()
                        break;
                    default:
                        //throw new Error('Error');
                        currentCard.face = `Invalid card: ${card}`
                        currentCard.suit = "";
                        break;
                }
            }
            return currentCard.toString();
        }

        if(playingCards(face, suit).includes('Invalid')){
            result = [playingCards(face, suit)];
            break;
        } else{
            result.push(playingCards(face, suit));
        }
    }
    console.log(result.join(' '));

}
deckOfCards(['AS', '10D', 'KH', '2C']);
//A♠ 10♦ K♥ 2♣
deckOfCards(['1P','5S', '3D', 'QD']);
//Invalid card: 1P
