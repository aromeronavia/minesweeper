import Minesweeper from '../minesweeper/minesweeper';
import Board from '../minesweeper/board';
import ConsoleUI from '../minesweeper/console-ui';
import { GameOver } from '../minesweeper/errors';

const BOARD_SIZE = 9;

describe('Minesweeper', () => {
  const findSlotWithMine = board => {
    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let column = 0; column < BOARD_SIZE; column++) {
        if (board.getSlotAt(row, column).hasMine()) {
          return [row, column];
        }
      }
    }
  };

  it('should flag a slot in the board', () => {
    const board = new Board(10);
    const minesweeper = new Minesweeper(board, new ConsoleUI(board));

    minesweeper.flag(5, 5);

    expect(board.hasFlag(5, 5)).to.be.true;
  });

  it('should unflag a slot in the board', () => {
    const board = new Board(10);
    const minesweeper = new Minesweeper(board, new ConsoleUI(board));

    minesweeper.unflag(5, 5);

    expect(board.hasFlag(5, 5)).to.be.false;
  });

  it('should reveal a slot in the board in a certain position', () => {
    const board = new Board(0);
    const minesweeper = new Minesweeper(board, new ConsoleUI(board));

    minesweeper.reveal(5, 5);

    expect(board.isRevealed(5, 5)).to.be.true;
  });

  it('should flag and modify the ui', () => {
    const board = new Board(10);
    const ui = new ConsoleUI(board);
    const minesweeper = new Minesweeper(board, ui);

    minesweeper.flag(5, 5);
    expect(ui.getSlotAt(5, 5).draw()).to.equals('f');
  });

  it('should unflag and modify the ui', () => {
    const board = new Board(10);
    const ui = new ConsoleUI(board);
    const minesweeper = new Minesweeper(board, ui);

    minesweeper.flag(5, 5);
    minesweeper.unflag(5, 5);
    expect(ui.getSlotAt(5, 5).draw()).to.equals('[]');
  });

  it('should throw error when revealing slot with mine', () => {
    const board = new Board(10);
    const ui = new ConsoleUI(board);
    const minesweeper = new Minesweeper(board, ui);
    const [row, column] = findSlotWithMine(board);

    try {
      minesweeper.reveal(row, column);
      expect(true).to.equal(false);
    } catch (error) {
      expect(error).to.be.instanceOf(GameOver);
    }
  });
});
