const mybutton = document.getElementById("secr");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";  
} };

function upfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;  
};