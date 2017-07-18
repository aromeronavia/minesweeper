import Slot from '../../minesweeper/slots/slot';

describe('Slot', () => {
  const buildMineSlot = () => new Slot();

  it('should be created without a flag and without a mine', () => {
    const mine = buildMineSlot();
    expect(mine.hasFlag()).to.equals(false);
    expect(mine.hasMine()).to.equals(false);
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
