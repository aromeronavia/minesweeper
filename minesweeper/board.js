import Mineless from './slots/mineless';
import Mine from './slots/mine';

const BOARD_SIZE = 9;

export default class Board {
  constructor(mines = 0) {
    this.board = this.createBoard(mines);
  }

  createBoard(mines) {
    const board = [];
    for (let i = 0; i < BOARD_SIZE; i += 1) {
      const row = [];
      board.push(row);
      for (let j = 0; j < BOARD_SIZE; j += 1) {
        row.push(new Mineless());
      }
    }

    return this.insertMines(board, mines);
  }

  insertMines(board, mines) {
    for (let i = 0; i < mines; i += 1) {
      this.insertMine(board);
    }

    return board;
  }

  insertMine(board) {
    let randomRow;
    let randomColumn;
    let randomSlot;

    do {
      randomRow = this.getRandomIndex();
      randomColumn = this.getRandomIndex();
      randomSlot = board[randomRow][randomColumn];
    } while (randomSlot.hasMine());

    board[randomRow][randomColumn] = new Mine();
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
