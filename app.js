const video = document.querySelector("video");
const btn = document.querySelector("button");

btn.addEventListener("click",function(){
    navigator.mediaDevices.getUserMedia({
        audio:true,
        video:true
    }).then(function(stream){
video.srcObject = stream;
video.play()
    })
})