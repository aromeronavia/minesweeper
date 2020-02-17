import readline from 'readline';

import Minesweeper from './minesweeper';
import Board from './board';
import ConsoleUI from './ui/console';

class ConsoleApp {
  constructor() {
    this.consoleReader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const board = new Board(10);
    this.minesweeper = new Minesweeper(board);
    this.ui = new ConsoleUI(board);
  }

  readMove() {
    this.ui.draw();
    this.consoleReader.question('Insert your move [row, column] separated by spaces. Example: "0 5" \n', this.handleTurns.bind(this));
  }

  handleTurns(answer) {
    try {
      const [row, column] = answer.split(' ');
      this.minesweeper.reveal(parseInt(row, 10), parseInt(column, 10));

      this.readMove();
    } catch (error) {
      this.ui.drawGameOver();
      process.exit(0);
    }
  }
}

const app = new ConsoleApp();
app.readMove();
