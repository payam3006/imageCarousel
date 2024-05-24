const q = console.log;

const imgContainer = document.getElementById("imgContainer");
const main = document.getElementById("main");
let width;
let imgNum = 1;

window.addEventListener("load", () => {
  width = main.getBoundingClientRect().width;
});
window.addEventListener("resize", () => {
  width = main.getBoundingClientRect().width;
  imgContainer.style = `left: -${(imgNum - 1) * width}px;`;
});

const next = () => {
  imgNum += 1;
  if (imgNum <= 5) {
    imgContainer.style = `left: -${(imgNum - 1) * width}px;`;
  } else {
    imgNum = 1;
    imgContainer.style = `left: 0;`;
  }
};

const previous = () => {
  imgNum -= 1;
  if (imgNum >= 1) {
    imgContainer.style = `left: -${(imgNum - 1) * width}px;`;
  } else {
    imgNum = 5;
    imgContainer.style = `left: -${(imgNum - 1) * width}px;`;
  }
};

setInterval(() => {
  next();
}, 3000);
