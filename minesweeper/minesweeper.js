export default class Minesweeper {
  constructor(board, ui) {
    this.board = board;
    this.ui = ui;
  }

  flag(row, column) {
    this.getSlotAt(row, column).flag();
  }

  unflag(row, column) {
    this.getSlotAt(row, column).unflag();
  }

  hasFlag(row, column) {
    return this.getSlotAt(row, column).hasFlag();
  }

  reveal(row, column) {
    const slot = this.getSlotAt(row, column);
    slot.reveal();
  }

  isRevealed(row, column) {
    return this.getSlotAt(row, column).isRevealed();
  }

  getSlotAt(row, column) {
    return this.board.getSlotAt(row, column);
  }

  draw() {
    this.ui.draw();
  }
}
