"use strict"

// import modues needed
// import { setDeck } from './setDeck.js';
import { getHtml } from './getHtml.js';
import { getCard } from './getCard.js';
import { getScore } from './getScore.js';
import { eventReset } from './eventReset.js';
import { theGame, p } from './gameObject.js';
import { eventHold } from './eventHold.js';
import { eventNew } from './eventNew.js';
import { eventStart } from './eventStart.js';
import { eventHit } from './eventHit.js';
import { playerCardSection, playerScoreSection, startBtn, hitBtn, holdBtn, resetBtn, newBtn } from './dom.js';


const startGame = async () => {
  // player starts the game
  startBtn.addEventListener('click', eventStart);

  // player asks for one new card
  hitBtn.addEventListener('click', eventHit)

  // activate hold button
  holdBtn.addEventListener('click', eventHold);

  // activate the reset buttom
  resetBtn.addEventListener('click', eventReset);
  
  // avtivate new game event
  newBtn.addEventListener('click', eventNew); 
};

export { startGame };