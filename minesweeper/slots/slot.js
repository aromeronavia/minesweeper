export default class Slot {
  constructor() {
    this.flagged = false;
    this.revealed = false;
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

  hasMine() {
    return false;
  }

  isRevealed() {
    return this.revealed;
  }

  reveal() {
    this.revealed = true;
  }

  getMinesAround() {
    return 0;
  }

  addMineAround() {
    return 0;
  }
}
