window.onload = init;

let vid;

function init(){
  console.log("Page has loaded successfully!");
  vid = document.querySelector("#myPlayer"); 
  vid.ontimeupdate = displayTime;
}

function playVideo(){
  vid.play(); 
}

function pauseVideo(){
 vid.pause();
}

function rewindVideo(){
 vid.currentTime = 0;
}

function displayTime(evt){
  console.log(vid.currentTime); 
}