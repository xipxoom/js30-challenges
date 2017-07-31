/*jshint browser: true*/

document.addEventListener("DOMContentLoaded", function(event) {
  var soundArray = ["clap", "hihat", "kick", "openhat", "boom",
                    "ride", "snare", "tom", "tink"];
  

  function setAudioClick(audio) {
    var ele = document.getElementById(audio);
    ele.onclick = function(event) {
      animateButton(ele);
      playWav(audio);
    };
  }
  
  function playWav(audio) {
    new Audio("sounds/" + audio + ".wav").play();
  }
  
  function animateButton(ele) {
    ele.classList.toggle("play");
    setTimeout(function(){
      ele.classList.toggle("play");
    }, 200);
  }
  
  // Setup all our on-clicks
  for (var i=0; i<soundArray.length; i++) {
    setAudioClick(soundArray[i]);
  }
  
  document.addEventListener("keypress", function(event){
    if (event.key === "a" || event.key === "A") {
      animateButton(document.getElementById("clap"));
      playWav("clap");
    } else if (event.key === "s" || event.key === "S") {
      animateButton(document.getElementById("hihat"));
      playWav("hihat");
    } else if (event.key === "d" || event.key === "D") {
      animateButton(document.getElementById("kick"));
      playWav("kick");
    } else if (event.key === "f" || event.key === "F") {
      animateButton(document.getElementById("openhat"));
      playWav("openhat");
    } else if (event.key === "g" || event.key === "G") {
      animateButton(document.getElementById("boom"));
      playWav("boom");
    } else if (event.key === "h" || event.key === "H") {
      animateButton(document.getElementById("ride"));
      playWav("ride");
    } else if (event.key === "j" || event.key === "J") {
      animateButton(document.getElementById("snare"));
      playWav("snare");
    } else if (event.key === "k" || event.key === "K") {
      animateButton(document.getElementById("tom"));
      playWav("tom");
    } else if (event.key === "l" || event.key === "L") {
      animateButton(document.getElementById("tink"));
      playWav("tink");
    }
  }, false);
});