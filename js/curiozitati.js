function videoFunction() {
  var x = document.createElement("VIDEO");

  if (x.canPlayType("video/mp4")) {
    x.setAttribute("src","C:/Users/Florin/Desktop/proiect_html/video.mp4");
  } else {
    x.setAttribute("src","movie.ogg");
  }

  x.setAttribute("width", "300");
  x.setAttribute("style","position:absolute;top:180%;left:25%");
  x.setAttribute("controls", "controls");
  document.body.appendChild(x);
}