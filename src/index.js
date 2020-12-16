import 'phaser';
import WorldScene from './scenes/world';
import BootScene from './scenes/BootScene';
//import BootScene from './scenes/simple-scene2';
import UIScene from './scenes/uiscene'
import BattleScene from './scenes/battle'
import SimpleScene2 from './scenes/simple-scene2'
import config from './Config/config';


/*
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import Model from './Model';
*/


class Game extends Phaser.Game {
  constructor () {

    super(config);
    this.scene.add('SimpleScene2', SimpleScene2);
    this.scene.add('BootScene', BootScene);
    this.scene.add('WorldScene', WorldScene);
    this.scene.add('BattleScene', BattleScene);
    this.scene.add('UIScene', UIScene);
    //const model = new Model();
    //this.globals = { model, bgMusic: null };
    //this.scene.add('SimpleScene2', SimpleScene2);
    this.scene.start('SimpleScene2');

  }
}

window.game = new Game();
