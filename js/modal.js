const modals = document.querySelector('.modal');
const overlays = document.querySelector('.overlay');

let modalWindow = document.querySelector('.modal');
let modaling = pets.slice();
for (let mod of modaling) {
  let block = document.createElement('div');
  modalWindow.appendChild(block);
  block.className =`modal-${mod.name}`

  let btnClose = document.createElement('button')
  block.appendChild(btnClose);


  btnClose.className=`closeModalBtn close-${mod.name}`
  let imgClose = document.createElement('img')
  imgClose.src = "img/CloseModal.svg"
  imgClose.alt="close"
  btnClose.appendChild(imgClose);
  btnClose.addEventListener('click', () => {
    overlays.classList.remove('activeOverlay');
    modals.classList.remove('activeModal');
    block.classList.remove('modal-pets');
    document.querySelector('body').classList.remove('scroll');
  })
  overlays.addEventListener("mouseover", () =>  {
    btnClose.style.background = "#fddcc4";
    btnClose.style.border = "2px solid #fddcc4";
  })
  overlays.addEventListener("mouseout", () =>  {
    btnClose.style.background = "transparent";
    btnClose.style.border = "2px solid #fddcc4";
  })
  btnClose.addEventListener("mouseover", () =>  {
    btnClose.style.background = "#fddcc4";
    btnClose.style.border = "2px solid #fddcc4";
  })
  btnClose.addEventListener("mouseout", () =>  {
    btnClose.style.background = "transparent";
    btnClose.style.border = "2px solid #fddcc4";
  })

  let imgModal = document.createElement('img')
  imgModal.src = mod.img;
  block.appendChild(imgModal);
  imgModal.alt=`pets-${mod.name}`
  imgModal.className="imgPets"

  let content = document.createElement('div');
  block.appendChild(content);
  content.className="content"

  let hName = document.createElement('h3');
  hName.innerHTML = mod.name  
  hName.className = "content__title"
  content.appendChild(hName)

  let hPet = document.createElement('h5');
  hPet.innerHTML =` ${mod.type} - ${mod.breed}`

  hPet.className = "content__titleMini"
  content.appendChild(hPet)

  let text = document.createElement('p');
  text.className = "content__info"
  text.innerHTML = mod.description
  content.appendChild(text)

  let contentList = document.createElement('ul');
  contentList.className = "content__list"
  content.appendChild(contentList)

  let contentListItem1 = document.createElement('li');  
  contentListItem1.innerHTML = `Age: ` 
  let itemList1 =  document.createElement('span') 
  itemList1.innerHTML = mod.age 
  contentListItem1.appendChild(itemList1)     
  contentList.appendChild(contentListItem1)


  let contentListItem2 = document.createElement('li');    
  contentListItem2.innerHTML = "Inoculations: "
  let itemList2 =  document.createElement('span') 
  itemList2.innerHTML = mod.inoculations 
  contentListItem2.appendChild(itemList2) 
  contentList.appendChild(contentListItem2)

  let contentListItem3 = document.createElement('li');    
  contentListItem3.innerHTML = "Diseases: "
  let itemList3 =  document.createElement('span') 
  itemList3.innerHTML = mod.diseases 
  contentListItem3.appendChild(itemList3)
  contentList.appendChild(contentListItem3)

  let contentListItem4 = document.createElement('li');    
  contentListItem4.innerHTML = "Parasites: "
  let itemList4 =  document.createElement('span') 
  itemList4.innerHTML = mod.parasites 
  contentListItem4.appendChild(itemList4)
  contentList.appendChild(contentListItem4)
 
}

