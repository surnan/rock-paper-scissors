
[
  '.js-rock-button',
  '.js-paper-button',
  '.js-scissors-button'
].forEach((currentElement) =>
  document.querySelector(currentElement).addEventListener('click', () => {
    console.log(`hi ${currentElement}`);
  }));


function playGame(temp) {
  // console.log(temp);
  console.log('HELLO');
}
