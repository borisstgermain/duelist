import {game} from './game.js';
import Grid from './grid.js';

game.init();

const grid = new Grid(game.scene, 8, 8);

game.start();
