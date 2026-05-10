const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let tie = 0;
let win = 0;
let lose = 0;

rock.addEventListener('click', () => {
  playGame('rock');
});

paper.addEventListener('click', () => {
  playGame('paper');
});

scissors.addEventListener('click', () => {
  playGame('scissors');
});

function pickComputerMove() {
  const randNum = Math.random();

  let computerMove = '';

  if(randNum >= 0 && randNum < 1 / 3) computerMove = 'rock';
  else if(randNum >= 1 / 3 && randNum < 2 / 3) computerMove = 'paper';
  else computerMove = 'scissors';

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  
  if(playerMove == 'rock') {
    if(computerMove === 'rock') result = 'Tie.';
    else if(computerMove === 'paper') result = 'You lose.';
    else if(computerMove === 'scissors') result = 'You win!';
    else result = 'Invalid Move';
  }
  else if(playerMove === 'paper') {
    if(computerMove === 'rock') result = 'You win!';
    else if(computerMove === 'paper') result = 'Tie.';
    else if(computerMove === 'scissors') result = 'You lose.';
    else result = 'Invalid Move';
  }
  else if(playerMove === 'scissors') {
    if(computerMove === 'rock') result = 'You lose.';
    else if(computerMove === 'paper') result = 'You win!';
    else if(computerMove === 'scissors') result = 'Tie.';
    else result = 'Invalid Move';
  }

  renderResult(result, playerMove, computerMove);
}

function renderResult(resultMsg, player, computer) {
  const result = document.querySelector('#result');

  if(resultMsg === 'You win!') win++;
  else if(resultMsg === 'You lose.') lose++;
  else if(resultMsg === 'Tie.') tie++;

  result.innerHTML = `
    <p>
      You played ${player}, computer played ${computer}. ${resultMsg}
    </p>
    <p>
      Wins: ${win} Loses: ${lose} Ties: ${tie};
    </p>
  `;
}