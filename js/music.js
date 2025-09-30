import LinkedList from "./linked-lists";

const musicList = new LinkedList();
musicList.add("Song 1");
musicList.add("Song 2");
musicList.add("Song 3");
musicList.add("Song 4");
musicList.add("Song 5");
musicList.add("Song 6");
musicList.traverse();
const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
let isPlaying = true;
const playStatus = document.getElementById("play-pause");
const songTitle = document.getElementById("current-song");
songTitle.innerHTML = musicList.head.value;



playBtn.addEventListener("click", () => {
    if(isPlaying){
        playStatus.innerHTML = "Pause:";
        isPlaying = false;
    } else {
        playStatus.innerHTML = "Play:";
        isPlaying = true;
    }
});
nextBtn.addEventListener("click", () => {
    musicList.moveNext();
    updateSongTitle();
});
prevBtn.addEventListener("click", () => {
    musicList.movePrev();
    updateSongTitle();
});
function updateSongTitle(){
    songTitle.innerHTML = musicList.getCurrent();
}