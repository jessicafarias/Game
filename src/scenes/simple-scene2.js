export class SimpleScene2 extends Phaser.Scene {
  preload() {
    this.load.image('cokecan', '../assets/cokecan.png');
  }

  create() {
    this.add.text(100, 100, 'Hello Phaser!');
    this.add.image(100, 200, 'cokecan');
  }
}


export var BootScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize:
  function BootScene (){
      Phaser.Scene.call(this, { key: 'BootScene' });
  },

  preload: function (){
    this.load.image('tiles', 'assets/map/spritesheet.png');
    this.load.tilemapTiledJSON('map', 'assets/map/map.json');
    this.load.spritesheet('player', 'assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
  },

  create: function (){
      this.scene.start('WorldScene');
  }
});




export var WorldScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize:

  function WorldScene (){
      Phaser.Scene.call(this, { key: 'WorldScene' });
  },
  preload: function (){
      
  },
  create: function (){
      // create your world here
      var map = this.make.tilemap({ key: 'map' });
        
      // first parameter is the name of the tilemap in tiled
      var tiles = map.addTilesetImage('spritesheet', 'tiles');
      
      // creating the layers
      var grass = map.createStaticLayer('Grass', tiles, 0, 0);
      var obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);
      
  }
});