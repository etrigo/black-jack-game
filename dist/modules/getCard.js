import { theGame } from './gameObject.js';

// get card från deck
let min = 0
let max = 51

let getCard = async (x) => {
  let card = {status : true}
  
  while (card.status) {
    await rand().then(e => {
      let pickCard = e
      if (theGame.deck[pickCard].status) {
        theGame.deck[pickCard].status = false;
        card = theGame.deck[pickCard]
        theGame[x].cards.push(card)
      }
    });
  }
  if (!card.status) {
    return theGame.deck
  } else {
    return false
  }
};

const rand = async () => Math.floor(Math.random() * (max - min + 1)) + min

export { getCard };