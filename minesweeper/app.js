import Minesweeper from './minesweeper';
import BoardHandler from './board-handler';
import Board from './board';
import ConsoleUI from './console-ui';
import readline from 'readline';

class App {
  constructor() {
    const boardHandler = this.createBoardHandler();
    this.minesweeper = new Minesweeper();

    this.reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  createBoardHandler() {
    const board = new Board();

    return new BoardHandler(
      board,
      new ConsoleUI(board)
    )
  }

  handleTurns(answer) {
    console.log('Answer', answer);
    this.readMove();
  }

  readMove() {
    this.reader.question('Next Move \n', this.handleTurns.bind(this));
  }
}

const app = new App();
app.readMove();
