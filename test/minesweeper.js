import Minesweeper from '../minesweeper/minesweeper';
import Board from '../minesweeper/board';
import BoardHandler from '../minesweeper/board-handler';
import ConsoleUI from '../minesweeper/console-ui';

describe('Minesweeper', () => {
  const buildMinesweeper = boardHandler => new Minesweeper(boardHandler);

  it('should click a mine and reveal it', () => {
    const board = new Board();
    const ui = new ConsoleUI(board);
    const boardHandler = new BoardHandler(board, ui);
    const game = buildMinesweeper(boardHandler);

    expect(boardHandler.isRevealed(5, 5)).to.equals(false);

    game.click(5, 5);
    expect(boardHandler.isRevealed(5, 5)).to.equals(true);
  });

  it('should right click a mine and flag it', () => {
    const board = new Board();
    const ui = new ConsoleUI(board);
    const boardHandler = new BoardHandler(board, ui);
    const game = buildMinesweeper(boardHandler);

    expect(boardHandler.hasFlag(5, 5)).to.equals(false);

    game.rightClick(5, 5);
    expect(boardHandler.hasFlag(5, 5)).to.equals(true);
  });

  it('should remove the flag if left click on slot', () => {
    const board = new Board();
    const ui = new ConsoleUI(board);
    const boardHandler = new BoardHandler(board, ui);
    const game = buildMinesweeper(boardHandler);

    game.rightClick(5, 5);
    expect(boardHandler.hasFlag(5, 5)).to.equals(true);

    game.click(5, 5);
    expect(boardHandler.hasFlag(5, 5)).to.equals(false);
  });

  it('should modify the ui if the board changes', () => {
    const board = new Board();
    const ui = new ConsoleUI(board);
    const boardHandler = new BoardHandler(board, ui);
    const game = buildMinesweeper(boardHandler);

    game.rightClick(5, 5);
    expect(ui.getSlotAt(5, 5)).to.equals('f');
  });
});
