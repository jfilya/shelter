let slides = document.querySelectorAll('.item');//каждая карточка слайда
let leftButton = document.querySelector('.prev');
let rightButton = document.querySelector('.next');

function cycle(a,am){
  return a>=0?a%am:am-(1+ -(a+1)%am)
}

let shift = 0;
function slideHandler(shiftValue){// shiftValue-сколько карточек будет переключаться, передаем значение в функцию
    slides.forEach((it, i)=>{
      let pos = cycle(shift+shiftValue+i, slides.length);
      it.style = `transform: translate(calc(${(pos)*100}%));`
      //перемещает первые элементы массива в конец, делая его бесконечным
    });
      shift+=shiftValue;  
  }

  let numberSlider;
  rez();

  window.addEventListener("resize", rez);
  
  function rez() {
    if (window.innerWidth >= 1280) {      
      numberSlider = 3; 
    } 
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {  
      numberSlider = 2;
    }
    if (window.innerWidth >= 320 && window.innerWidth < 768) {
      numberSlider = 1; 
    }

}
  leftButton.onclick = ()=>{
    slideHandler(numberSlider)
  }
  rightButton.onclick = ()=>{
    slideHandler(-numberSlider)
  };
  
  
  slideHandler(0);//запускаем функцию, со стартовой нулевой позицией первой картинки при загрузке страницы
