'use strict';
//document.querySelector('.message').textContent = 'hoooooooraaaa';
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = document.querySelector('.guess').value;
//   console.log(guess);
// });
// document.querySelector;
/*
console.log(document.querySelector('.message'));
console.log(document.querySelector('.label-score'));
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.label-score').textContent);

document.querySelector('.message').textContent = 'Asshole 😒';

document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);
*/
//css classes 👇
// number

let secretNumber = Math.trunc(Math.random() * 20 + 1); //num is always between 1 and 20 else we dont add '+1', num get between 1 and 19
let score = 20;
let highScore = 0;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //making Game Logic

  //player add nothing
  if (!guess) {
    document.querySelector('.message').textContent =
      'Meh, you didnt put any Number 😒';
  } else if (guess === secretNumber) {
    //player win
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'YOU WIN😍😎🎉🎊';
    document.querySelector('body').style.backgroundColor = '#c19d00';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    //guessing hgher than it  was
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high⬆️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Such a Dumb you are, you lost😒';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    //guessing lower than it was
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low⬇️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Such a Dumb you are, you lost😒';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
