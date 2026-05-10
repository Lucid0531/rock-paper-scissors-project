const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resetScore = document.querySelector('#reset-score');

 let score = JSON.parse(localStorage.getItem("score")) ||
  {
    wins: 0,
    loses: 0,
    ties: 0
  };

  renderResult();

rock.addEventListener('click', () => {
  playGame('rock');
});

paper.addEventListener('click', () => {
  playGame('paper');
});

scissors.addEventListener('click', () => {
  playGame('scissors');
});

resetScore.addEventListener('click', () => {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;

  localStorage.setItem("score", score);
  renderResult();
})

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
  }
  else if(playerMove === 'paper') {
    if(computerMove === 'rock') result = 'You win!';
    else if(computerMove === 'paper') result = 'Tie.';
    else if(computerMove === 'scissors') result = 'You lose.';
  }
  else if(playerMove === 'scissors') {
    if(computerMove === 'rock') result = 'You lose.';
    else if(computerMove === 'paper') result = 'You win!';
    else if(computerMove === 'scissors') result = 'Tie.';
  }

  renderResult(result, playerMove, computerMove);
}

function renderResult(resultMsg, player, computer) {
  const result = document.querySelector('#result');

  if(resultMsg === 'You win!') score.wins++;
  else if(resultMsg === 'You lose.') score.loses++;
  else if(resultMsg === 'Tie.') score.ties++;

  localStorage.setItem("score", JSON.stringify(score));

  if(player === undefined) {
    result.innerHTML = `
      <p>
        Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}
      </p>
    `;
  }
  else {
    result.innerHTML = `
      <p>
        You played ${player}, computer played ${computer}. ${resultMsg}
      </p>
      <p>
        Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}
      </p>
    `;
  }
}