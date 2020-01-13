var notes = ["1", "2", "3", "4","5","6","7","8","9","10"];
document.getElementById("demo").innerHTML = notes;



function myFunction() {
  notes.push("+1");
  document.getElementById("demo").innerHTML = notes;
}


document.getElementById("demo1").innerHTML = notes;

function myFunction1() {
  notes.pop();
  document.getElementById("demo1").innerHTML = notes;
}

var slider = document.getElementById("myRange");
var output = document.getElementById("range");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function myFunction2() {
  setTimeout(function(){ alert("Va multumim ca ne-ati apreciat munca."); }, 2000);
}

 var nIntervId;
 
    function changeColor() {
      nIntervId = setInterval(flashText, 1000);
    }
 
    function flashText() {
      var oElem = document.getElementById('my_box');
      oElem.style.color = oElem.style.color == 'red' ? 'blue' : 'red';
      // oElem.style.color == 'red' ? 'blue' : 'red' is a ternary operator.
    }
 
    function stopTextColor() {
      clearInterval(nIntervId);
    }
