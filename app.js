const video = document.querySelector("video");
const btn = document.querySelector("button");

btn.addEventListener("click",function(){
    navigator.mediaDevices.getUserMedia({
        audio:false,
        video:true
    }).then(function(stream){
video.srcObject = stream;
video.play()
    })
})