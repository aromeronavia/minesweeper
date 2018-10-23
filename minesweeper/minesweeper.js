import { GameOver } from './errors';

export default class Minesweeper {
  constructor(board, ui) {
    this.board = board;
    this.ui = ui;
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

  draw() {
    this.ui.draw();
  }

  drawGameOver() {
    this.ui.drawGameOver();
  }
}
