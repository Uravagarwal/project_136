status = "";
function setup()
{
	canvas = createCanvas(400,400);
	canvas.center();
	video = createCapture(VIDEO);
	video.size(400,400);
	video.hide();
}

function start()
{
	coco = ml5.objectDetector('cocossd',modelLoded);
	document.getElementById("status").innerHTML = "Status: Detecting Objects";
	input_value = document.getElementById("name_object").value;
}

function modelLoaded()
{
	console.log("model loaded");
	status = True;
}

function draw()
{
	image(video,0,0,400,400);
}