video="";

function preload(){
  video=createVideo("video.mp4");

  
}

function setup(){
 canvas= createCanvas(425,425);
 canvas.center();
video.hide();
}

function draw() {
  image(video,15,15,100,100);
}

function detect(){
    console.log(ml5.version);
    model=ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML="Detecting Objects";
}

function modelloaded(){
    console.log("model loaded sucessfuly");

}