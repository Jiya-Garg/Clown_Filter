var noseX ="";
var noseY ="";
function preload(){
    img = loadImage("pic.png")
}
function setup() {
    canvas=createCanvas(500, 500)
    canvas.position(windowWidth/2-250,windowHeight/2-300)
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded() {
    console.log('PoseNet is Initialized')
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }
}
function take_snapshot() {
    save("Filter_Picture.png")
}
function draw() {
    image(video, 0, 0, 500, 500);
    //fill(250, 0, 0)
    //stroke(250, 0, 0)
    //circle(noseX, noseY, 40)
    image(img, noseX-20, noseY-20, 40, 40)
}