export default class BoardHandler {
  constructor(board, ui) {
    this.board = board;
    this.ui = ui;
  }

  flag(row, column) {
    this.getSlotAt(row, column).flag();
    this.ui.flag(row, column);
  }

  unflag(row, column) {
    this.getSlotAt(row, column).unflag();
    this.ui.unflag(row, column);
  }

  hasFlag(row, column) {
    return this.getSlotAt(row, column).hasFlag();
  }

  isRevealed(row, column) {
    return this.getSlotAt(row, column).isRevealed();
  }

  reveal(row, column) {
    const slot = this.getSlotAt(row, column);
    slot.reveal();
  }

  getSlotAt(row, column) {
    return this.board.getSlotAt(row, column);
  }

  draw() {
    this.ui.draw();
  }
}
