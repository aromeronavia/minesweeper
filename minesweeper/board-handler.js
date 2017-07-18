export default class BoardHandler {
  constructor(board) {
    this.board = board;
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

  revealSlot(row, column) {
    this.getSlotAt(row, column).reveal();
  }

  getSlotAt(row, column) {
    return this.board.getSlotAt(row, column);
  }
}
