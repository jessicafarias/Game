import 'phaser';
import {PlayerCharacter} from './player'
import {Enemy} from './enemy'
var a,b,c,d,dragonblue, dragonOrange,warrior,mage;
export default class BattleScene extends Phaser.Scene {
  constructor () {
    super('BattleScene');
  }

  create(){
    this.cameras.main.setBackgroundColor("rgba(0, 200, 0, 0.5)");
    this.startBattle();
    this.sys.events.on('wake', this.startBattle, this);
              
  }
  startBattle() {
    var dam = Math.floor(Math.random() * 16) + 10;
    var dam2 = Math.floor(Math.random() * 16) + 10;
    var dam3 = Math.floor(Math.random() * 16) + 10;
    var dam4 = Math.floor(Math.random() * 16) + 10;


    dragonblue = new Enemy(this, 50, 50, "dragonblue", null, "Dragon", 30, dam3);
    this.add.existing(dragonblue);
    dragonOrange = new Enemy(this, 50, 100, "dragonorrange", null,"Dragon2", 20, dam4);
    this.add.existing(dragonOrange);
    mage = new PlayerCharacter(this, 250, 100, "player", 4, "Jessi", 20, dam2);
    this.add.existing(mage);            
    warrior = new PlayerCharacter(this, 250, 50, "player", 1, "Warrior", 10,dam)  
    this.add.existing(warrior);

    const config2 = {
      key: 'explode2',
      frames: this.anims.generateFrameNumbers('boom', { start: 0, end: 23 }),
      frameRate: 20,
      repeat: -1
    };
    this.anims.create(config2);
    a= this.add.sprite(50, 50, 'boom').play('explode2');
    b= this.add.sprite(50, 100, 'boom').play('explode2');
    c= this.add.sprite(250, 100, 'boom').play('explode2');
    d= this.add.sprite(250, 50, 'boom').play('explode2');
    a.visible=false;
    b.visible=false;
    c.visible=false;
    d.visible=false;


    this.heroes = [ warrior, mage ];
    this.enemies = [ dragonblue, dragonOrange ];
    this.units = this.heroes.concat(this.enemies);
    this.index = -1; 
    this.scene.run("UIScene");        
  }
  nextTurn() {  
    if(this.checkEndBattle()) {           
        this.endBattle();
        return;
    }
    do {
        this.index++;
        if(this.index >= this.units.length) {
            this.index = 0;
        }            
    } while(!this.units[this.index].living);
    if(this.units[this.index] instanceof PlayerCharacter) {
        this.events.emit("PlayerSelect", this.index);
    } else { 
        var r;
        do {
            r = Math.floor(Math.random() * this.heroes.length);
        } while(!this.heroes[r].living) 
        this.units[this.index].attack(this.heroes[r]);  
        this.time.addEvent({ delay: 1500, callback: this.nextTurn, callbackScope: this });
    }
  } 
  checkEndBattle() {        
    var victory = true;
    for(var i = 0; i < this.enemies.length; i++) {
        if(this.enemies[i].living){
          victory = false;
        }
    }
    var gameOver = true;
    for(var i = 0; i < this.heroes.length; i++) {
        if(this.heroes[i].living){
          gameOver = false;
        }
    }
    if(victory){
      this.sys.game.globals.score.plus();
    } 
    return victory || gameOver;
  }
  receivePlayerSelection(action, target) {
    if(action == "attack") {            
        this.units[this.index].attack(this.enemies[target]);              
    }
    this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });        
  }  
  endBattle() {       
    this.heroes.length = 0;
    this.enemies.length = 0;
    for(var i = 0; i < this.units.length; i++) {
        this.units[i].destroy();            
    }
    a.visible=false;
    b.visible=false;
    this.units.length = 0;
    this.scene.sleep('UIScene');
    this.scene.switch('WorldScene');
  }
  update(){
    if(dragonblue.hp <= 0){
      a.visible=true;
    }
    if(dragonOrange.hp <= 0){
      b.visible=true;
    }
    if(mage.hp <= 0){
      c.visible=true;
    }
    if(warrior.hp <= 0){
      d.visible=true;
    }
  }
};
