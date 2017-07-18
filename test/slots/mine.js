import Mine from '../../minesweeper/slots/mine';

describe('Mine Slot', () => {
  const buildMineSlot = () => new Mine();

  it('should have a mine', () => {
    const mine = buildMineSlot();
    expect(mine.hasMine()).to.equals(true);
  });
});
