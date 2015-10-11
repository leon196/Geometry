
var Button = function ()
{
  this.x = 0;
  this.y = 0;
  this.width = 100;
  this.height = 50;
  this.pivot = { x: 0.5, y: 0.5 }
  this.text = "Button";
  this.callback = function () {};

  this.GetLeft = function () { return this.x - this.pivot.x * this.width; }
  this.GetRight = function () { return this.x + this.pivot.x * this.width; }
  this.GetTop = function () { return this.y - this.pivot.y * this.height; }
  this.GetBottom = function () { return this.y + this.pivot.y * this.height; }

  this.hitTestCollision = function (x, y)
  {
  	return x > this.GetLeft() && x < this.GetRight() && y > this.GetTop() && y < this.GetBottom()
  }

  this.draw = function ()
  {
		var color = "#000000";
    if (this.hitTestCollision(mouse.x, mouse.y))
    {
      color = "#ff0000";
      document.body.style.cursor = "pointer"
      if (mouseDown)
      {
        this.callback();
      }
    }
    else
    {
      document.body.style.cursor = "default"
    }
		draw.text("Play", this.x, this.y, 46, color)
  }
}
