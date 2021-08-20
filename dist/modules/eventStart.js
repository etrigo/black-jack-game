import { theGame, p } from "./gameObject.js";
import { setDeck } from "./setDeck.js";
import { getCard } from "./getCard.js";
import { getHtml } from "./getHtml.js";
import { getScore } from "./getScore.js";
import { playerCardSection, playerScoreSection, startBtn, hitBtn, holdBtn, resetBtn } from './dom.js';


const eventStart = async () => {
    // set game count
    theGame.games++

    // create the new deck of cards
    theGame.deck = await setDeck()

    // get first two cards
    while (theGame.player.cardCount < 2) {
      await getCard(p).then(e => {
        // theGame.deck = e
        
        // display player cards
        playerCardSection.innerHTML = getHtml(p)

        // check if we got the deck in return and increase count
        if (e) {
          theGame.player.cardCount++
        }
      })
    }
    
    // disable start game button
    startBtn.disabled = true
    
    // enable reset buttons
    resetBtn.disabled = false


    // get and display score
    theGame.player.score = getScore(p)
    playerScoreSection.innerText = `Your score: ${theGame.player.score}`

    // check player score
    if (theGame.player.score < 21) {
      hitBtn.disabled = false
      holdBtn.disabled = false
    } else if (theGame.player.score === 21) {
      hitBtn.disabled = true
      holdBtn.disabled = false
    } else {
      hitBtn.disabled = true
      holdBtn.disabled = false
    }
  };

  export { eventStart };