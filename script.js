import { Block } from './src/Block.js';
import { Game } from './src/Game.js';
import { Score } from './src/Score.js';
import { Sound } from './src/Sound.js';

const body = document.querySelector('body');
const rowLength = Number(getComputedStyle(body).getPropertyValue('--row-length').trim());

document.querySelector('#year').textContent = new Date().getFullYear();

window.startGame = function() {
  window.blocks = [];
  window.sound = new Sound();
  const score = new Score({rowLength, maxTime:100});
  window.game = new Game(rowLength, score);
  console.log(rowLength, window.game)
  game.createDivs();
  game.divs.forEach((div, index) => {
    const block = new Block({
      div,
      x: index % rowLength + 1,
      y: Math.floor(index / rowLength) + 1,
      state: 'filled'
    });
    block.init(index);
    block.handleClickEvent(score);
    blocks.push(block);
  });
  score.initMarbles();
  window.scrollTo(0,0);
}

startGame();