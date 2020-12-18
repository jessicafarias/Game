import 'phaser';
require("regenerator-runtime/runtime");

import WorldScene from './scenes/world';
import BootScene from './scenes/BootScene';
import UIScene from './scenes/uiscene'
import BattleScene from './scenes/battle'
import SimpleScene2 from './scenes/simple-scene2'
import config from './Config/config';
import TitleScene from './scenes/TitleScene'
import Model from './Model';
import Preloader from './scenes/PreloaderScene'
import CreditsScene from './scenes/CreditsScene'
import Score from './scores'

class Game extends Phaser.Game {
  constructor () {
    super(config);
    
    let score = new Score();
    const model = new Model();
    this.globals = { model, bgMusic: null, score };

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
let gam = new Game();
window.game = gam;
window.onload = function(){
  const img = document.getElementById('jes');
  
  try{
    async function getCats(){
      const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=pfKKJEnGjBFYVmyT9w8YF3rV255vNTPm&s=cats',{mode:"cors"});
      const catData = await response.json();
      img.src= catData.data.images.original.url; 
    }
    getCats();
  }catch(error){
    console.log(error);
  }
}
