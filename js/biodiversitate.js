function audioFunction() {
    var x = document.createElement("AUDIO");
  
    if (x.canPlayType("audio/mpeg")) {
      x.setAttribute("src","C:/Users/Florin/Desktop/proiect_html/macaw.mp3");
    } else {
      x.setAttribute("src","horse.ogg");
    }
	x.setAttribute("style","position:absolute;top:540%;left:30%");
    x.setAttribute("controls", "controls");
    document.body.appendChild(x);

}