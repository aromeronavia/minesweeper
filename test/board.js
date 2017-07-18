import Board from '../minesweeper/board';

const BOARD_SIZE = 9;

describe('Board', () => {
  const buildBoard = mines => new Board(mines);

  it('should have nine rows and nine columns', () => {
    const board = buildBoard(10);
    expect(board.getBoard()).to.have.lengthOf(BOARD_SIZE);
    for (let i = 0; i < BOARD_SIZE; i += 1) {
      expect(board.getBoard()[i]).to.have.lengthOf(BOARD_SIZE);
    }
  });

  it('should put ten mines in the board', () => {
    const board = buildBoard(10);
    let numberOfMines = 0;

    for (let i = 0; i < BOARD_SIZE; i += 1) {
      for (let j = 0; j < BOARD_SIZE; j += 1) {
        if (board.getSlotAt(i, j).hasMine()) {
          numberOfMines += 1;
        }
      }
    }

    expect(numberOfMines).to.equals(10);
  });
});
