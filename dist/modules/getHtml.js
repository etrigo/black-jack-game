import { theGame } from './gameObject.js';

// create html
let getHtml = (x) => {
    theGame[x].displayCards = ``;
    for (let i = 0; i < theGame[x].cards.length; i++) {
      theGame[x].displayCards += `
          <img src="/dist/img/${theGame[x].cards[i].cardNum}.png" alt="Cards" class="card">
          `
    }
    return theGame[x].displayCards
}

export { getHtml }