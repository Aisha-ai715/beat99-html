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

const audioElement = document.getElementById('theSong')
const audioTimerStart = document.getElementById('audioTimerStart')
const audioTimerEnd = document.getElementById('audioTimerEnd')

const audioPlayerSongCover = document.getElementById('audioPlayerSongCover')
const audioPlayerSongTitle = document.getElementById('audioPlayerSongTitle')
const audioPlayerSongArtistName = document.getElementById('audioPlayerSongArtistName')



play.addEventListener('click', ()=>{
    play.classList.toggle('hidden')
    pause.classList.toggle('hidden')
    audioElement.play()
})

pause.addEventListener('click', ()=>{
    play.classList.toggle('hidden')
    pause.classList.toggle('hidden')
    audioElement.pause()
})


next.addEventListener('click', ()=>{
    console.log("called next")
    playNextMusic()
})

prev.addEventListener('click', ()=>{
    console.log("called prev")
    playPrevMusic()
})

audioElement.addEventListener('timeupdate', ()=>{
    console.log("called prev")
    getDuration()
})

