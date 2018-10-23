import Minesweeper from './minesweeper';
import Board from './board';
import ConsoleUI from './ui/console';
import readline from 'readline';

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
    this.consoleReader.question('Next Move \n', this.handleTurns.bind(this));
  }

  handleTurns(answer) {
    try {
      this.handleAnswer(answer);
      this.readMove();
    } catch (error) {
      this.ui.draw();
      this.ui.drawGameOver();
      process.exit(0);
    }
  }

  handleAnswer(answer) {
    const [row, column] = answer.split(' ');
    this.minesweeper.reveal(row, column);
  }
}

const app = new ConsoleApp();
app.readMove();
