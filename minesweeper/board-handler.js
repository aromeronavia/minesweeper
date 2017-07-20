export default class BoardHandler {
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

  isRevealed(row, column) {
    return this.getSlotAt(row, column).isRevealed();
  }

  reveal(row, column) {
    this.getSlotAt(row, column).reveal();
  }

  getSlotAt(row, column) {
    return this.board.getSlotAt(row, column);
  }
}
