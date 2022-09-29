function songs(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numberOfSongs = input.shift();
    let typeSong = input.pop();
    for (let i = 0; i < numberOfSongs; i++) {

        let [type, name, time] = input[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song)

        if (typeSong === 'all') {
            songs.forEach((i) => console.log(i.name));
        } else{
            let filtered = songs.filter((i) => i.type === typeSong) ; 
            filtered.forEach((i) => console.log(i.name));
        }
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)
console.log('-----------------------------------------------------------');
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
)
console.log('-----------------------------------------------------------');
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
)
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');





function songs1(inputArr) {

    class Songs {
        constructor(nameSong) {
            this.nameSong = nameSong;
        }

        printSong() {
            console.log(this.nameSong);
        }
    }

    let arr = inputArr.slice();
    let command = arr.pop();
    let numSongs = arr.shift();
    for (let i = 0; i < numSongs; i++) {
        let currentSong = arr[i];
        let nameSong = currentSong.split('_')[1];

        if (command === 'all') {
            let newSong = new Songs(nameSong);
            newSong.printSong();
        } else if (currentSong.includes(command)) {
            ;
            let newSong = new Songs(nameSong);
            newSong.printSong();
        }
    }
}
songs1([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)
console.log('-----------------------------------------------------------');
songs1([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
)
console.log('-----------------------------------------------------------');
songs1([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
)
