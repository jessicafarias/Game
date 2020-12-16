import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('BootScene');
  }

  preload(){
    this.load.image('tiles', 'assets/map/spritesheet.png');
    this.load.tilemapTiledJSON('map', 'assets/map/map.json');
    this.load.image("dragonblue", "assets/dragonblue.png");
    this.load.image("dragonorrange", "assets/dragonorrange.png");
    this.load.spritesheet('player', 'assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
  }

  create() {
    this.add.text(30, 70, "this is bootsceene");
    this.time.addEvent({ delay: 4000, callback: this.goto, callbackScope: this });
  }

  goto(){
    this.scene.start('WorldScene');
  }
};