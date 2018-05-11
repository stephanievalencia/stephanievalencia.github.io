var Canvas; 
function windowResized(){
	resizeCanvas();
}
var barWidth = 30;
var lastBar = 0;

function setup() {
  canvas = createCanvas (windowWidth, windowHeight);
  canvas.position (0, 0);
  canvas.style ('z-index', '-1');
  colorMode(HSB, height, height, height);  
  noStroke();
  background(253,165,206);
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