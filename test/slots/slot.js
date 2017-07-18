import Slot from '../../minesweeper/slots/slot';

describe('Slot', () => {
  const buildSlot = () => new Slot();

  it('should be created without a flag', () => {
    const slot = buildSlot();
    expect(slot.hasFlag()).to.equals(false);
  });

  it('should be created without a mine', () => {
    const slot = buildSlot();
    expect(slot.hasMine()).to.equals(false);
  });

  it('should be unrevealed', () => {
    const slot = buildSlot();
    expect(slot.isRevealed()).to.equals(false);
  });

  it('should not have a flag', () => {
    const slot = buildSlot();
    expect(slot.hasFlag()).to.equals(false);
  });

  it('should be able to set a flag', () => {
    const slot = buildSlot();
    slot.flag();
    expect(slot.hasFlag()).to.equals(true);
  });

  it('should be able to unset a flag', () => {
    const slot = buildSlot();
    slot.flag();
    slot.unflag();
    expect(slot.hasFlag()).to.equals(false);
  });

  it('should reveal a slot', () => {
    const slot = buildSlot();
    slot.reveal();
    expect(slot.isRevealed()).to.equals(true);
  });
});
