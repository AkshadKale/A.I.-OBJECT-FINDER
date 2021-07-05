status = "";

function setup(){
    canvas = createCanvas(450 , 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
}

function draw(){
    image(video , 0, 0, 450 , 450);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detecting";
    input_value = document.getElementById("input").value;
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
}