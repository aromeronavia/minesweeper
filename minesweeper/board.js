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
    this.addMineAround(board, randomRow, randomColumn - 1);
    this.addMineAround(board, randomRow + 1, randomColumn - 1);
    this.addMineAround(board, randomRow + 1, randomColumn);
    this.addMineAround(board, randomRow + 1, randomColumn + 1);
    this.addMineAround(board, randomRow, randomColumn + 1);
    this.addMineAround(board, randomRow - 1, randomColumn + 1);
    this.addMineAround(board, randomRow - 1, randomColumn);
    this.addMineAround(board, randomRow - 1, randomColumn - 1);
  }

  getRandomIndex() {
    return Math.floor(Math.random() * 9);
  }

  addMineAround(board, row, column) {
    if (row >= 0 && row < BOARD_SIZE && column >= 0 && column < BOARD_SIZE) {
      const slot = board[row][column];
      if (slot.hasMine()) return;

      slot.addMineAround();
    }
  }

  getBoard() {
    return this.board;
  }

  getBoardSize() {
    return BOARD_SIZE;
  }

  getSlotAt(row, column) {
    return this.board[row][column];
  }

  flag(row, column) {
    this.getSlotAt(row, column).flag();
  }

  unflag(row, column) {
    this.getSlotAt(row, column).unflag();
  }

  reveal(row, column) {
    this.getSlotAt(row, column).reveal();
  }

  hasFlag(row, column) {
    return this.getSlotAt(row, column).hasFlag();
  }

  isRevealed(row, column) {
    return this.getSlotAt(row, column).isRevealed();
  }
}
