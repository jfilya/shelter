let slides = document.querySelectorAll('.item');

let leftButton = document.querySelector('.prev');
let rightButton = document.querySelector('.next');

let shift = 0;
let move = 0;

function cycleArr(a,am){
  return a>=0?am[a%am.length]:am[am.length-(1+ -(a+1)%(am.length))]
}

function cycle(a,am){
  return a>=0?a%am:am-(1+ -(a+1)%am)
}

let sliderContainer = document.querySelector('.base');

let isDrag = false;
let startX = 0;



function slideHandler(shiftValue, animate, unfixed){
    slideShift = unfixed?shiftValue:Math.round(shiftValue);
    slides.forEach((it, i)=>{
      let pos = cycle(shift+slideShift+i+1, slides.length);
      let duration = Math.abs(it.pos-pos)>1? 0 :400;
      it.style = `
  
        // transition-duration: ${animate?duration:0}ms; 
        transform: translate(calc(${(pos-1)*100}% - ${0}px));
        `
      it.pos = pos;
    });
    if (!unfixed){
      shift+=slideShift;
    }
  }

  let i=0;
  rez();

  window.addEventListener("resize", rez);
  
  function rez() {
    if (window.innerWidth >= 1280) {      
        i = 3; 
    } 
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {  
        i = 2;
    }
    if (window.innerWidth >= 320 && window.innerWidth < 768) {
        i = 1; 
    }

}
  leftButton.onclick = ()=>{slideHandler(i, true)}
  rightButton.onclick = ()=>{slideHandler(-i, true)};

  
  slideHandler(0, false, true);
  sync(()=>{slideHandler(0, true, true)});
  
  function sync(callback){
    requestAnimationFrame(()=>requestAnimationFrame(()=>callback()));
  }