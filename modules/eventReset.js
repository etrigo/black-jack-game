import { theGame, p, h } from './gameObject.js';
import { showStats } from './gameStats.js';
import { playerCardSection, playerScoreSection, startBtn, hitBtn, holdBtn, resetBtn, houseCardSection, houseScoreSection } from './dom.js';


const eventReset = async () => {
  await resetGame(true)
  console.log("reset click")
}

const resetGame = async (x) => {
  // count resets
  if (x) {
    console.log(x)
    theGame.player.resets++
  }

  // reset all variables
  theGame.deck = [];
  theGame.player.cards = [];
  theGame.player.displayCards = '';
  theGame.player.cardCount = 0;
  theGame.player.score = 0;
  // theGame.player.resets++;
  theGame.house.cards = [];
  theGame.house.displayCards = '';
  theGame.house.cardCount = 0;
  theGame.house.score = 0;
  theGame.hold = false;

  // display cards back
  playerCardSection.innerHTML = `
  <img src="./img/back.png" alt="First card" class="card">
  <img src="./img/back.png" alt="second card" class="card">
  `;
  
  houseCardSection.innerHTML = `
  <img src="./img/back.png" alt="First card" class="card">
  <img src="./img/back.png" alt="second card" class="card">
  `;

  // reset the score;
  playerScoreSection.innerHTML = `-`;
  houseScoreSection.innerHTML = `-`;

  // reset all buttons
  startBtn.disabled = false;
  hitBtn.disabled = true;
  holdBtn.disabled = true;
  resetBtn.disabled = true;

  showStats()

  // resetBtn.removeEventListener('click', eventReset);

  return theGame
};

export { resetGame, eventReset };