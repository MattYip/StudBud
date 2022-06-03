let currentSong = 0;

const music = document.querySelector('#audio');

const seekBar = document.querySelector('.seekBar');
const songName = document.querySelector('.songName');
const artistName = document.querySelector('.artistName');
const coverArt = document.querySelector('.coverArt');
const currentTime = document.querySelector('.currentTime');
const songDuration = document.querySelector('.songDuration');
const playButton = document.querySelector('.playButton');
const forwardButton = document.querySelector('.forwardButton');
const backwardButton = document.querySelector('.backwardButton');

//Click event for play button
playButton.addEventListener('click', () => {
    playButton.classList.toggle('pause');
})

//Music Setup 
const setMusic = (i) => {
    seekBar.value = 0; //set range slider value to 0
    let song = songs[i] //gets songs from " music" folder
    currentSong = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    coverArt.style.backgroundImage = `url('${song.cover}')`;

    currentTime.innerHTML = "00:00:00"

    music.addEventListener('loadedmetadata', (event) => {
        console.log(music.duration);
        seekBar.max = music.duration;
        songDuration.innerHTML = formatDurationTime(music.duration);
    })

}

setMusic(0);

//format hour, min, sec

const formatDurationTime = (time) => {
    let hour = Math.floor(time / 60 / 60);
    if (hour < 10) {
        hour = `0${hour}`; //Inserting time type into display format
    }
    let min = Math.floor(time / 60) - (hour * 60);
    if (min < 60) {
        min = `0${min}`;
    }
    let sec = Math.floor(time - (min * 60) - (hour * 60 * 60));
    if (sec > 10) {
        sec = `${sec}`
    }

    return `${hour}:${min}:${sec}`;
}

const formatTime = (time) => {
    let hour = Math.floor(time / 60 / 60);
    if (hour < 10) {
        hour = `0${hour}`; //Inserting time type into display format
    }
    console.log(hour)
    let min = Math.floor(time / 60);
    if (min < 60) {
        min = `0${min}`;

        let sec = Math.floor(time % 60);
        if (sec < 60) {
            sec = `0${sec}`;
        }

        return `${hour}:${min}:${sec}`;
    }
}


playButton.addEventListener('click', () => {
    if (playButton.className.includes('pause')) {
        music.pause();
    } else {
        music.play();
    }
})

// seek bar
setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);
}, 500)

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
})

// forward and backward button
forwardButton.addEventListener('click', () => {
    if (currentSong >= songs.length - 1) {
        currentSong = 0;
    } else {
        currentSong++;
    }
    setMusic(currentSong);
    playMusic();
})

backwardButton.addEventListener('click', () => {
    if (currentSong <= 0) {
        currentSong = songs.length - 1;
    } else {
        currentSong--;
    }
    setMusic(currentSong);
    playMusic();
})
