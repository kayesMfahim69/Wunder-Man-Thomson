var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");
function playVideo(file){
myVideo.src = file;
videoPlayer.style.display="block";
}