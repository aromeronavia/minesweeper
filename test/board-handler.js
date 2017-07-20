import BoardHandler from '../minesweeper/board-handler';
import Board from '../minesweeper/board';
import ConsoleUI from '../minesweeper/console-ui';

describe('Board Handler', () => {
  const buildBoardHandler = () => {
    const board = new Board(10);
    return new BoardHandler(board, new ConsoleUI(board));
  };

  it('should flag a slot in the board', () => {
    const handler = buildBoardHandler();
    handler.flag(5, 5);
    expect(handler.hasFlag(5, 5)).to.be.true;
  });

  it('should unflag a slot in the board', () => {
    const handler = buildBoardHandler();
    handler.unflag(5, 5);
    expect(handler.hasFlag(5, 5)).to.be.false;
  });

  it('should reveal a slot in the board in a certain position', () => {
    const handler = buildBoardHandler();
    expect(handler.isRevealed(5, 5)).to.be.false;
    handler.reveal(5, 5);
    expect(handler.isRevealed(5, 5)).to.be.true;
  });
});
