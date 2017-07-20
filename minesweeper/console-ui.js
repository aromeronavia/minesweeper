export default class ConsoleUI {
  constructor(board) {
    this.board = this.createBoard(board);
  }

  createBoard(board) {
    const boardSize = board.getBoard().length;
    const uiBoard = [];
    for (let i = 0; i < boardSize; i += 1) {
      const row = [];
      uiBoard.push(row);

      for (let j = 0; j < boardSize; j += 1) {
        row.push(this.createSlot(board, i, j));
      }
    }

    return uiBoard;
  }

  createSlot(board, i, j) {
    const targetSlot = board.getSlotAt(i, j);

    if (targetSlot.isRevealed()) return targetSlot.getMinesAround();
    if (targetSlot.hasFlag()) return '!';

    return '[]';
  }

  getBoard() {
    return this.board;
  }

  getSlotAt(row, column) {
    return this.board[row][column];
  }

  flag(row, column) {
    this.board[row][column] = 'f';
  }
}
