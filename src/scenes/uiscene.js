import {Message} from './messaje'
import {HeroesMenu} from './heroesmenu'
import {ActionsMenu} from './actionsmenu'
import {EnemiesMenu} from './enemiesmenu'
export var UIScene = new Phaser.Class({

  Extends: Phaser.Scene,
  initialize:
  function UIScene (){
    Phaser.Scene.call(this, { key: "UIScene" });
  },

  create(){    
    this.graphics = this.add.graphics();
    this.graphics.lineStyle(1, 0xffffff);
    this.graphics.fillStyle(0x031f4c, 1);        
    this.graphics.strokeRect(2, 150, 90, 100);
    this.graphics.fillRect(2, 150, 90, 100);
    this.graphics.strokeRect(95, 150, 90, 100);
    this.graphics.fillRect(95, 150, 90, 100);
    this.graphics.strokeRect(188, 150, 130, 100);
    this.graphics.fillRect(188, 150, 130, 100);
    
    this.menus = this.add.container();              
    this.heroesMenu = new HeroesMenu(195, 153, this);           
    this.actionsMenu = new ActionsMenu(100, 153, this);            
    this.enemiesMenu = new EnemiesMenu(8, 153, this);   
    
    this.currentMenu = this.actionsMenu;   
    this.menus.add(this.heroesMenu);
    this.menus.add(this.actionsMenu);
    this.menus.add(this.enemiesMenu);
            
    this.battleScene = this.scene.get("BattleScene");                                
    this.input.keyboard.on("keydown", this.onKeyInput, this);   
    this.battleScene.events.on("PlayerSelect", this.onPlayerSelect, this);
    this.events.on("SelectedAction", this.onSelectedAction, this);
    this.events.on("Enemy", this.onEnemy, this);
    this.sys.events.on('wake', this.createMenu, this);
    this.message = new Message(this, this.battleScene.events);
    this.add.existing(this.message);        
    this.createMenu();     
  },
  createMenu() {
      this.remapHeroes();
      this.remapEnemies();
      this.battleScene.nextTurn(); 
  },
  onEnemy(index) {
    this.heroesMenu.deselect();
    this.actionsMenu.deselect();
    this.enemiesMenu.deselect();
    this.currentMenu = null;
    this.battleScene.receivePlayerSelection("attack", index);   
  },
  onPlayerSelect(id) {
    this.heroesMenu.select(id);
    this.actionsMenu.select(0);
    this.currentMenu = this.actionsMenu;
  },
  onSelectedAction() {
    this.currentMenu = this.enemiesMenu;
    this.enemiesMenu.select(0);
  },
  remapHeroes() {
    var heroes = this.battleScene.heroes;
    this.heroesMenu.remap(heroes);
  },
  remapEnemies() {
    var enemies = this.battleScene.enemies;
    this.enemiesMenu.remap(enemies);
  },
  onKeyInput(event) {
    if(this.currentMenu && this.currentMenu.selected) {
      if(event.code === "ArrowUp") {
          this.currentMenu.moveSelectionUp();
      } else if(event.code === "ArrowDown") {
          this.currentMenu.moveSelectionDown();
      } else if(event.code === "ArrowRight" || event.code === "Shift") {

      } else if(event.code === "Space" || event.code === "ArrowLeft") {
          this.currentMenu.confirm();
      } 
    }
  },
});