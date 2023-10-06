
[
  '.js-rock-button',
  '.js-paper-button',
  '.js-scissors-button'
].forEach((currentElement) =>
  document.querySelector(currentElement).addEventListener('click', () => {
    playGame(currentElement);
  }));

function playGame(playerButton) {
  const playerAction = playerButton.split("-")[1];
  const computerAction = getComputerMove(playerAction);

  let temp = getGameResults(playerAction, computerAction);
  console.log(`player: ${playerAction} --- action: ${computerAction} -- ${temp}`);
}

function getGameResults(playerAction, computerAction) {
  if (playerAction === computerAction) {
    return 'tie';
  }

  if (playerAction === 'rock') {
    if (computerAction === 'paper') {
      return 'lose';
    }
  }

  if (playerAction === 'paper') {
    if (computerAction === 'scissors') {
      return 'lose';
    }
  }

  if (playerAction === 'scissors') {
    if (computerAction === 'rock') {
      return 'lose';
    }
  }

  return('win');
}

function getComputerMove(temp3) {
  const temp = Math.random();
  if (temp < 0.33) { return 'rock'; }
  if (temp > 0.66) { return 'scissors'; }
  return 'paper'
}
