var sad;

function preload() {
  sad = loadAnimation("Desktop/Animation/Circle1.PNG",
                      "Desktop/Animation/Circle2.PNG",
                      "Desktop/Animation/Circle3.PNG",
                      "Desktop/Animation/Circle4.PNG",
                      "Desktop/Animation/Circle5.PNG",
                      "Desktop/Animation/Circle6.PNG",
                      "Desktop/Animation/Circle7.PNG");
}
function setup() {
  createCanvas(640,360);
}
function draw() {
  background(255,255,255);  
  //playing an pausing an animation
  if(mouseIsPressed)
    sad.play();
  else
    sad.stop();

  animation(sad,100,200);
}