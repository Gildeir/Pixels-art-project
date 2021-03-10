console.log('l');

function createPixelBoard() {
  const numbersRows = 5;
  for (let indexL = 0; indexL < numbersRows; indexL += 1) {
    const newRow = document.createElement('div');
    newRow.className = 'row';
    document.getElementById('pixel-board').appendChild(newRow);
    for (let indexR = 0; indexR < numbersRows; indexR += 1) {
      const newDiv = document.createElement('div');
      newDiv.className = 'pixel';
      document.getElementsByClassName('row')[indexL].appendChild(newDiv);
    }
  }
} createPixelBoard();

const arrPixel = document.querySelectorAll('.pixel');
const setColor = ['black', 'red', 'green', 'blue'];
for (let index = 0; index < document.querySelectorAll('.pixel').length; index += 1) {
  document.querySelectorAll('.pixel').style.backgroundColor[index] = setColor[index];
}
setColor[0].classList.add('selected');
sessionStorage.setItem('setColor',setColor[0].style.backgroundColor);
