import VError from 'verror';

class MinesweeperError extends VError { }

class SlotWithMineRevealed extends MinesweeperError { }

class GameOver extends MinesweeperError { }

export {
  SlotWithMineRevealed,
  GameOver
}
