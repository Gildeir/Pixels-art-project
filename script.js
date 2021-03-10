console.log('l');
function changeColor() {
  const pixel = event.target;
  for (let checker = 0; checker < document.getElementsByClassName('color').length; checker += 1) {
    for (let searcher = 0; searcher < document.getElementsByClassName('color').length; searcher += 1) {
      if ((document.getElementsByClassName('color')[checker].classList[searcher] === 'select')) pixel.style.backgroundColor = document.getElementsByClassName('color')[checker].classList[searcher];
    }
  }
}//changeColor()

function createPixelBoard() {
  const numbersRows = 5;
  for (let indexL = 0; indexL < numbersRows; indexL += 1) {
    const newRow = document.createElement('div');
    newRow.className = 'row';
    document.getElementById('pixel-board').appendChild(newRow);
    for (let indexR = 0; indexR < numbersRows; indexR += 1) {
      const newDiv = document.createElement('div');
      newDiv.className = 'pixel';
      //pixel.addEventListener('click', changeColor);
      document.getElementsByClassName('row')[indexL].appendChild(newDiv);
    }
  }
} createPixelBoard();

const setPixel = document.querySelector('.pixel');
function setBlackColor() {
  setPixel.style.backgroundColor = 'black';
}
setPixel.addEventListener('click', setBlackColor);
