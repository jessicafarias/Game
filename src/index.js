import Phaser from 'phaser';
import WorldScene from './scenes/world';
import BootScene from './scenes/BootScene';
import UIScene from './scenes/uiscene';
import BattleScene from './scenes/battle';
import SimpleScene2 from './scenes/simple-scene2';
import config from './Config/config';
import TitleScene from './scenes/TitleScene';
import Model from './Model';
import Preloader from './scenes/PreloaderScene';
import CreditsScene from './scenes/CreditsScene';
import Score from './scores';
import GameOver from './scenes/GameOver';
import ScoreScene from './scenes/ScoreScene';

require('regenerator-runtime/runtime');


class Game extends Phaser.Game {
  constructor() {
    super(config);

    const score = new Score();
    const model = new Model();
    this.globals = { model, bgMusic: null, score };

    this.scene.add('Preloader', Preloader);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('TitleScene', TitleScene);
    this.scene.add('SimpleScene2', SimpleScene2);
    this.scene.add('BootScene', BootScene);
    this.scene.add('WorldScene', WorldScene);
    this.scene.add('BattleScene', BattleScene);
    this.scene.add('UIScene', UIScene);
    this.scene.add('ScoreScene', ScoreScene);
    this.scene.add('GameOver', GameOver);
    this.scene.start('Preloader');
  }
}
const gam = new Game();
window.game = gam;
