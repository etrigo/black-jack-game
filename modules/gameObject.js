// create game object
let theGame = {
  deck: [],
  player: {
    cards: [],
    displayCards: '',
    cardCount: 0,
    score: 0,
    wins: 0,
    resets: 0
  },
  house: {
    cards: [],
    displayCards: '',
    cardCount: 0,
    score: 0,
    wins: 0
  },
  hold: false,
  games: 0
};

const p = "player";
const h = "house";

export { theGame, p, h };