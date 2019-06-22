/*
Topic #10 HTML5 Tags: Audio, Video, Canvas
*/

//manual audio file controls
var controls = document.getElementById("myAudio");

function playAudio() {
	controls.play();
}

function pauseAudio() {
	controls.pause();
}


//manual video file controls
var vcontrol = document.getElementById("myVideo");

function playVid() {
	vcontrol.play();
}

function pauseVid() {
	vcontrol.pause();
}

//canvas controls
function draw() {
	var head = document.getElementById("canvas");
	var drawHead = head.getContext("2d");
	drawHead.beginPath();
	drawHead.arc(100, 50, 40, 0, 2 * Math.PI);
	drawHead.stroke();
}

function eyes() {
	var leftEye = document.getElementById("canvas");
	var drawLeftEye = canvas.getContext("2d");
	drawLeftEye.beginPath();
	drawLeftEye.arc(85, 35, 5, 0, 2 * Math.PI);
	drawLeftEye.stroke();
	var rightEye = document.getElementById("canvas");
	var drawRightEye = canvas.getContext("2d");
	drawRightEye.beginPath();
	drawRightEye.arc(115, 35, 5, 0, 2 * Math.PI);
	drawRightEye.stroke();
}

function mouth() {
	var mouth = document.getElementById("canvas");
	var drawMouth = mouth.getContext("2d");
	drawMouth.beginPath();
	drawMouth.arc(100, 40, 30, 1, 2);
	drawMouth.stroke();
}

function nose() {
	var nose = document.getElementById("canvas");
	var drawNose = nose.getContext("2d");
	drawNose.moveTo(100, 45);
	drawNose.lineTo(100, 55);
	drawNose.stroke();
}

function stickBody() {
	var body = document.getElementById("canvas");
	var ctx = body.getContext("2d");
	ctx.moveTo(100, 90);
	ctx.lineTo(100, 150);
	ctx.stroke();
}

function arms() {
	var body = document.getElementById("canvas");
	var ctx = body.getContext("2d");
	ctx.moveTo(130, 105);
	ctx.lineTo(70, 105);
	ctx.stroke();
}

function legs() {
	var leftLeg = document.getElementById("canvas");
	var drawLeftLeg = leftLeg.getContext("2d");
	drawLeftLeg.moveTo(100, 150);
	drawLeftLeg.lineTo(115, 180);
	drawLeftLeg.stroke();
	var rightLeg = document.getElementById("canvas");
	var drawRightLeg = rightLeg.getContext("2d");
	drawRightLeg.moveTo(100, 150);
	drawRightLeg.lineTo(75, 180);
	drawRightLeg.stroke();
}




//need research on how to get functioning
//video file controls
var video = document.getElementById('video');
var audio = document.getElementById('audio');
//Play Video Function
function playVideo() {
	video.play();
}
//Reset Video Function
function ResetVideo() {
	video.load();
}
//Pause Video Function
function pauseVideo() {
	video.pause();
}
//Play Audio Function
function playAudio() {
	audio.play();
}
//Reset Audio Function
function ResetAudio() {
	audio.load();
}
//Pause Audio Function
function pauseAudio() {
	audio.pause();
}
