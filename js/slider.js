let base = document.querySelector('#base');
// let notes = pets.slice();

const modalsMain = document.querySelector('.modal');
const overlaysMain = document.querySelector('.overlay');


let notes1 = pets.slice(0,4);
let notes2 = pets.slice(4);

let notes  = [];
function mix(arr){
  return arr.map(i=>[Math.random(), i]).sort().map(i=>i[1])
}
notes.push(...pets, ...mix(notes1), ...mix(notes2), ...mix(notes1), ...mix(notes2), ...mix(notes1),...mix(notes2), ...mix(notes1))


for (let note of notes) {
  let item = document.createElement('div');
  base.appendChild(item);
  item.className = "item"
  
  let tr = document.createElement('div');
  item.appendChild(tr);
  tr.className = `pets__pet pets__item btn-${note.name}`
  tr.addEventListener('click', () => {
    overlaysMain.classList.add('activeOverlay');
    modalsMain.classList.add('activeModal');
    document.querySelector(`.modal-${note.name}`).classList.add('modal-pets');
    document.querySelector('body').classList.add('scroll');
  });

  const closeModels = () => {
    overlaysMain.classList.remove('activeOverlay');
    document.querySelector(`.modal-${note.name}`).classList.remove('modal-pets');
    document.querySelector('body').classList.remove('scroll');
  };
  overlaysMain.addEventListener('click', closeModels);

  let img = document.createElement('img');
  img.src= note.img;
  img.alt = `pets-${note.name}`
  tr.appendChild(img);
  img.className = "pets__pet__image"

  let h = document.createElement('h5');   
  h.innerHTML= note.name;
  tr.appendChild(h);
  h.className = "pets__pet__title";

  let btn = document.createElement('div');   
  btn.innerHTML= 'Learn more';
  tr.appendChild(btn);
  btn.className = "btn btnLearn pets__pet__btn ";
  

}


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
