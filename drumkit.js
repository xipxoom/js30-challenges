/*jshint browser: true*/
document.addEventListener("DOMContentLoaded", function(event) {
  var soundArray = ["clap", "hihat", "kick", "openhat", "boom",
                    "ride", "snare", "tom", "tink"];
  function setAudioClick(audio) {
    document.getElementById(audio).onclick = function(event) {
      new Audio("sounds/" + audio + ".wav").play();
    };
  }
  for (var i=0; i<soundArray.length; i++) {
    setAudioClick(soundArray[i]);
  }
  
  document.addEventListener("keypress", function(event){
    if (event.key === "a" || event.key === "A") {
      new Audio("sounds/clap.wav").play();
    } else if (event.key === "s" || event.key === "S") {
      new Audio("sounds/hihat.wav").play();
    } else if (event.key === "d" || event.key === "D") {
      new Audio("sounds/kick.wav").play();
    } else if (event.key === "f" || event.key === "F") {
      new Audio("sounds/openhat.wav").play();
    } else if (event.key === "g" || event.key === "G") {
      new Audio("sounds/boom.wav").play();
    } else if (event.key === "h" || event.key === "H") {
      new Audio("sounds/ride.wav").play();
    } else if (event.key === "j" || event.key === "J") {
      new Audio("sounds/snare.wav").play();
    } else if (event.key === "k" || event.key === "K") {
      new Audio("sounds/tom.wav").play();
    } else if (event.key === "l" || event.key === "L") {
      new Audio("sounds/tink.wav").play();
    }
  }, false);
});