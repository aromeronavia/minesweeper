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

  it('should flag and modify the ui', () => {
    const board = new Board();
    const ui = new ConsoleUI(board);
    const boardHandler = new BoardHandler(board, ui);

    boardHandler.flag(5, 5);
    expect(ui.getSlotAt(5, 5)).to.equals('f');
  });

  it('should unflag and modify the ui', () => {
    const board = new Board();
    const ui = new ConsoleUI(board);
    const boardHandler = new BoardHandler(board, ui);

    boardHandler.flag(5, 5);
    boardHandler.unflag(5, 5);
    expect(ui.getSlotAt(5, 5)).to.equals('[]');
  });

  it('should reveal a slot and put the number of mines around', () => {
    const board = new Board();
    const ui = new ConsoleUI(board);
    const boardHandler = new BoardHandler(board, ui);

    boardHandler.reveal(5, 5);
    expect(ui.getSlotAt(5, 5)).to.equals(0);
  });
});
