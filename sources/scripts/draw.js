
var Draw = function ()
{
  this.canvasElement = document.getElementById("container");
  this.context2d = this.canvasElement.getContext("2d");

  this.clear = function ()
  {
    this.context2d.beginPath();
    this.context2d.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }

  this.box = function (x, y, width, height, color)
  {
    this.context2d.fillStyle = color;
    this.context2d.fillRect(x, y, width, height);
  };

  this.arrow2 = function (x, y, direction, length, thickness)
  {
    this.context2d.beginPath();
    this.context2d.fillStyle = "#ff00cc";

    var droite = { x: direction.y, y: -direction.x }
    var x2 = x + direction.x * length;
    var y2 = y + direction.y * length;

    this.context2d.moveTo(x + droite.x * thickness, y + droite.y * thickness);
    this.context2d.lineTo(x2 + droite.x * thickness, y2 + droite.y * thickness);

    this.context2d.lineTo(x2 + droite.x * thickness * 2, y2 + droite.y * thickness * 2);
    this.context2d.lineTo(x2 + direction.x * 30, y2 + direction.y * 30);
    this.context2d.lineTo(x2 - droite.x * thickness * 2, y2 - droite.y * thickness * 2);

    this.context2d.lineTo(x2 - droite.x * thickness, y2 - droite.y * thickness);
    this.context2d.lineTo(x - droite.x * thickness, y - droite.y * thickness);

    this.context2d.fill();
  }

  this.arrow = function (x, y, x2, y2, thickness)
  {
    this.context2d.beginPath();
    this.context2d.fillStyle = "#ff00cc";

    var direction = { x: x2 - x, y: y2 - y }
    var dist = Math.sqrt(direction.x*direction.x+direction.y*direction.y)
    direction.x /= dist;
    direction.y /= dist;
    var droite = { x: direction.y, y: -direction.x }

    this.context2d.moveTo(x + droite.x * thickness, y + droite.y * thickness);
    this.context2d.lineTo(x2 + droite.x * thickness, y2 + droite.y * thickness);

    this.context2d.lineTo(x2 + droite.x * thickness * 2, y2 + droite.y * thickness * 2);
    this.context2d.lineTo(x2 + direction.x * 30, y2 + direction.y * 30);
    this.context2d.lineTo(x2 - droite.x * thickness * 2, y2 - droite.y * thickness * 2);

    this.context2d.lineTo(x2 - droite.x * thickness, y2 - droite.y * thickness);
    this.context2d.lineTo(x - droite.x * thickness, y - droite.y * thickness);

    this.context2d.fill();
  }

  this.text = function (text, x, y, fontSize, color)
  {

    // condition ? valueIfTrue : valueIfFalse
    fontSize = typeof fontSize !== "undefined" ? fontSize : 30;
    color = typeof color !== "undefined" ? color : "#000000";
    
    this.context2d.fillStyle = color;
    this.context2d.font = fontSize + "px Arial";
    this.context2d.textAlign = 'center';
    this.context2d.fillText(text, x, y);
  }

  this.circle = function (x, y, radius, color)
  {
    this.context2d.beginPath();
    this.context2d.fillStyle = color;
    this.context2d.arc(x, y, radius, 0, 2*Math.PI);
    this.context2d.fill();
  };

  this.line = function (x1, y1, x2, y2, color, lineWidth)
  {
    this.context2d.strokeStyle = color;
    this.context2d.beginPath();
    this.context2d.moveTo(x1, y1);
    this.context2d.lineTo(x2, y2);
    this.context2d.stroke();
  };
};
