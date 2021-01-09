![example workflow name](https://github.com/beeetooo/minesweeper/workflows/test/badge.svg)

# Minesweeper
Implementation of a Minesweeper game with a very minimalist software design
The UI at this moment is in console, and adding a new UI with HTML/CSS or with a graphics engine should be a matter of implementing the UI interface methods of `draw` and `drawGameOver`.

## Get Started
1. Use node 7.0.0
2. 
```sh
$ npm install
$ npm test
$ npm start
```

The code starts from minesweeper/app.js, so you can read how the objects are used to play the game.
To start playing the game, you put the row and column numbers between 0 and 9 at the moment, and you separate them with an space, and the slots will be revealing.
If you reveal a slot with a mine, you lose the game. Sorry, it is how it is.
