import { theGame, p } from "./gameObject.js";
import { getCard } from "./getCard.js";
import { getHtml } from "./getHtml.js";
import { getScore } from "./getScore.js";
import { showStats } from "./gameStats.js";
import { hitBtn, holdBtn, resetBtn, newBtn, playerCardSection, playerScoreSection } from "./dom.js";

const eventHit = async () => {
      
    // get card from deck
    await getCard(p).then(e => {
      
      // display player cards and score
      playerCardSection.innerHTML = getHtml(p)
      
      // get and display score
      theGame.player.score = getScore(p)
      playerScoreSection.innerText = `Your score: ${theGame.player.score}`

      // check the score
      if (theGame.player.score === 21) {
        hitBtn.disabled = true
      } else if (theGame.player.score > 21) {
        hitBtn.disabled = true
        holdBtn.disabled = true
        resetBtn.style.display = "none"
        newBtn.style.display = "flex"
        theGame.house.wins++
        showStats();
      }
    })  
  }

  export { eventHit };