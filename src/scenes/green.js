export class SimpleScene22 extends Phaser.Scene {
  SimpleScene22(){
    Phaser.Scene.call(this, { key: 'SimpleScene22' });
  }

  preload(){
    this.load.image('tiles', 'assets/map/spritesheet.png');
    this.load.tilemapTiledJSON('map', 'assets/map/map.json');
    this.load.spritesheet('player', 'assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
    
  }
  create() {
    this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
    this.add.image(100, 200, 'player');
    WorldScene.WorldScene();
    this.scene.start('WorldScene');
  }
}

export class WorldScene extends Phaser.Scene {
  WorldScene(){
    Phaser.Scene.call(this, { key: 'WorldScene' });
  }
  preload(){
    this.load.image('tiles', 'assets/map/spritesheet.png');
    this.load.tilemapTiledJSON('map', 'assets/map/map.json');
    this.load.spritesheet('player', 'assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
  }
  create(){
    var map = this.make.tilemap({ key: 'map' });
    var tiles = map.addTilesetImage('spritesheet', 'tiles');
    var grass = map.createStaticLayer('Grass', tiles, 0, 0);
    var obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);
    this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
    this.add.image(100, 200, 'player');
  }
}