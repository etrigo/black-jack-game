// creates the deck of cards
let setDeck = async () => {
  let deck = [];
  let data = {};
  let cardTypes = ["hearts", "cloves", "diamonds", "spades"]

  cardTypes.forEach(e => {
    for (let i = 2; i <= 14; i++) {
      if (i < 11) {
        data.type = e
        data.score = i
      } else if (i > 10 && i < 14) {
        data.type = e
        data.score = 10
      } else {
        data.type = e
        data.score = 11
        data.scoreAlt = 1
      }
      deck.push(data)
      data = {}
    }
  })

  deck.forEach((q, index) => {
    deck[index].cardNum = index + 1
    deck[index].status = true
  })
  
  return deck
}

export { setDeck }