import BoardHandler from '../minesweeper/board-handler';
import Board from '../minesweeper/board';

describe('Board Handler', () => {
  const buildBoardHandler = () => new BoardHandler(new Board());

  it('should flag a slot in the board', () => {
    const handler = buildBoardHandler(10);
    handler.flag(5, 5);
    expect(handler.getSlotAt(5, 5).hasFlag()).to.be.true;
  });
});
