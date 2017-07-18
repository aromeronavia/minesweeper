export default class Slot {
  constructor() {
    this.flagged = false;
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
