function playingCards(cardFace, cardSuit) {
        let result = {
            'face': undefined,
            'suit': undefined,
            toString(){
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
                result.face = cardFace;
                break;
            default:
                throw new Error('Error');
        }
        switch (cardSuit) {
            case 'S':
                cardSuit = '\u2660';
                result.suit = cardSuit.toString()
                break;
            case 'H':
                cardSuit = '\u2665';
                result.suit = cardSuit.toString()
                break;
            case 'D':
                cardSuit = '\u2666';
                result.suit = cardSuit.toString()
                break;
            case 'C':
                cardSuit = '\u2663';
                result.suit = cardSuit.toString()
                break;
            default:
                throw new Error('Error');

        }
        return result;
}
console.log(playingCards('A', 'S').toString());
//A♠
console.log('-------------');
console.log(playingCards('10', 'H').toString());
//10♥
console.log('-------------');
console.log(playingCards("1", 'S').toString());
//throw error
console.log('-------------');
console.log(playingCards('10', 'l').toString());
//throw error
