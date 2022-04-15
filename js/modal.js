const modals = document.querySelector('#modal');
const overlays = document.querySelector('.overlay');


const btnKatrine = document.getElementById('btn-Katrine');
const Katrin = document.getElementById('modal-Katrine');
const btnCloseKatrine = document.getElementById('close-Katrine');

const btnJennifer = document.getElementById('btn-Jennifer');
const Jennifer = document.getElementById('modal-Jennifer');
const btnCloseJennifer = document.getElementById('close-Jennifer');

const btnWoody = document.getElementById('btn-Woody');
const Woody = document.getElementById('modal-Woody');
const btnCloseWoody = document.getElementById('close-Woody');

const btnSophia = document.getElementById('btn-Sophia');
const Sophia = document.getElementById('modal-Sophia');
const btnCloseSophia = document.getElementById('close-Sophia');

const btnTimmy = document.getElementById('btn-Timmy');
const Timmy = document.getElementById('modal-Timmy');
const btnCloseTimmy = document.getElementById('close-Timmy');

const btnCharly = document.getElementById('btn-Charly');
const Charly = document.getElementById('modal-Charly');
const btnCloseCharly = document.getElementById('close-Charly');

const btnScarlett = document.getElementById('btn-Scarlett');
const Scarlett = document.getElementById('modal-Scarlett');
const btnCloseScarlett = document.getElementById('close-Scarlett');

const btnFreddie = document.getElementById('btn-Freddie');
const Freddie = document.getElementById('modal-Freddie');
const btnCloseFreddie = document.getElementById('close-Freddie');

btnKatrine.addEventListener('click', () => {
    Katrin.classList.add('modal-pets');
    overlays.classList.add('activeOverlay');
});
btnJennifer.addEventListener('click', () => {
    Jennifer.classList.add('modal-pets');
    overlays.classList.add('activeOverlay');
});
btnWoody.addEventListener('click', () => {
    Woody.classList.add('modal-pets');
    overlays.classList.add('activeOverlay');
});
btnSophia.addEventListener('click', () => {
    Sophia.classList.add('modal-pets');
    overlays.classList.add('activeOverlay');
});
btnTimmy.addEventListener('click', () => {
    Timmy.classList.add('modal-pets');
    overlays.classList.add('activeOverlay');
});
btnCharly.addEventListener('click', () => {
    Charly.classList.add('modal-pets');
    overlays.classList.add('activeOverlay');
});
btnScarlett.addEventListener('click', () => {
    Scarlett.classList.add('modal-pets');
    overlays.classList.add('activeOverlay');
});
btnFreddie.addEventListener('click', () => {
    Freddie.classList.add('modal-pets');
    overlays.classList.add('activeOverlay');
});



const openModels = () => {
    modals.classList.add('activeModal');
};

const closeModels = () => {
    modals.classList.remove('activeModal');
    Katrin.classList.remove('modal-pets');
    Jennifer.classList.remove('modal-pets');
    Woody.classList.remove('modal-pets');
    Sophia.classList.remove('modal-pets');
    Timmy.classList.remove('modal-pets');
    Charly.classList.remove('modal-pets');
    Scarlett.classList.remove('modal-pets');
    Freddie.classList.remove('modal-pets');
    overlays.classList.remove('activeOverlay');
};


btnKatrine.addEventListener('click', openModels);
btnJennifer.addEventListener('click', openModels);
btnWoody.addEventListener('click', openModels);
btnSophia.addEventListener('click', openModels);
btnCharly.addEventListener('click', openModels);
btnTimmy.addEventListener('click', openModels);
btnScarlett.addEventListener('click', openModels);
btnFreddie.addEventListener('click', openModels);




overlays.addEventListener('click', closeModels);
btnCloseKatrine.addEventListener('click', closeModels);
btnCloseJennifer.addEventListener('click', closeModels);
btnCloseWoody.addEventListener('click', closeModels);
btnCloseSophia.addEventListener('click', closeModels);
btnCloseCharly.addEventListener('click', closeModels);
btnCloseTimmy.addEventListener('click', closeModels);
btnCloseScarlett.addEventListener('click', closeModels);
btnCloseFreddie.addEventListener('click', closeModels);
