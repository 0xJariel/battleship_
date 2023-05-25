export const Gameboard = () => {
  let board = [];
  let missedShots = [];
  let shipsOnBoard = [];

  const Tile = (x, y, fill) => {
    return { x, y, fill };
  };

  const createTiles = (() => {
    for (let row = 1; row <= 10; row++) {
      for (let column = 1; column <= 10; column++) {
        board.push(Tile(row, column, "water"));
      }
    }
  })();

  const findTile = (x, y) => {
    let tile = board.find((tile) => tile.x === x && tile.y === y);
    if (tile) {
      return tile;
    } else {
      console.log("Tile not found!");
      return null;
    }
  };

  const findShip = (x, y) => {
    for (const ship of shipsOnBoard) {
      for (const coord of ship.coords) {
        if (coord.x === x && coord.y === y) {
          return ship;
        }
      }
    }
    console.log(shipsOnBoard[0].coords);
    return null; // Return null or undefined if no matching ship is found
  };

  const receiveAttack = (x, y) => {
    //determine if the ship is destroyed
    //check if all ships are now destroyed
    let tile = findTile(x, y);
    //change this to account to work with any ship
    if (tile.fill !== "water") {
      let currentShip = findShip(x, y);
      currentShip.hit();
      tile.fill = "Hit!";
      return "Hit!";
    } else {
      tile.fill = "Missed!";
    }
  };

  const findNextTile = (x, y, step) => {
    let currentTile = findTile(x, y);
    let nextTile = findTile(x, y + step);
    return nextTile;
  };

  const validCoords = (ship, x, y) => {
    let coords = [];
    for (let i = 0; i < ship.size; i++) {
      coords.push({ x, y: y + i });

      //checks if the tile does not exits or has anything other than water
      if (findTile(x, y + i) == null || findTile(x, y + i).fill !== "water") {
        return false;
      }
    }
    return coords;
  };

  const placeShip = (ship, x, y) => {
    if (validCoords(ship, x, y)) {
      let currentShip = ship;
      //makes each ship unique
      currentShip.coords = validCoords(ship, x, y);
      //adds the new ship to it's own place outside the board
      shipsOnBoard.push(currentShip);

      let location = findTile(x, y);
      location.fill = ship.name;
      shipsOnBoard.push(ship);

      for (let i = 0; i < ship.size; i++) {
        let currentTile = findNextTile(x, y, i);
        currentTile.fill = ship.name;
      }
    }
    return null;
  };

  const printBoard = () => {
    let consoleBoard = [];
    for (let i = 1; i <= 10; i++) {
      let row = [];
      for (let j = 1; j <= 10; j++) {
        let tile = findTile(i, j);
        let mark = tile.fill === "water" ? "O" : "X";
        row.push(mark);
      }
      consoleBoard.push(row.join(" "));
    }
    console.log(consoleBoard.join("\n"));
  };

  return { board, placeShip, receiveAttack, printBoard };
};
