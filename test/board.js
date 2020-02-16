import Board from '../minesweeper/board';
import { SlotWithMineRevealed } from '../minesweeper/errors';
import Mine from '../minesweeper/slots/mine';

const BOARD_SIZE = 9;

describe('Board', () => {
  const buildBoard = mines => new Board(mines);

  const findSlotWithMine = board => {
    for (let row = 0; row < BOARD_SIZE; row += 1) {
      for (let column = 0; column < BOARD_SIZE; column += 1) {
        if (board.getSlotAt(row, column).hasMine()) {
          return [row, column];
        }
      }
    }

    return null;
  };

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

  it('should reveal a slot', () => {
    const board = buildBoard();

    board.reveal(5, 5);

    expect(board.getSlotAt(5, 5).isRevealed()).to.be.true;
  });

  it('should flag a slot', () => {
    const board = buildBoard(10);

    board.flag(5, 5);

    expect(board.getSlotAt(5, 5).hasFlag()).to.be.true;
  });

  it('should unflag a slot', () => {
    const board = buildBoard(10);

    board.flag(5, 5);
    board.unflag(5, 5);

    expect(board.getSlotAt(5, 5).hasFlag()).to.be.false;
  });

  it('should tell if slot is revealed', () => {
    const board = buildBoard();

    board.reveal(5, 5);

    expect(board.isRevealed(5, 5)).to.be.true;
  });

  it('should throw an error if revealed slot has mine', () => {
    const board = buildBoard(10);
    const [row, column] = findSlotWithMine(board);

    try {
      board.reveal(row, column);
      expect(true).to.equals(false);
    } catch (error) {
      expect(error).to.be.instanceOf(SlotWithMineRevealed);
    }
  });

  it.skip('should set the number of mines around to the slots', () => {
    const board = buildBoard(10);

    const getMine = (i, j) => {
      if (i >= 0 && i < 9 && j >= 0 && j < 9) {
        return board.getSlotAt(i, j).hasMine() ? 1 : 0;
      }

      return 0;
    };

    const expectCorrectNumberOfMines = (i, j) => {
      let minesAround = 0;

      minesAround += getMine(i, j - 1);
      minesAround += getMine(i + 1, j);
      minesAround += getMine(i + 1, j - 1);
      minesAround += getMine(i + 1, j + 1);
      minesAround += getMine(i, j + 1);
      minesAround += getMine(i - 1, j + 1);
      minesAround += getMine(i - 1, j);
      minesAround += getMine(i - 1, j - 1);

      expect(board.getSlotAt(i, j).getMinesAround()).to.equals(minesAround);
    };

    for (let i = 0; i < BOARD_SIZE; i += 1) {
      for (let j = 0; j < BOARD_SIZE; j += 1) {
        expectCorrectNumberOfMines(i, j);
      }
    }
  });
});
