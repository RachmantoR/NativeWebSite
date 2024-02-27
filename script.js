// element video //
var video = document.getElementById("video");
var contentC = document.getElementById("content-in-C");
video.addEventListener("timeupdate", timeDetect);

function timeDetect(){
    if(video.ended){
        end();
    } else {
        // do nothing //
    }
}

function activate(){
    window.location.href = "#Content-C";
    video.play();
    video.muted = true;
    // kalau pingin ada suaranya tinggal ketik video.muted=false; pada console di developer tools //
    contentC.classList.add("removeC");
}

function end() {
    window.location.href = "#Upper-nav";
    video.pause();
    video.currentTime = 0;
    contentC.classList.remove("removeC");
}