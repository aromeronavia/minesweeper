import Mineless from './slots/mineless';
import Mine from './slots/mine';

const BOARD_SIZE = 9;
const MINES = 10;

export default class Board {
  constructor() {
    this.board = this.createBoard();
  }

  createBoard() {
    const board = [];
    for (let i = 0; i < BOARD_SIZE; i += 1) {
      const row = [];
      board.push(row);
      for (let j = 0; j < BOARD_SIZE; j += 1) {
        row.push(new Mineless());
      }
    }

    return this.insertMines(board);
  }

  insertMines(board) {
    const minedBoard = board;

    for (let i = 0; i < MINES; i += 1) {
      const randomRow = this.getRandomIndex();
      const randomColumn = this.getRandomIndex();
      minedBoard[randomRow][randomColumn] = new Mine();
    }

    return minedBoard;
  }

  getRandomIndex() {
    return Math.floor(Math.random() * 9);
  }

  getBoard() {
    return this.board;
  }

  getSlotAt(row, column) {
    return this.board[row][column];
  }
}
