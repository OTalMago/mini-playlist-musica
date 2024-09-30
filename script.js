
const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Crazy Train",
    name: "Ozzy Osbourne",
    source:
      "songs/Ozzy Osbourne - Crazy Train.mp3",
  },
  {
    title: "Highway to Hell",
    name: "AC/DC",
    source:
      "songs/Highway to Hell.mp3",
  },
  {
    title: "Should I Stay or Should I Go",
    name: "The Clash",
    source:
      "songs/Should I Stay or Should I Go (Remastered).mp3",
  },
  {
    title: "The Emptiness Machine",
    name: "Linkin Park",
    source:
      "songs/The Emptiness Machine Linkin Park.mp3",
  },
  {
    title: "Arthur Morgan (Red Dead Redemption 2) Redenção",
    name: "Henrique Mendonça",
    source:
      "songs/Arthur Morgan (Red Dead Redemption 2) - _Redenção_ _ Henrique Mendonça.mp3",
  },

  {
    title: "Back In Black",
    name: "AC/DC",
    source:
      "songs/Back In Black.mp3",
  },
  {
    title: "Mighty Long Fall",
    name: "ONE OK ROCK",
    source:
      "songs/ONE OK ROCK - Mighty Long Fall [Official Music Video].mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});
