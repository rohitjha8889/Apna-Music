

const songs = [
  {
    title: "Ishqam",
    src: "./Ishqam - Mika Singh ft. Ali Quli Mirza- [PagalWorld.NL].mp3",
    poster: "./Images/ishqam.jpg",
    details:"Ishqam - Mika Singh ft. Ali Quli Mirza"
  },
  {
    title: "Katilana",
    src: "./Katilana_Teri_Aankhen_Aankhen_Bhi_Karti_Hai_BatenPagalWorldl.mp3",
    poster: "./Images/katilana.jpeg",
    details:"Katilana_Teri_Aankhen_Aankhen_Bhi_Karti_Hai"
  },
  {
    title: "Maan Meri Jaan",
    src: "./Maan Meri Jaan Champagne Talk 128 Kbps.mp3",
    poster: "./Images/mann.jpg",
    details:"Maan Meri Jaan Champagne Talk 128 Kbps"
  },
  {
    title: "Munda Sona Hoon",
    src: "./Munda Sona Hoon Main Shehzada 128 Kbps.mp3",
    poster: "./Images/munda.jpg",
    details:"Munda Sona Hoon Main Shehzada 128 Kbps"
  },
];

const postersContainer = document.getElementById('postersContainer');
const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");
const playButton = document.getElementById("playButton");
// const pauseButton = document.getElementById("pauseButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const songTitle = document.getElementById("songTitle");
const songDetail = document.getElementById("songDetail");
const posterImage = document.getElementById("posterImage");

playButton.addEventListener('click', togglePlayPause);

function togglePlayPause(){
  if(audioPlayer.paused){
    playSong()
    
  }
  else{
    pauseSong()
    
  }
}

let currentSongIndex = 0;

function loadSong(index) {
  const currentSong = songs[index];
  audioSource.src = currentSong.src;
  posterImage.src = currentSong.poster;
  audioPlayer.load();
  songTitle.textContent = currentSong.title;
  songDetail.textContent = currentSong.details;
}

function playSong() {
  audioPlayer.play();
  playButton.classList.remove('fa-play')
  playButton.classList.add('fa-pause')
}

function pauseSong() {
  audioPlayer.pause();
  playButton.classList.remove('fa-pause')
    playButton.classList.add('fa-play')
}

audioPlayer.addEventListener('ended', playNextSong);

function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  playSong();
}

function playPrevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  playSong();
}

// playButton.addEventListener("click", playSong);
// pauseButton.addEventListener("click", pauseSong);
nextButton.addEventListener("click", playNextSong);
prevButton.addEventListener("click", playPrevSong);

// Load the first song initially


//  Display the song library
songs.map((song, index) => {
    const poster = document.createElement('img');
    poster.src = song.poster;
    poster.alt = `${song.title} Poster`;
    
    poster.classList.add('col', 'col-md-4','song');

    
    
    
    poster.addEventListener('click', () => {
        loadSong(index);
        playSong();
    });
    
    postersContainer.appendChild(poster);
});

loadSong(currentSongIndex);




// let progress = document.getElementById("progress");


// audioPlayer.addEventListener('timeupdate', updateProgressBar);

// function updateProgressBar() {
//     const currentTime = audioPlayer.currentTime;
//     const duration = audioPlayer.duration;
//     const progressPercentage = (currentTime / duration) * 100;

//     progress.style.width = `${100-progressPercentage}%`;
// }

// ... (existing code)

const progressSlider = document.getElementById('progress');
const progressBar = document.querySelector('.slider::-webkit-slider-runnable-track');

progressSlider.value = 0;
progressSlider.addEventListener('input', updatePlayback);

function updatePlayback() {
    const progress = progressSlider.value / 100;
    audioPlayer.currentTime = progress * audioPlayer.duration;
}

audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    
    progressSlider.value = progress;
});



// ... (existing code)
