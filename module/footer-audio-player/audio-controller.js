const shuffle = document.getElementById('shuffle')
const prev = document.getElementById('prev')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const next = document.getElementById('next')
const repeat = document.getElementById('repeat')
const audioPlayerOption = document.getElementById('audioPlayerOption')
const volumeOn = document.getElementById('volumeOn')
const volumeOff = document.getElementById('volumeOff')
const snooze = document.getElementById('snooze')

const audioPlayerSongCover = document.getElementById('audioPlayerSongCover')
const audioPlayerSongTitle = document.getElementById('audioPlayerSongTitle')
const audioPlayerSongArtistName = document.getElementById('audioPlayerSongArtistName')


play.addEventListener('click', ()=>{
    play.classList.toggle('hidden')
    pause.classList.toggle('hidden')
    updateSongInfo()
})

pause.addEventListener('click', ()=>{
    play.classList.toggle('hidden')
    pause.classList.toggle('hidden')
})


next.addEventListener('click', ()=>{
    console.log("called next")
    playNextMusic()
})

prev.addEventListener('click', ()=>{
    console.log("called prev")
    playPrevMusic()
})
