import {Menu} from './menu'
export var EnemiesMenu = new Phaser.Class({
  Extends: Menu,
  
  initialize:
          
  function EnemiesMenu(x, y, scene) {
      Menu.call(this, x, y, scene);        
  },       
  confirm() {      
      this.scene.events.emit("Enemy", this.menuItemIndex);
  }
});