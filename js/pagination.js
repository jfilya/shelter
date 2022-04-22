let p1 = pets.slice(0,4);
let p2 = pets.slice(4);

let petsPagination  = [];
function mixarr(arr){
  return arr.map(i=>[Math.random(), i]).sort().map(i=>i[1])
}
petsPagination.push(...mixarr(p1), ...mixarr(p2), ...mixarr(p1), ...mixarr(p2), ...mixarr(p1), ...mixarr(p2), ...mixarr(p1),...mixarr(p2), ...mixarr(p1), ...mixarr(p2), ...mixarr(p1), ...mixarr(p2))




  let btnPrev= document.querySelector('#arrowPrev');
  let btnUp = document.querySelector('#arrowUp')
  let btnNext = document.querySelector('#arrowNext');
  let btnDown = document.querySelector('#arrowDown');
        

let tablePagination = document.querySelector('#table');
let pagination = document.querySelector('#pagination');
let notesOnPage;

go();

window.addEventListener("resize", go);

function go() { 
    let items = document.querySelectorAll('#pagination li')
    let i=0;
    let maxI;
    btnPrev.classList.add('disableBtn');
    btnDown.classList.add('disableBtn'); 
    btnNext.classList.remove('disableBtn');
    btnUp.classList.remove('disableBtn');
 
    function activeNumber(){
        if(i >= maxI){
            i= maxI;
            btnNext.classList.add('disableBtn');
            btnUp.classList.add('disableBtn');
        } 
        if(i<maxI){
            btnNext.classList.remove('disableBtn');
            btnUp.classList.remove('disableBtn');
        } 
        if(i>0){
            btnPrev.classList.remove('disableBtn');
            btnDown.classList.remove('disableBtn');
        }
    }

    btnNext.addEventListener('click', function(){  
        i++;
        activeNumber(); 
        showPage(items[i]); 
    })
    btnPrev.addEventListener('click', function(){   
        i--; 
        if(i<=0){
        i=0;
        btnPrev.classList.add('disableBtn');
        btnDown.classList.add('disableBtn');
    }
    activeNumber();  
    showPage(items[i]);   
    })
    btnDown.addEventListener('click', function(){ 
      i=0; 
        showPage(items[i]);  
        btnNext.classList.remove('disableBtn');
        btnUp.classList.remove('disableBtn');
        btnPrev.classList.add('disableBtn');
        btnDown.classList.add('disableBtn');    
    })  
    btnUp.addEventListener('click', function(){
      i=maxI;
        showPage(items[i]); 
        btnNext.classList.add('disableBtn');
        btnUp.classList.add('disableBtn');
        btnPrev.classList.remove('disableBtn');
        btnDown.classList.remove('disableBtn');
    }) 

    
  if (window.innerWidth >= 1280) {      
     notesOnPage = 8; 
  } 
  if (window.innerWidth >= 768 && window.innerWidth < 1280) {  
    notesOnPage = 6;
  }
   if (window.innerWidth >= 320 && window.innerWidth < 768) {
    notesOnPage = 3;
  }
  maxI= Math.floor((petsPagination.length-1) / notesOnPage);

showPage(items[0]);   
}

function showPage(item) {
    let active = document.querySelector('#pagination li.activeNum');//ищем активную ли  
    if(active){
     active.classList.remove('activeNum');   
    }
    item.classList.add('activeNum');//активная кнопка
    let pageNum = +item.innerHTML;
    let start = (pageNum -1) * notesOnPage ;
    let end = start + notesOnPage;
    let notesing = petsPagination.slice(start, end);

    const modals = document.querySelector('.modal');
    const overlays = document.querySelector('.overlay');

    tablePagination.innerHTML='';
    for (let note of notesing) {
      let tr = document.createElement('div');
      table.appendChild(tr);
      tr.className = `pets__pet petsPets__card  btn-${note.name}`
      tr.addEventListener('click', () => {
        overlays.classList.add('activeOverlay');
        modals.classList.add('activeModal');
        document.querySelector(`.modal-${note.name}`).classList.add('modal-pets');
        document.querySelector('body').classList.add('scroll');
      });
      
      const closeModels = () => {
        overlays.classList.remove('activeOverlay');
        document.querySelector(`.modal-${note.name}`).classList.remove('modal-pets');
        document.querySelector('body').classList.remove('scroll');
      };
      overlays.addEventListener('click', closeModels);


      let img = document.createElement('img');
      img.src= note.img;
      tr.appendChild(img);
      img.className = "pets__pet__image"

      let h = document.createElement('h5');   
      h.innerHTML= note.name;
      tr.appendChild(h);
      h.className = "pets__pet__title";

      let btn = document.createElement('div');   
      btn.innerHTML= 'Learn more';
      tr.appendChild(btn);
      btn.className = `btn btnLearn`;  

        
    }    
}

