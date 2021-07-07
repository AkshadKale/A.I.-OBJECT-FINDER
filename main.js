status = "";
objects = [];
input_value = "";

function setup(){
    canvas = createCanvas(450 , 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    
}

function draw(){
    image(video , 0, 0, 450 , 450);

    if(status != "")
    {
        objectDetector.detect(video , gotResult);
        for(i = 0; i < objects.length ; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" , objects[i].x + 15 , objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);

            if(objects[i].label == input_value){
                document.getElementById("object_found").innerHTML = input_value + " found";
                video.stop();
                objectDetector.detect(gotResult);
            }
        }
    }
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

function gotResult(error , results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}