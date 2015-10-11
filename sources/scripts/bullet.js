
var Bullet = function ()
{
  this.x = 0;
  this.y = 0;

  this.size = 30;

  this.direction = { x: 1, y: 0 };
  this.speed = 5;

  this.velocity = -10;
  this.gravity = 1;

  this.lifeTimeStarted = timeElapsed;
  this.lifeTimeElapsed = 0;
  this.lifeTimeDelay = 3;
  this.lifeTimeRatio = 0;

  this.falling = false;

  this.update = function ()
  {
    this.lifeTimeElapsed = timeElapsed - this.lifeTimeStarted;

    this.lifeTimeRatio = this.lifeTimeElapsed / this.lifeTimeDelay;
    this.lifeTimeRatio = Math.max(0, Math.min(1, this.lifeTimeRatio));

    if (this.falling == false)
    {
      this.x += this.direction.x * this.speed;
      this.y += this.direction.y * this.speed;

      if (this.x < 0 || this.x > canvasElement.width)
      {
        this.direction.x *= -1;
      }
      if (this.y < 0 || this.y > canvasElement.height)
      {
        this.direction.y *= -1;
      }
    }
    else
    {
      this.x += this.direction.x * this.speed;
      this.y += this.velocity;
      this.velocity += this.gravity;
    }
  }

  this.draw = function ()
  {
    draw.circle(this.x, this.y, this.size * Math.sin(this.lifeTimeRatio * Math.PI), "#ff44cd");
  }
}
