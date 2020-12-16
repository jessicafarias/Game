import 'phaser';
import { WorldScene } from './scenes/world';
import { BootScene } from './scenes/BootScene';
import {UIScene} from './scenes/uiscene'
import {BattleScene} from './scenes/battle'
import {SimpleScene2} from './scenes/simple-scene2'


var config = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 320,
  height: 240,
  zoom: 2,
  pixelArt: true,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 0 },
          debug: false // set to true to view zones
      }
  },
  scene: [
    SimpleScene2,
    BootScene,
    WorldScene,
    BattleScene,
    UIScene,
  ]
};

var gamescene = new Phaser.Game(config);