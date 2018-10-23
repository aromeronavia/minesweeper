import Slot from './slot';
import { SlotWithMineRevealed } from './../errors';

export default class Mine extends Slot {
  hasMine() {
    return true;
  }

  reveal() {
    throw new SlotWithMineRevealed();
  }
}
