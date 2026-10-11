const bannersEls = document.querySelectorAll(".banner");

let currentIndex = 0;

setInterval(()=>{
    bannersEls[currentIndex].classList.toggle("active");
    currentIndex++
    if(currentIndex===bannersEls.length){
        currentIndex=0
    }
    bannersEls[currentIndex].classList.toggle("active")
 },5000)