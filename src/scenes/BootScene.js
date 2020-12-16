export var BootScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize(){
    Phaser.Scene.call(this, { key: 'BootScene' });
  },

  preload(){
    this.load.image('tiles', 'assets/map/spritesheet.png');
    this.load.tilemapTiledJSON('map', 'assets/map/map.json');
    this.load.image("dragonblue", "assets/dragonblue.png");
    this.load.image("dragonorrange", "assets/dragonorrange.png");
    this.load.spritesheet('player', 'assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
  },

  create(){
    this.scene.start('WorldScene');
  }
});