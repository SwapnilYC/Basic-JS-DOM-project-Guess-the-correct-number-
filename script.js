'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.score').textContent = score;
let highscore = Number(document.querySelector('.highscore').innerText);

//--------------------------------------------------------------------------
// Print Message function
const printfunction = function (x) {
  document.querySelector('.message').textContent = x;
};

//--------------------------------------------------------------------------
// Lost game Function

const lostGame = function () {
  printfunction('🥹 You lost the game!!!');
  document.querySelector('.check').disabled = true;
  document.querySelector('body').style.backgroundColor = 'red';
};
//-----------------------------------------------------------------------------
// Check button Event listener

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    printfunction('Start guessing a number between 1 and 20');

    // when guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    printfunction('🎉🎊🎉🎊 You won the game!!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '50rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').innerText = highscore;
    } else {
      document.querySelector('.highscore').innerText = highscore;
    }

    // when guess is incorrect
  } else if (guess !== secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    if (score === 0) {
      lostGame();
    }
    printfunction(guess > secretNumber ? 'Too high!!!!' : 'Too low!!!!');
  }
});
//-------------------------------------------------------------------------------
// 'Again' button Event listener

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  printfunction('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '25rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
