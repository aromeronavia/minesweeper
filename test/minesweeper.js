import Minesweeper from '../minesweeper/minesweeper';
import Board from '../minesweeper/board';
import ConsoleUI from '../minesweeper/console-ui';

describe('Minesweeper', () => {
  const buildMinesweeper = () => {
    const board = new Board(10);
    return new Minesweeper(board, new ConsoleUI(board));
  };

  it('should flag a slot in the board', () => {
    const minesweeper = buildMinesweeper();
    minesweeper.flag(5, 5);
    expect(minesweeper.hasFlag(5, 5)).to.be.true;
  });

  it('should unflag a slot in the board', () => {
    const minesweeper = buildMinesweeper();
    minesweeper.unflag(5, 5);
    expect(minesweeper.hasFlag(5, 5)).to.be.false;
  });

  it('should reveal a slot in the board in a certain position', () => {
    const minesweeper = buildMinesweeper();
    expect(minesweeper.isRevealed(5, 5)).to.be.false;
    minesweeper.reveal(5, 5);
    expect(minesweeper.isRevealed(5, 5)).to.be.true;
  });

  it('should flag and modify the ui', () => {
    const board = new Board();
    const ui = new ConsoleUI(board);
    const minesweeper = new Minesweeper(board, ui);

    minesweeper.flag(5, 5);
    expect(ui.getSlotAt(5, 5).draw()).to.equals('f');
  });

  it('should unflag and modify the ui', () => {
    const board = new Board();
    const ui = new ConsoleUI(board);
    const minesweeper = new Minesweeper(board, ui);

    minesweeper.flag(5, 5);
    minesweeper.unflag(5, 5);
    expect(ui.getSlotAt(5, 5).draw()).to.equals('[]');
  });
});
