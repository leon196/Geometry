
var canvasElement = document.getElementById("container");
var timeStarted = new Date() / 1000;
var timeElapsed = 0;
var draw;
var player;
var buttonPlay;
var obstacleList = [];
var letterList = [];
var particleList = [];

var score = 0;

const STATE_MENU = 0;
const STATE_PLAY = 1;

var state = STATE_MENU;

var timeSpawnElapsed = 0;
var timeSpawnDelay = 5;

var timeSpawnLetterElapsed = 0;
var timeSpawnLetterDelay = 0.1;

function mix (a, b, ratio)
{
	return a * (1 - ratio) + b * ratio
}

function init ()
{
  // Set fullscreen
  canvasElement.width = window.innerWidth;
  canvasElement.height = window.innerHeight;

  draw = new Draw();
  player = new Player();
	buttonPlay = new Button();
	buttonPlay.x = canvasElement.width / 2
	buttonPlay.y = canvasElement.height / 2
	buttonPlay.text = "Play";
	buttonPlay.callback = function ()
	{
		state = STATE_PLAY;
	}

  // Events
  canvasElement.addEventListener('mousedown', onMouseDown);
  canvasElement.addEventListener('mouseup', onMouseUp);
  canvasElement.addEventListener('mousemove', onMouseMove);
  document.addEventListener("keydown", onKeyDown);
	document.addEventListener("keyup", onKeyUp);

  // Start main loop
  requestAnimationFrame(update);
}

function spawnParticle (count, arrow)
{
	for (var i = 0; i < count; ++i)
	{
		var particle = new Particle(arrow.x, arrow.y);
		particleList.push(particle);
	}
}

function spawnEnemy ()
{
  var obstacle = new Obstacle();
  obstacleList.push(obstacle);

  // Horizontal
  if (Math.random() < 0.5)
  {
    // Gauche
    if (Math.random() < 0.5)
    {
      obstacle.x = -obstacle.size;
      obstacle.y = Math.random() * canvasElement.height;
      obstacle.direction.x = 1;
      obstacle.direction.y = 0;
    }
    // Droite
    else
    {
      obstacle.x = canvasElement.width + obstacle.size;
      obstacle.y = Math.random() * canvasElement.height;
      obstacle.direction.x = -1;
      obstacle.direction.y = 0;
    }
  }

  // Vertical
  else
  {
    // Haut
    if (Math.random() < 0.5)
    {
      obstacle.x = Math.random() * canvasElement.width;
      obstacle.y = -obstacle.size;
      obstacle.direction.x = 0;
      obstacle.direction.y = 1;
    }
    // Bas
    else
    {
      obstacle.x = Math.random() * canvasElement.width;
      obstacle.y = canvasElement.height + obstacle.size;
      obstacle.direction.x = 0;
      obstacle.direction.y = -1;
    }
  }
}

function spawnLetter ()
{
  var letter = new Letter();
  letter.x = 0
  letter.y = canvasElement.height * (Math.sin(timeElapsed) * 0.5 + 0.5);
  letterList.push(letter);
}

function update ()
{
  timeElapsed = new Date() / 1000 - timeStarted;

  // draw.clear();
  // draw.box(0, 0, canvasElement.width, canvasElement.height, "#3f3f3c");
	draw.box(0, 0, canvasElement.width, canvasElement.height, "rgba(255, 255, 255, 0.15)");

	switch(state)
	{
		case STATE_MENU:
		draw.text("Coucou", canvasElement.width / 2, canvasElement.height / 4, 96)
		buttonPlay.draw();
		break;

		case STATE_PLAY:
		UpdateGame();

		draw.text("Score " + score, canvasElement.width / 2, 32)
		draw.text("Life " + player.life, canvasElement.width / 2, 64)
		break;
	}

  // Maintain loop
  requestAnimationFrame(update);
}

function UpdateGame ()
{
  player.draw();
  player.update();

  for (var i = 0; i < letterList.length; ++i)
  {
    var letter = letterList[i];
    letter.update();
    letter.draw();
    if (timeElapsed - letter.timeStart > letter.timeDelay)
    {
      letterList.splice(i, 1);
    }
  }

  for (var i = 0; i < obstacleList.length; ++i)
  {
    var obstacle = obstacleList[i];
    obstacle.update();
    obstacle.draw();

    for (var j = 0; j < obstacle.arrowList.length; ++j)
    {
      var arrow = obstacle.arrowList[j];
      arrow.draw();
    }

    if (obstacle.isOutOfScreen() || obstacle.life <= 0)
    {
      obstacleList.splice(i, 1);
    }
  }

  for (var i = 0; i < particleList.length; ++i)
  {
    var particle = particleList[i];
    particle.update();
    particle.draw();
	}

  if (timeSpawnElapsed + timeSpawnDelay < timeElapsed)
  {
    timeSpawnElapsed = timeElapsed;
    spawnEnemy();
  }

  if (timeSpawnLetterElapsed + timeSpawnLetterDelay < timeElapsed)
  {
    timeSpawnLetterElapsed = timeElapsed;
    spawnLetter();
  }
}

document.body.onload = init
