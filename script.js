`use strict`;
const container = document.getElementById('container');
const start = document.querySelector(`.btn--start`);
let colors = function getRandomArbitrary(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
};

console.log(colors(0, 256));

const restart = function () {
  container.replaceChildren();
};

const createGame = function (x, y) {
  restart();
  let answer = prompt(`How many divs? Max 100`);
  if (answer > 100) {
    alert(`Number too high!`);
    return;
  }
  console.log(answer);
  const decider = answer * answer;
  container.style.gridTemplateColumns = `repeat(${answer}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${answer}, 1fr)`;
  for (let i = 0; i < decider; i++) {
    let cell = document.createElement(`div`);
    cell.style.minWidth = `1px`;
    cell.style.minHeight = `1px`;
    cell.style.margin = `0px`;
    // cell.style.alignSelf = `center`;
    cell.style.background = `black`;

    container.appendChild(cell);
    cell.addEventListener(`mouseover`, function () {
      cell.style.background = `rgb(${colors(0, 256)}, ${colors(
        0,
        256
      )}, ${colors(0, 256)})`;
    });
  }
};

start.addEventListener(`click`, createGame);
