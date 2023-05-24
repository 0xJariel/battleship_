import { describe, test, expect } from "vitest";
import { Gameboard } from "./Gameboard";
import { Ship } from "./Ship";

describe("#GameBoard", () => {
  let testBoard = Gameboard();
  let testShip = Ship("submarine", 3);
  let testCell = testBoard.board[0];

  test("returns a gameboard grid that is 4 objects that have x,y coordinates", () => {
    expect(testCell.x).toEqual(1);
  });

  test("receiveAttack no ship present", () => {
    testBoard.receiveAttack(1, 8);
    testBoard.receiveAttack(1, 9);

    expect(testBoard.board[7].fill).toEqual(`Missed!`);
  });

  test("receiveAttack", () => {
    let eBoard = Gameboard();
    eBoard.placeShip(testShip, 1, 1);
    eBoard.printBoard();
    let result = eBoard.receiveAttack(1, 1);

    expect(result).toEqual(`Hit!`);
  });

  test("placeShip", () => {
    testBoard.placeShip(testShip, 1, 1);
    expect(testBoard.board[0].fill).toEqual(testShip.name);
  });

  test("placeShip accross the x axis by length", () => {
    testBoard.placeShip(testShip, 1, 1);
    expect(testBoard.board[0].fill).toEqual(testBoard.board[1].fill);
    expect(testBoard.board[1].fill).toEqual(testShip.name);
    expect(testBoard.board[2].fill).toEqual(testShip.name);
  });

  test("print board", () => {
    testBoard.printBoard();
  });

  test("");
});
