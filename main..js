function setup(){
    canvas=createCanvas(600,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(550, 500);
}
function draw(){
    image(video,0,0,600,400);
}

function preload(){
    
}