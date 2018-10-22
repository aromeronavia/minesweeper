export default class Minesweeper {
  constructor(boardHandler) {
    this.boardHandler = boardHandler;
  }

  click(row, column) {
    if (this.boardHandler.hasFlag(row, column)) {
      this.boardHandler.unflag(row, column);
    } else {
      this.boardHandler.reveal(row, column);
    }
  }

  rightClick(row, column) {
    this.boardHandler.flag(row, column);
  }

  draw() {
    this.boardHandler.draw();
  }
}
