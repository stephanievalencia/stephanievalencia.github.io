var Canvas; 
function windowResized(){
	resizeCanvas();
}
var barWidth = 1;
var lastBar = -1;

function setup() {
  canvas = createCanvas (windowWidth, windowHeight);
  canvas.position (0, 0);
  canvas.style ('z-index', '-1');
  colorMode(HSB, height, height, height);  
  noStroke();
  background(255);
}

function draw() {
  var whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    var barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}