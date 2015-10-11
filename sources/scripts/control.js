
var mouse = { x: 0, y: 0 };
var mouseDown = false;

var keyLeft = false;
var keyRight = false;
var keyUp = false;
var keyDown = false;

function onMouseDown (event)
{
  mouseDown = true;
}

function onMouseUp (event)
{
  mouseDown = false;
}

function onMouseMove (event)
{
  mouse.x = event.clientX;
  mouse.y = event.clientY;
}

function onKeyDown (event)
{
  switch (event.keyCode) {
    // A
    case 65: keyLeft = true; break;
    // D
    case 68: keyRight = true; break;
    // W
    case 87: keyUp = true; break;
    // S
    case 83: keyDown = true; break;
  }
}

function onKeyUp (event)
{
  console.log(String.fromCharCode(event.keyCode) + ' : ' + event.keyCode);
  switch (event.keyCode) {
    // A
    case 65: keyLeft = false; break;
    // D
    case 68: keyRight = false; break;
    // W
    case 87: keyUp = false; break;
    // S
    case 83: keyDown = false; break;
  }
}
