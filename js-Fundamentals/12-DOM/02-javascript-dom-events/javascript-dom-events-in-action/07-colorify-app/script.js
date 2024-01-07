const getCircleId = document.getElementById("circleId");
const getBlackBtn = document.getElementById("blackBtn");
const getRedBtn = document.getElementById("redBtn");
const getGreenBtn = document.getElementById("greenBtn");

const paintCircle = (color) => {
  getCircleId.style.backgroundColor = color;
};

getBlackBtn.addEventListener("click", () => {
    paintCircle('black');
  });
  
  getRedBtn.addEventListener("click", () => {
    paintCircle('red');
  });
  
  getGreenBtn.addEventListener("click", () => {
    paintCircle('green');
  });