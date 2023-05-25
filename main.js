import "./style.css";
import { Gameboard } from "./Gameboard";
import { Ship } from "./Ship";
import { renderTiles } from "./renderTiles";
import { renderShips } from "./renderShips";

const gameController = () => {};

const init = (() => {
  const app = document.querySelector("#app");

  let player1 = "Player 1";
  let player2 = "T-3000";
  let gameboard1 = Gameboard();
  let gameboard2 = Gameboard();

  let destroyer = Ship("destroyer", 4);
  let cruiser = Ship("cruiser", 3);
  let submarine = Ship("submarine", 3);
  let aircraftCarrier = Ship("aircraftCarrier", 5);
  let dingy = Ship("dingy", 2);
  let shipList = [dingy, cruiser, submarine, destroyer, aircraftCarrier];

  renderTiles(gameboard1.board);
  renderShips(shipList);
  renderTiles(gameboard2.board);
  renderShips(shipList);
})();
