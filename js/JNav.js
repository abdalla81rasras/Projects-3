const Toggle = document.querySelector(".toggle");
const links=document.querySelector(".links");

Toggle.addEventListener("click" , function(){
    links.classList.toggle("show-links");
});