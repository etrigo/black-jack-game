import { resetGame } from "./eventReset.js";
import { startBtn, resetBtn, newBtn } from "./dom.js";


const eventNew = () => {
    resetGame(false);
    startBtn.disabled = false;
    startBtn.classList.add('wait');
    setTimeout(() => {
        startBtn.click();
        startBtn.classList.remove('wait');
    }, 1000);
    resetBtn.style.display = "flex"
    newBtn.style.display = "none"
    newBtn.removreEventListener('click', eventNew);
   }

export { eventNew };