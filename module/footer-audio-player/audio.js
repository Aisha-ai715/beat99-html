const songs = [
    {
        name: "It's happy Holiday",
        artist: "Madonna",
        url: "https://m4a-64.jango.com/04/39/29/0439295284.m4a",
        imageUrl: "https://album99.cdn107.com/09/ad/09ad170615ebfe3f586b92423961b282_xl.jpg"
    },
    {
        name: "Tell It to My Heart",
        artist: "Taylor Dayne",
        url: "https://m4a-64.jango.com/07/46/13/0746130727.m4a",
        imageUrl: "https://artist99.cdn107.com/77c/77c0d9f44a91400c0acd7d162185919b_xl.jpg"
    },
    {
        name: "Playing With The Boys",
        artist: "Kenny Loggins",
        url: "https://mp3-128.jango.com/music/07/05/87/0705871972.mp3",
        imageUrl: "https://artist99.cdn107.com/ce8/ce85ebe0ec658edcd7178684a82ed348_xl.jpg"
    },
]

let currentIndex = 0
let currentSong = songs[currentIndex]
function updateSongInfo(){
    currentSong = songs[currentIndex]

    audioPlayerSongCover.src = currentSong.imageUrl
    audioPlayerSongTitle.innerText = currentSong.name
    audioPlayerSongArtistName.innerText = currentSong.artist
}

function playNextMusic(){
    // play next
    if(currentIndex < (songs.length - 1)){
        currentIndex += 1
    } else {
        currentIndex = 0
    }
    updateSongInfo()
}

function playPrevMusic(){
    // play prev
    if(currentIndex > 0){
        currentIndex -= 1
    } else {
        currentIndex = songs.length - 1
    }
    updateSongInfo()
}