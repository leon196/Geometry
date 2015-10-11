
var Letter = function ()
{
  this.x = 0;
  this.y = 0;

  this.timeStart = timeElapsed;
  this.timeDelay = 10;

  this.alphabet = ['a', 'b', 'c']
  this.getRandomLetter = function ()
  {
    return this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
  }

  this.character = this.getRandomLetter();

  this.draw = function ()
  {
    draw.text(this.character, this.x, this.y)
  }

  this.update = function ()
  {
    var ratio = (timeElapsed - this.timeStart) / this.timeDelay;

    var xWave = ratio * canvasElement.width;
    var yWave = 0.5 * canvasElement.height * (Math.sin(ratio * 10.0) * 0.5 + 0.5);

    var angle = ratio * Math.PI * 2;

    var xCircle = canvasElement.width / 2 + Math.cos(angle) * 100;
    var yCircle = canvasElement.height / 2 + Math.sin(angle) * 100;

    var t = Math.sin(timeElapsed) * 2;
    t = Math.max(0, Math.min(1, t));

    this.x = mix(xWave, xCircle, t);
    this.y = mix(yWave, yCircle, t);
  }
}
