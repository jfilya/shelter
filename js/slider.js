let base = document.querySelector("#base");
const modalsMain = document.querySelector(".modal");
const overlaysMain = document.querySelector(".overlay");
let leftButton = document.querySelector(".prev");
let rightButton = document.querySelector(".next");

function mix(arr) {
  return arr
    .map((i) => [Math.random(), i])
    .sort()
    .map((i) => i[1]);
}

let notesSlider=[];
notesSlider.push(...mix(pets))
let notes = notesSlider.splice(0,3);
function showItem() {

  base.innerHTML = "";
  for (let note of notes) {
    let item = document.createElement("div");

    base.appendChild(item);
    item.className = "item";

    let tr = document.createElement("div");
    item.appendChild(tr);
    tr.className = `pets__pet pets__item btn-${note.name}`;
    tr.addEventListener("click", () => {
      overlaysMain.classList.add("activeOverlay");
      modalsMain.classList.add("activeModal");
      document.querySelector(`.modal-${note.name}`).classList.add("modal-pets");
    });

    const closeModels = () => {
      overlaysMain.classList.remove("activeOverlay");
      document
        .querySelector(`.modal-${note.name}`)
        .classList.remove("modal-pets");
    };
    overlaysMain.addEventListener("click", closeModels);

    let img = document.createElement("img");
    img.src = note.img;
    img.alt = `pets-${note.name}`;
    tr.appendChild(img);
    img.className = "pets__pet__image";

    let h = document.createElement("h5");
    h.innerHTML = note.name;
    tr.appendChild(h);
    h.className = "pets__pet__title";

    let btn = document.createElement("div");
    btn.innerHTML = "Learn more";
    tr.appendChild(btn);
    btn.className = "btn btnLearn pets__pet__btn ";
  }
}

leftButton.onclick = () => {
  notesSlider = notesSlider.concat(...notes)
  notes = notesSlider.splice(0,3);
  notesSlider=mix(notesSlider)
  showItem(notes);
};
rightButton.onclick = () => {
  notesSlider = notesSlider.concat(...notes)
  notes = notesSlider.splice(0,3);
  notesSlider=mix(notesSlider)
  showItem(notes);
};

showItem(0);
