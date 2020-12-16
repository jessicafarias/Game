import {Menu} from './menu'

export var HeroesMenu = new Phaser.Class({
  Extends: Menu,
  
  initialize:
          
  function HeroesMenu(x, y, scene) {
      Menu.call(this, x, y, scene);                    
  }
});