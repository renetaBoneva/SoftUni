//If names are not unique
function partyTime(input) {

    //Making a copy of input
    let data = input.slice();
    data = data.join(' ');
    //Collecting the information
    let [invited, came] = data.split(' PARTY ');
    invited = invited.split(' ');
    came = came.split(' ');
    data = data.split(' ')

    let vipGuests = [];
    let partyIndex = invited.length + 1;

    for (let i = 0; i < partyIndex - 1; i++) {
        let line = invited[i];
        let type = line.charAt(0);
        switch (type) {
            case "0":
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case "8":
            case '9':
            case '10':
                vipGuests.push(line);
                break;
        }
    }

    let i = 0;
    let line = data[i];
    while (line !== 'PARTY') {
        line = data[i];
        let type = line.charAt(0);
        switch (type) {
            case "0":
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case "8":
            case '9':
            case '10':
                data.splice(i, 1);
                i--
                break;
        }
        i++
    }

    for (let i = vipGuests.length - 1; i >= 0; i--) {
        data.unshift(vipGuests[i]);
    }

    let count = invited.length - came.length;
    console.log(count);

    let filteredCame = [];
    
    for(let invitedGuest of invited){        
        for(let cameGuest of invited){
            if(cameGuest === invitedGuest){
                filteredCame.push(cameGuest);
            }
        }
    }
    for(let vipguest of vipGuests){
        for(let guest of came){
            if(vipguest !== guest){
                console.log(vipguest);
                break;
            }
        }
    }


}


//If names are unique
function partyTime1(input) {

    //Making a copy of input
    let data = input.slice();
    data = data.join(' ');
    //Collecting the information
    let [invited, came] = data.split(' PARTY ');
    invited = invited.split(' ');
    came = came.split(' ');
    data = data.split(' ')

    let guestList = new Map();
    let vipGuests = new Set();

    //Checking VIP guests
    for (let line of data) {
        let type = line.charAt(0);
        switch (type) {
            case "0":
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case "8":
            case '9':
            case '10':
                vipGuests.add(line);
                break;
        }
    }

    for (let guest of invited) {
        guestList.set(guest, 'Not here')
    }
    //Cheking who is here
    for (let invitedGuest of invited) {
        for (let guest of came) {
            //Cheking if the guest is in the guest list
            if (guest === invitedGuest) {
                guestList.set(guest, 'Here')
                break;
            }
        }
    }

    //Cheking the number of arrived people
    let count = 0;
    for (let [guest, isHere] of guestList) {
        if (isHere === 'Not here') {
            count++;
        }
    }
    //Printing result
    console.log(count);
    for (let [guest, isHere] of guestList) {
        for (let vipGuest of vipGuests) {
            if (guest === vipGuest && isHere === 'Not here') {
                console.log(guest);
                guestList.delete(guest);
                break;
            }
        }
    }
    for (let [guest, isHere] of guestList) {
        if (isHere === 'Not here') {
            console.log(guest);
        }
    }
}
partyTime(['7IK9Yo0h', 
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p','7IK9Yo0h',
    'PARTY', 
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc', 'SVQXQCbc',
    '9NoBUajQ'
])
// console.log('------------------------------');
// partyTime(['m8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'xys2FYzn',
//     'MDzcM9ZK',
//     'PARTY',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ'
// ])