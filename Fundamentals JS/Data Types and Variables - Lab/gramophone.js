function gramophone(band, album, song){

    let songDuration = (album.length * band.length) * song.length / 2;
    let rotationsNum = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${rotationsNum} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')