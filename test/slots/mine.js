import MineSlot from '../../minesweeper/slots/mine';

describe('Mine Slot', () => {
  const buildMineSlot = () => new MineSlot();
  it('should be created without a flag', () => {
    const mine = buildMineSlot();
    expect(mine.hasFlag()).to.equals(false);
  });

  it('should not have a flag', () => {
    const mine = buildMineSlot();
    expect(mine.hasFlag()).to.equals(false);
  });

  it('should be able to set a flag', () => {
    const mine = buildMineSlot();
    mine.flag();
    expect(mine.hasFlag()).to.equals(true);
  });

  it('should be able to unset a flag', () => {
    const mine = buildMineSlot();
    mine.flag();
    mine.unflag();
    expect(mine.hasFlag()).to.equals(false);
  });
});
