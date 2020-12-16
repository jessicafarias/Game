import {Menu} from './menu'

export var ActionsMenu = new Phaser.Class({
  Extends: Menu,
  initialize:
          
  function ActionsMenu(x, y, scene) {
      Menu.call(this, x, y, scene);   
      this.addMenuItem("Attack");
  },
  confirm() { 
      this.scene.events.emit("SelectedAction");        
  }
  
});