let base = document.querySelector("#base");
const modalsMain = document.querySelector(".modal");
const overlaysMain = document.querySelector(".overlay");
let leftButton = document.querySelector(".prev");
let rightButton = document.querySelector(".next");

const mix = (arr) => {
  return arr
    .map((i) => [Math.random(), i])
    .sort()
    .map((i) => i[1]);
}
rez();

window.addEventListener("resize", rez);

function rez() {
  if (window.innerWidth >= 1280) {
    notesOnItem = 3;
  }
  if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    notesOnItem = 2;
  }
  if (window.innerWidth >= 320 && window.innerWidth < 768) {
    notesOnItem = 1;
  }

  leftButton.onclick = () => {
    base.classList.add("transition-left");
    notesSlider = notesSlider.concat(...notes);
    notes = notesSlider.splice(0, notesOnItem);
    notesSlider = mix(notesSlider);
    showItem(notes);
  };
  rightButton.onclick = () => {
    base.classList.add("transition-right");
    notesSlider = notesSlider.concat(...notes);
    notes = notesSlider.splice(0, notesOnItem);
    notesSlider = mix(notesSlider);
    showItem(notes);
    
  };
  base.addEventListener("animationend", () => {
      base.classList.remove("transition-left");
      base.classList.remove("transition-right");
  })

  let notesSlider = [];
  notesSlider.push(...mix(pets));
  let notes = notesSlider.splice(0, notesOnItem);
  const showItem = () => {
    base.innerHTML = "";
    for (let note of notes) {
      let item = document.createElement("div");

      base.append(item);
      item.className = "item";

      let tr = document.createElement("div");
      item.append(tr);
      tr.className = `pets__pet pets__item btn-${note.name}`;
      tr.addEventListener("click", () => {
        overlaysMain.classList.add("activeOverlay");
        modalsMain.classList.add("activeModal");
        document
          .querySelector(`.modal-${note.name}`)
          .classList.add("modal-pets");
        document.querySelector("body").classList.add("scroll");

      });

      const closeModels = () => {
        overlaysMain.classList.remove("activeOverlay");
        document
          .querySelector(`.modal-${note.name}`)
          .classList.remove("modal-pets");
        document.querySelector("body").classList.remove("scroll");
      };
      overlaysMain.addEventListener("click", closeModels);

      let img = document.createElement("img");
      img.src = note.img;
      img.alt = `pets-${note.name}`;
      tr.append(img);
      img.className = "pets__pet__image";

      let h = document.createElement("h5");
      h.innerHTML = note.name;
      tr.append(h);
      h.className = "pets__pet__title";

      let btn = document.createElement("div");
      btn.innerHTML = "Learn more";
      tr.append(btn);
      btn.className = "btn btnLearn pets__pet__btn ";
    }
  }

  showItem(0);
}
