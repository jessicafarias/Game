import 'phaser';
import WorldScene from './scenes/world';
import BootScene from './scenes/BootScene';
//import BootScene from './scenes/simple-scene2';
import UIScene from './scenes/uiscene'
import BattleScene from './scenes/battle'
import SimpleScene2 from './scenes/simple-scene2'
import config from './Config/config';
import TitleScene from './scenes/TitleScene'
import Model from './Model';
import Preloader from './scenes/PreloaderScene'
import CreditsScene from './scenes/CreditsScene'

class Game extends Phaser.Game {
  constructor () {

    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };

    this.scene.add('Preloader', Preloader)
    this.scene.add('Credits', CreditsScene)
    this.scene.add('TitleScene',TitleScene);
    this.scene.add('SimpleScene2', SimpleScene2);
    this.scene.add('BootScene', BootScene);
    this.scene.add('WorldScene', WorldScene);
    this.scene.add('BattleScene', BattleScene);
    this.scene.add('UIScene', UIScene);
    this.scene.start('Preloader');

  }
}

window.game = new Game();
