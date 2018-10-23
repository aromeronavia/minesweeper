import { GameOver } from './errors';

export default class Minesweeper {
  constructor(board) {
    this.board = board;
  }

  flag(row, column) {
    this.board.flag(row, column);
  }

  unflag(row, column) {
    this.board.unflag(row, column);
  }

  reveal(row, column) {
    try {
      this.board.reveal(row, column);
    } catch (error) {
      throw new GameOver();
    }
  }
}
