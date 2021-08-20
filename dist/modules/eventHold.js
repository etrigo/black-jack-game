import { theGame } from "./gameObject.js";
import { startHouseGame } from './houseGame.js';
import { holdBtn, resetBtn, hitBtn } from "./dom.js";

const eventHold = () => {
  resetBtn.disabled = true
  hitBtn.disabled = true
  theGame.hold = true
  startHouseGame();
};

export { eventHold }