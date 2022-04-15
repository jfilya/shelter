const btnOpen = document.getElementById('btn-open');
const modal = document.getElementById('menu');
const logo = document.querySelector('.logoMenu');
const overlay = document.getElementById('overlay');
const listContact = document.getElementById('listContact');
const listHelp = document.getElementById('listHelp');


btnOpen.addEventListener('click', () => {
    modal.classList.toggle('activeMenu');   
    btnOpen.classList.toggle('transform');
    overlay.classList.toggle('activeOverlay');
    logo.classList.toggle('activeMenu');
});

const closeModel = () => {
    modal.classList.remove('activeMenu');
    overlay.classList.remove('activeOverlay');
    btnOpen.classList.remove('transform');
    logo.classList.remove('activeMenu');
};

overlay.addEventListener('click', closeModel);
listContact.addEventListener('click', closeModel);
listHelp.addEventListener('click', closeModel);