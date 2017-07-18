import Mineless, {
  TooManyMines,
  NoNegativeMines
} from '../../minesweeper/slots/mineless';

describe('Mineless slot', () => {
  const buildMinelessSlot = minesAround => new Mineless(minesAround);

  it('should have a number that describes how many mines are around', () => {
    const slot = buildMinelessSlot();
    expect(slot.getMinesAround()).to.equals(0);
  });

  it('should have three mines around', () => {
    const slot = buildMinelessSlot(3);
    expect(slot.getMinesAround()).to.equals(3);
  });

  it('should not have more than eight mines around', () => {
    expect(() => buildMinelessSlot(9)).to.throw(TooManyMines);
  });

  it('should not have less than zero mines around', () => {
    expect(() => buildMinelessSlot(-1)).to.throw(NoNegativeMines);
  });

  it('should have a flag', () => {
    const slot = buildMinelessSlot();
    slot.flag();
    expect(slot.hasFlag()).to.equals(true);
  });

  it('should not have a flag', () => {
    const slot = buildMinelessSlot();
    slot.flag();
    slot.unflag();
    expect(slot.hasFlag()).to.equals(false);
  });
});
