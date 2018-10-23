import Minesweeper from './minesweeper';
import Board from './board';
import ConsoleUI from './console-ui';
import readline from 'readline';

class ConsoleApp {
  constructor() {
    this.minesweeper = this.createMinesweeper();

    this.reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  createMinesweeper() {
    const board = new Board(10);

    return new Minesweeper(board, new ConsoleUI(board));
  }

  handleTurns(answer) {
    this.handleAnswer(answer);
    this.readMove();
  }

  handleAnswer(answer) {
    const [row, column] = answer.split(' ');
    this.minesweeper.reveal(row, column);
  }

  readMove() {
    this.minesweeper.draw();
    this.reader.question('Next Move \n', this.handleTurns.bind(this));
  }
}

const app = new ConsoleApp();
app.readMove();
