
var Arrow = function ()
{
  this.x = 0;
  this.y = 0;

  this.scale = 10;

  this.direction = { x: 1, y: 0 };
  this.speed = 5;

  this.velocity = 1;
  this.gravity = 1;

  this.offset = { x: 0, y: 0 }

  this.isFired = false;
  this.jauge = 0;

  this.update = function ()
  {
    if (this.isFired)
    {
      this.x += this.direction.x * this.speed * this.jauge * 0.1;
      this.y += this.direction.y * this.speed * this.jauge * 0.1;

      this.direction.x *= 0.999;
      this.direction.y = mix(this.direction.y, 1, 0.01)

      var angle = Math.atan2(this.direction.y, this.direction.x);
      this.direction.x = Math.cos(angle);
      this.direction.y = Math.sin(angle);

    }
  }

  this.draw = function ()
  {
    draw.arrow2(this.x, this.y, this.direction, this.jauge, this.scale)
  }
}
