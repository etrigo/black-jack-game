// import needed modules
import { getHtml } from './getHtml.js';
import { getCard } from './getCard.js';
import { getScore } from './getScore.js';
import { theGame, p, h } from './gameObject.js';
import { showStats } from './gameStats.js';
import { holdBtn, resetBtn, newBtn, houseCardSection, houseScoreSection, winnerSection } from './dom.js';

const startHouseGame = async () => {
    // change buttons
    resetBtn.style.display = "none"
    newBtn.style.display = "flex"
    newBtn.disabled = true
    holdBtn.disabled = true

    // get first two cards
    while (theGame[h].cardCount < 2 || (theGame[h].score <= theGame[p].score && theGame[h].score <= 21)) {
        console.log("w")
        await getCard(h).then(e => {
          // theGame.deck = e
          
          // display player cards
          houseCardSection.innerHTML = getHtml(h)
  
          // check if we got the deck in return and increase count
          if (e) {
            theGame.house.cardCount++
          }
        })
        // get and display score
        theGame.house.score = getScore(h)
    }

    houseScoreSection.innerText = `House score: ${theGame.house.score}`

    if (theGame[h].score > 21) {
        winnerSection.innerText = `Player Wins!`
        theGame[p].wins++
    } else if (theGame[h].score >= theGame[p].score && theGame[h].score <= 21) {
        winnerSection.innerText = `House Wins!`
        theGame[h].wins++
    } else {
        winnerSection.innerText = `Player Wins!`
        theGame[p].wins++
    }

    showStats()

    // activate new game button
    newBtn.disabled = false
}

export { startHouseGame };