/*jshint browser: true, devel: true*/

document.addEventListener("DOMContentLoaded", function() {
  document.getElementsByClassName('hour')[0].style.transform = 
    ("rotate(" + new Date().getHours() * 30 + "deg)");
  document.getElementsByClassName('minute')[0].style.transform = 
    ("rotate(" + new Date().getMinutes() * 6 + "deg)");
  document.getElementsByClassName('second')[0].style.transform = 
    ("rotate(" + new Date().getSeconds() * 6 + "deg)");
});