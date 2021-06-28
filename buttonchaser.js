var score = 0;
var aWidth;
var aHeight;
var timer;
var interations;

window.addEventListener("load", setGameAreaBounds);

function setGameAreaBounds() {
  aWidth = window.innerWidth - 22;
  aHeight = window.innerHeight - 97;
  document.getElementById("gameArea").style.width = aWidth + "px";
  document.getElementById("gameArea").style.height = aHeight + "px";
  document.getElementById("dot").addEventListener("click", detectHit);
  aWidth -= 74;
  aHeight -= 74;
  moveDot();
}

function detectHit() {
  score += 1;
  document.getElementById("scorlabel").innerHTML = "score: " + score;
}

function moveDot() {
  var x = Math.floor(Math.random() * aWidth);
  var y = Math.floor(Math.random() * aHeight);
  if (x < 10) x = 10;
  if (y < 10) y = 10;
  document.getElementById("dot").style.left = x + "px";
  document.getElementById("dot").style.top = y + "px";
  if (interations < 30) timer = setTimeout(moveDot, 1000);
}
