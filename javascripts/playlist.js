window.onload = init;

function    init() {
    button = document.getElementById("addButton");
    button.onclick = handleButtonClick;

    loadPlaylist();
}

function handleButtonClick() {
    var textInput = document.getElementById("songTextInput");
    songName = textInput.value;
    if (songName) {
        var li = document.createElement("li");
        li.innerHTML = songName;
        
        var ul = document.getElementById("playlist");
        ul.appendChild(li);
        save(songName);
    }
}

function save(item) {
    var playlistArray = getStoreArray("playlist");
    playlistArray.push(item);
    localStorage.setItem("playlist", JSON.stringify(playlistArray));
}

function loadPlaylist() {
    var playlistArray = getSavedSongs();
    var ul = document.getElementById("playlist");
    if (playlistArray) {
        for (var i = 0; i < playlistArray.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = playlistArray[i];
            ul.appendChild(li);
        }
    }
}

function getSavedSongs() {
    return getStoreArray("playlist");
}

function getStoreArray(key) {
    var playlistArray = localStorage.getItem(key);
    if (playlistArray) {
        playlistArray = JSON.parse(playlistArray);
    } else {
        playlistArray = [];
    }
    return playlistArray;
}