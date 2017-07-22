import Slot from './slot';

class TooManyMines extends Error {}
class NoNegativeMines extends Error {}

export {
  TooManyMines,
  NoNegativeMines
};

export default class Mineless extends Slot {
  constructor(minesAround = 0) {
    super();

    if (minesAround > 8) throw new TooManyMines();
    if (minesAround < 0) throw new NoNegativeMines();

    this.minesAround = minesAround;
  }

  getMinesAround() {
    return this.minesAround;
  }

  addMineAround() {
    this.minesAround += 1;
  }
}
