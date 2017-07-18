class TooManyMines extends Error {}
class NoNegativeMines extends Error {}

export {
  TooManyMines
};

export default class Mineless {
  constructor(minesAround = 0) {
    if (minesAround > 8) throw new TooManyMines();
    if (minesAround < 0) throw new NoNegativeMines();
    this.minesAround = minesAround;
  }

  getMinesAround() {
    return this.minesAround;
  }
}
