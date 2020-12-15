import 'phaser';

import { SimpleScene2 } from './scenes/simple-scene2';

const gameConfig = {
  width: 680,
  height: 400,
  scene: SimpleScene2
};

new Phaser.Game(gameConfig);