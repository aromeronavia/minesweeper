export default class ConsoleUI {
  constructor(board) {
    this.board = this.createBoard(board);
  }

  createBoard(board) {
    const boardSize = board.getBoardSize();
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

  draw() {
    for (let i = 0; i < 9; i += 1) {
      let row = '';
      for (let j = 0; j < 9; j += 1) {
        row += this.getSlotAt(i, j);
      }

      console.log(row);
    }
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

  unflag(row, column) {
    this.board[row][column] = '[]';
  }

  reveal(row, column, minesAround) {
    this.board[row][column] = minesAround;
  }
}
