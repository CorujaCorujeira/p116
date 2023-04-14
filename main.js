function preload() {
    let bigode=loadImage("https://postimg.cc/zyg0Rsbj");
}

function setup() {
    var canvas=createCanvas(300,300);
    canvas.center();
    var video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    var poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('poseNet is initionalized');
}

function gotPoses(results) {
    if (result.length>0) {
        console.log(results);
        bigodeX=results[0].nose.X-15;
        bigodeY=results[0].nose.Y-15;
    }
}

function draw() {
    Image(video,0,0,300,300);
    Image(bigode,bigodeX,bigodeY,30,30);
}

function takeSnapshot() {
    SVGAElement('myFilterImage')
}