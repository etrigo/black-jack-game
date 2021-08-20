import { theGame } from './gameObject.js';

let getScore = (x) => {
  let ace = 0;

  theGame[x].cards.forEach(e => {
    if (e.score === 11) {
      ace++
    }
  })

  let theScore = theGame[x].cards.reduce((accum, item) => accum + item.score,0)

  if (ace > 0 && theScore > 21) {
    theScore = theScore -10
  }
  
  if (ace > 1 && theScore > 21) {
    theScore = theScore -10
  }
  
  if (ace > 2 && theScore > 21) {
    theScore = theScore -10
  }
  
  if (ace > 3 && theScore > 21) {
    theScore = theScore -10
  }


  return theScore
}

export { getScore }