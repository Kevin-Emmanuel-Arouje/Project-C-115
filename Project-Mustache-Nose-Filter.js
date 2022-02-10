noseX=0;
noseY=0;
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("posenet is now initialised");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
}
function draw(){
    image(video, 0, 0, 400, 400);
}
function preload(){

}
function takeSnapshot(){
    save("Image.jpg");
}