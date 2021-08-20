import { gameStats } from "./dom.js";
import { theGame, p, h } from "./gameObject.js";

const showStats = () => {
    // show game stats
    gameStats.innerText = `Total games Played: ${theGame.games} | Restarted games: ${theGame[p].resets} | Player wins: ${theGame[p].wins} | House wins: ${theGame[h].wins}`
};

export { showStats };