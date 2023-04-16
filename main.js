img=""
Status=""
function preload() {
    img=loadImage("dog_cat.jpg")
}
function setup() {
canvas=createCanvas(640,420)
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded)
document.getElementById('status').innerHTML="status:detecting objects"
}
function modelLoaded(){
    console.log('model is loaded')
    Status=true
    objectDetector.detect(img,gotResult)
}
function gotResult(error,results){
if (error){
    console.log(error)
}
console.log(results)
}
function draw(){
    image(img,0,0,640,420)
    fill('#FF0000')
    text("Dog", 200,60)
   noFill()
   stroke('#FF0000')
    rect(180,40,400,300)

    fill('#FF0000')
    text("Cat",360, 130)
    noFill()
    stroke('#FF0000')
    rect(290,105,290,300)
}
