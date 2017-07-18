export default class BoardHandler {
  constructor(board) {
    this.board = board;
  }

  flag(row, column) {
    this.getSlotAt(row, column).flag();
  }

  getSlotAt(row, column) {
    return this.board.getSlotAt(row, column);
  }
}
