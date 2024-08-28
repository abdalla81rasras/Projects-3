setInterval(setClock , 1000);

const Hour = document.querySelector("[data-hour]");
const Minute = document.querySelector("[data-minute]");
const Second = document.querySelector("[data-second]");

setClock();

function setClock(){
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60 ;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60 ;
    const hourRetio = (minutesRatio + currentDate.getHours()) / 12;
    setRotateRatio(Hour , hourRetio);
    setRotateRatio(Minute , minutesRatio);
    setRotateRatio(Second , secondsRatio);
}

function setRotateRatio(element , rotatrRatio){
    element.style.setProperty("--transform-rotation" , rotatrRatio * 360);
}