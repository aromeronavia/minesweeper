import ConsoleUI from '../minesweeper/console-ui';
import Board from '../minesweeper/board';

describe('Console UI', () => {
  const buildConsoleUI = board => new ConsoleUI(board);

  it('should create the board in console with valid length', () => {
    const board = new Board(10);
    const ui = buildConsoleUI(board);

    expect(ui.getBoard()).to.have.lengthOf(board.getBoard().length);
    for (let i = 0; i < 9; i += 1) {
      expect(ui.getBoard()[i]).to.have.lengthOf(9);
    }
  });

  it('should mirror the board including mines', () => {
    const board = new Board(10);
    const ui = buildConsoleUI(board);

    const expectCorrectUIElement = (i, j) => {
      const boardSlot = board.getSlotAt(i, j);
      const uiSlot = ui.getSlotAt(i, j);

      if (boardSlot.isRevealed()) {
        expect(uiSlot).to.equals(boardSlot.getMinesAround());
      } else if (boardSlot.hasFlag()) {
        expect(uiSlot).to.equals('!');
      } else if (!boardSlot.isRevealed()) {
        expect(uiSlot.draw()).to.equals('[]');
      }
    };

    for (let i = 0; i < 9; i += 1) {
      for (let j = 0; j < 9; j += 1) {
        expectCorrectUIElement(i, j);
      }
    }
  });
});
