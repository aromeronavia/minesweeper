class ConsoleSlot {
  constructor(slot) {
    this.slot = slot;
  }

  draw() {
    if (this.slot.isRevealed()) {
      if (this.slot.hasMine()) {
        return 'X';
      }

      return this.slot.getMinesAround();
    } else if (this.slot.hasFlag()) {
      return 'f';
    }

    return '■';
  }
}

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
    const slot = board.getSlotAt(i, j);

    return new ConsoleSlot(slot);
  }

  draw() {
    this.cleanTerminal();

    for (let i = 0; i < 9; i += 1) {
      let row = '';
      for (let j = 0; j < 9; j += 1) {
        row += this.drawSlot(i, j);
      }

      console.log(row);
    }
  }

  drawGameOver() {
    this.cleanTerminal();
    this.draw();

    console.log('Game Over! Thanks for playing :D');
  }

  cleanTerminal() {
    const lines = process.stdout.getWindowSize()[1];
    for (let i = 0; i < lines; i += 1) {
      console.log('\r\n');
    }

    console.log('----------------- Minesweeper -----------------');
  }

  drawSlot(row, column) {
    return this.getSlotAt(row, column).draw();
  }

  getSlotAt(row, column) {
    return this.board[row][column];
  }
}
