import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'content',
  width: 320,
  height: 240,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 0 },
        debug: false // set to true to view zones
    }
  }
};