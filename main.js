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
    title: "Arabian",
    name: "Aereo beats",
    source: "songs/Aereo beats - Arabian.mp3",
  },
  {
    title: "Dos gardenias",
    name: "Altwo francorimador",
    source: "songs/Altwo francorimador - Dos gardenias.mp3",
  },
  {
    title: "Rap119",
    name: "Bodipo",
    source: "songs/Bodipo - Rap119.mp3",
  },
  {
    title: "In my mind",
    name: "Careuno",
    source: "songs/Careuno - In my mind.mp3",
  },
  {
    title: "Todo al rojo",
    name: "D-efe",
    source: "songs/D-efe - Todo al rojo.mp3",
  },
  {
    title: "Arabia nigths",
    name: "Dr Delirio",
    source: "songs/Dr Delirio - Arabia nigths.mp3",
  },
  {
    title: "Despierto",
    name: "Frazetta",
    source: "songs/Frazetta - Despierto.mp3",
  },
  {
    title: "Dame tu free",
    name: "Lito mc",
    source: "songs/Lito mc - Dame tu free.mp3",
  },
  {
    title: "Otro plano",
    name: "M.Dayon",
    source: "songs/M.Dayon - Otro plano.mp3",
  },
  {
    title: "Alight",
    name: "Manos $ucias",
    source: "songs/Manos $ucias - Alight.mp3",
  },
  {
    title: "Slave",
    name: "Munioh bon",
    source: "songs/Munioh bon - Slave.mp3",
  },
  {
    title: "El rapero enmascarado",
    name: "Returner",
    source: "songs/Returner - El rapero enmascarado.mp3",
  },
  {
    title: "Bless",
    name: "Shard",
    source: "songs/Shard - Bless.mp3",
  },
  {
    title: "Vuelo601",
    name: "Solrack",
    source: "songs/Solrack - Vuelo601.mp3",
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

song.addEventListener("ended", (event) => {
  forwardButton.click()
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
