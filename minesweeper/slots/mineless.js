class TooManyMines extends Error {}
class NoNegativeMines extends Error {}

export {
  TooManyMines,
  NoNegativeMines
};

export default class Mineless {
  constructor(minesAround = 0) {
    if (minesAround > 8) throw new TooManyMines();
    if (minesAround < 0) throw new NoNegativeMines();
    this.minesAround = minesAround;
    this.flagged = false;
  }

  getMinesAround() {
    return this.minesAround;
  }

  flag() {
    this.flagged = true;
  }

  unflag() {
    this.flagged = false;
  }

  hasFlag() {
    return this.flagged;
  }
}
