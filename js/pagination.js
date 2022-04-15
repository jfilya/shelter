// const arrowPrev = document.getElementById("arrowPrev");
// const arrowDown = document.getElementById("arrowDown");
// const arrowNext = document.getElementById("arrowNext");
// const arrowUp = document.getElementById("arrowUp");
// const num = document.getElementById("num");
// const pets = document.querySelector(".petsPets");

// let maxNum;
// go();
// window.addEventListener("resize", go);

// function go() {
//   if (window.innerWidth >= 1280) {
//     maxNum = 6;
//   } else if (window.innerWidth >= 768) {
//     maxNum = 8;
//   } else if (window.innerWidth >= 320) {
//     maxNum = 16;
//   }

//   arrowNext.addEventListener("click", () => {
//     num.innerHTML++;
//     if (num.innerHTML == 1) {
//       arrowPrev.classList.add("disableBtn");
//       arrowDown.classList.add("disableBtn");
//     } if (num.innerHTML != 1) {
//       arrowPrev.classList.remove("disableBtn");
//       arrowDown.classList.remove("disableBtn");
//     } if (num.innerHTML == maxNum) {
//       arrowNext.classList.add("disableBtn");
//       arrowUp.classList.add("disableBtn");
//     } if (num.innerHTML > maxNum) {
//       num.innerHTML = maxNum;
//     }
    
//   });
//   arrowPrev.addEventListener("click", () => {
//     num.innerHTML--;
//     if (num.innerHTML == 1) {
//       arrowPrev.classList.add("disableBtn");
//       arrowDown.classList.add("disableBtn");
//     }  if (num.innerHTML > 1) {
//       arrowPrev.classList.remove("disableBtn");
//       arrowDown.classList.remove("disableBtn");
//     }  if (num.innerHTML < 1) {
//       num.innerHTML = 1;
//     } if (num.innerHTML < maxNum) {
//       arrowNext.classList.remove("disableBtn");
//       arrowUp.classList.remove("disableBtn");
//     }
//   });
//   arrowDown.addEventListener("click", () => {
//     num.innerHTML = 1;
//     if (num.innerHTML == 1) {
//       arrowPrev.classList.add("disableBtn");
//       arrowDown.classList.add("disableBtn");
//       arrowNext.classList.remove("disableBtn");
//       arrowUp.classList.remove("disableBtn");
//     }
//   });
//   arrowUp.addEventListener("click", () => {
//     num.innerHTML = maxNum;
//     if (num.innerHTML > 1) {
//       arrowPrev.classList.remove("disableBtn");
//       arrowDown.classList.remove("disableBtn");
//     }
//      if (num.innerHTML == maxNum) {
//       arrowNext.classList.add("disableBtn");
//       arrowUp.classList.add("disableBtn");
//     }
//   });
// }
