import Minesweeper from '../minesweeper/minesweeper';
import Board from '../minesweeper/board';
import BoardHandler from '../minesweeper/board-handler';

describe('Minesweeper', () => {
  const buildMinesweeper = boardHandler => new Minesweeper(boardHandler);

  it('should click a mine and reveal it', () => {
    const boardHandler = new BoardHandler(new Board());
    const game = buildMinesweeper(boardHandler);

    expect(boardHandler.isRevealed(5, 5)).to.equals(false);

    game.click(5, 5);
    expect(boardHandler.isRevealed(5, 5)).to.equals(true);
  });

  it('should right click a mine and flag it', () => {
    const boardHandler = new BoardHandler(new Board());
    const game = buildMinesweeper(boardHandler);

    expect(boardHandler.hasFlag(5, 5)).to.equals(false);

    game.rightClick(5, 5);
    expect(boardHandler.hasFlag(5, 5)).to.equals(true);
  });

  it('should remove the flag if left click on slot', () => {
    const boardHandler = new BoardHandler(new Board());
    const game = buildMinesweeper(boardHandler);

    game.rightClick(5, 5);
    expect(boardHandler.hasFlag(5, 5)).to.equals(true);

    game.click(5, 5);
    expect(boardHandler.hasFlag(5, 5)).to.equals(false);
  });
});
