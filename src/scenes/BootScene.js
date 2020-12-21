import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    this.load.image('tiles', 'assets/map/spritesheet.png');
    this.load.tilemapTiledJSON('map', 'assets/map/map.json');
    this.load.image('dragonblue', 'assets/dragonblue.png');
    this.load.image('dragonorrange', 'assets/dragonorrange.png');
    this.load.spritesheet('player', 'assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('boom', 'assets/explosion.png', { frameWidth: 64, frameHeight: 64, endFrame: 23 });
  }

  create() {
    this.add.text(30, 70, 'Walk around to find');
    this.add.text(40, 90, 'enemies');
    this.time.addEvent({ delay: 1000, callback: this.goto, callbackScope: this });
  }

  goto() {
    this.scene.start('WorldScene');
  }
}