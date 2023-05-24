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

  const findShip = () => {
    shipsOnBoard.forEach((ship) => {});
  };

  const receiveAttack = (x, y) => {
    //check if theres a ship
    //call hit function on ship
    //determine if the ship is destroyed
    //check if all ships are now destroyed
    let tile = findTile(x, y);
    //change this to account to work with any ship
    if (tile.fill == "submarine") {
      //find ship based on x, y and deploy its own method
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

  const onBoardShip = (newsShip) => {};

  const verifyPlacement = () => {};

  //using the start position and then adding by ship length
  const placeShip = (ship, x, y) => {
    // let locationList = [];
    let newShip = ship;
    shipsOnBoard.push(newShip);

    let location = findTile(x, y);
    location.fill = ship;

    //add the ship to adjecent tiles
    for (let i = 0; i < ship.size; i++) {
      let currentTile = findNextTile(x, y, i);
      // locationList.push(findNextTile(x, y, i));
      currentTile.fill = ship.name;
      //needs to be a reference to this object so i can call its functions
    }
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
