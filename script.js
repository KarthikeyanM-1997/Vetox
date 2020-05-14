var Song = /** @class */ (function () {
    function Song(artistName, songName, albumName, songURL) {
        this.artistName = artistName;
        this.songName = songName;
        this.albumName = albumName;
        this.songURL = songURL;
    }
    return Song;
}());
var songList = [];
songList.push(new Song("Alan Walker", "Faded", "Different World", "Faded.mp3"));
songList.push(new Song("Ram", "Life Of Ram", "96", "Life_Of_Ram.mp3"));
function playSong(index) {
    var audioElement = document.getElementById("audioPlayer");
    document.getElementById("audioSource").setAttribute("src", songList[index].songURL);
    audioElement.load();
    audioElement.play();
    document.getElementById("songDetails").innerHTML = "Artist : " + songList[index].artistName + " <br> " + "Album Name : " + songList[index].albumName + "<br>" + "Song URL : " + songList[index].songURL;
}
function addSong(song) {
    songList.push(song);
}
function addSongsToList() {
    document.getElementById("songList").innerHTML = "";
    for (var i = 0; i < songList.length; i++) {
        document.getElementById("songList").innerHTML += "<button id='song" + i + "' onclick='playSong(" + i + ")'>" + songList[i].songName + "</button><br>";
    }
    console.log(songList);
}
addSong(new Song("Martin Garrix", "So Far Away", "The Martin Garrix Experience", "So_Far_Away.mp3"));
addSong(new Song("Axwell Λ Ingrosso", "Sun is Shining", "More Than You Know", "Sun_Is_Shining.mp3"));
addSong(new Song("Sam C. S.", "Karuppu Vellai", "Vikram Vedha", "Karuppu Vellai.mp3"));
addSong(new Song("Hiphop Tamizha", "Theemai Dhaan Vellum", "Thani Oruvan", "Theemai Dhaan Vellum.mp3"));
addSongsToList();
function addNewSong() {
    var name = document.getElementById("newSongName").value;
    var artist = document.getElementById("newSongArtist").value;
    var album = document.getElementById("newSongAlbum").value;
    var url = document.getElementById("newSongURL").value;
    addSong(new Song(artist, name, album, url));
    addSongsToList();
}
