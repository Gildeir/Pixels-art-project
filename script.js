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
for (let index = 0; index < setColor.length; index += 1) {
  arrPixel[index].style.backgroundColor[index] = setColor[index];
}
setColor[0].classList.add('selected');
sessionStorage.setItem('setColor', setColor[0].style.backgroundColor);
for (let indexB = 0; indexB < setColor.length; indexB += 1) {
  document.querySelectorAll('.color')[indexB].addEventListener('click', () => {
    document.querySelector('.selected').classList.remove('selected');
    document.querySelectorAll('.color')[indexB].classList.add('selected');
    sessionStorage.setItem('color', document.querySelectorAll('.color')[indexB].style.backgroundColor);
  });
}

for (let index = 0; index < document.querySelectorAll('.pixel').length; index += 1) {
  pixel[index].addEventListener('click', () => {
    pixel[index].style.backgroundColor = sessionStorage.color;
  });
}
