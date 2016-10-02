var title = document.getElementById("title");

function moveTest(e){
  var x = e.clientX;
  var y = e.clientY;

  title.style["font-size"] =
    x/100 + "em";
  title.style["letter-spacing"] =
    y/300 + "em";
  title.style["color"] =
    "blue";
}
function fade(e){
  title.style["color"] =
    "#d3d3d3";
}
