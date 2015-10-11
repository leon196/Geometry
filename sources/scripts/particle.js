
var Particle = function (x, y)
{
  this.x = x;
  this.y = y;
  this.radius = 10 + Math.random() * 10;

  var angleRandom = Math.PI / 3 + Math.random() * Math.PI / 3;

  this.direction = { x: Math.cos(angleRandom), y: Math.sin(angleRandom) };
  this.speed = 5 + Math.random() * 5;
  this.velocity = -10 - Math.random() * 10;
  this.gravity = 1 + Math.random();

  this.lifeTimeStarted = timeElapsed;
  this.lifeTimeElapsed = 0;
  this.lifeTimeDelay = 1 + Math.random() * 2;
  this.lifeTimeRatio = 0;

  this.update = function ()
  {
    this.lifeTimeElapsed = timeElapsed - this.lifeTimeStarted;

    this.lifeTimeRatio = this.lifeTimeElapsed / this.lifeTimeDelay;
    this.lifeTimeRatio = Math.max(0, Math.min(1, this.lifeTimeRatio));

    this.x += this.direction.x * this.speed;

    this.y += this.velocity;
    this.velocity += this.gravity;
  }

  this.draw = function ()
  {
    var s = Math.sin(this.lifeTimeRatio * Math.PI);
    draw.circle(this.x, this.y, this.radius * s, "#0cfc0c")
  }
}
