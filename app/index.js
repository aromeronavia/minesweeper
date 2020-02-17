import Minesweeper from '../minesweeper/minesweeper';
import Board from './../minesweeper/board';
import '../styles/index.scss';

class WebSlot {
  constructor(slot, row, column, onClick) {
    this.slot = slot;
    this.htmlSlot = document.createElement('div');
    this.htmlSlot.classList.add('square');

    if (slot.isRevealed()) {
      this.htmlSlot.classList.add('revealed');
    }

    this.htmlSlot.addEventListener('click', () => onClick(row, column));
  }

  draw() {
    if (this.slot.isRevealed()) {
      if (this.slot.hasMine()) {
        this.htmlSlot.innerHTML = 'X';
      } else {
        this.htmlSlot.innerHTML = this.slot.getMinesAround();
      }
    } else if (this.slot.hasFlag()) {
      this.htmlSlot.innerHTML = 'f';
    }
  }

  getHTML() {
    return this.htmlSlot;
  }
}

class Row {
  constructor() {
    const html = document.createElement('div');
    html.classList.add('row');
    this.html = html;

    this.slots = [];
  }

  addSlot(slot) {
    this.slots.push(slot);
    this.html.innerHTML = '';
    this.slots.forEach(iteratedSlot => {
      this.html.appendChild(iteratedSlot.getHTML());
      iteratedSlot.draw();
    });
  }

  getHTML() {
    return this.html;
  }
}

class WebUI {
  constructor(board, onClick) {
    this.board = board;
    this.onClick = onClick;
    this.draw();
  }

  createRows(board, onClick) {
    const boardSize = board.getBoardSize();
    const rows = [];
    for (let i = 0; i < boardSize; i += 1) {
      const row = this.createRow();

      for (let j = 0; j < boardSize; j += 1) {
        row.addSlot(this.createSlot(board, i, j, onClick));
      }

      rows.push(row);
    }

    return rows;
  }

  createRow() {
    return new Row();
  }

  createSlot(board, i, j, onClick) {
    const slot = board.getSlotAt(i, j);

    return new WebSlot(slot, i, j, onClick);
  }

  draw() {
    const boardHTML = document.getElementById('board');
    boardHTML.innerHTML = '';
    const rows = this.createRows(this.board, this.onClick);

    rows.forEach(row => {
      boardHTML.appendChild(row.getHTML());
    });

    this.boardHTML = boardHTML;
  }

  drawGameOver() {
    this.draw();
    console.error('Game Over! Thanks for playing :D');
  }
}

class WebApp {
  constructor() {
    const board = new Board(10);
    this.minesweeper = new Minesweeper(board);
    this.ui = new WebUI(board, (i, j) => {
      try {
        this.minesweeper.reveal(i, j);
        this.ui.draw(i, j);
      } catch (error) {
        this.ui.drawGameOver();
      }
    });
  }
}

new WebApp(); // eslint-disable-line
