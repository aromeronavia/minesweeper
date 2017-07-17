import MineSlot from '../minesweeper/slots/mine';

describe('Mine Slot', () => {
  const buildMineSlot = () => new MineSlot();
  it('should not have a flag', () => {
    const mine = buildMineSlot();
    expect(mine.hasFlag()).to.equals(false);
  });

  it('should be able to set a flag', () => {
    const mine = buildMineSlot();
    mine.flag();
    expect(mine.hasFlag()).to.equals(true);
  });
});
