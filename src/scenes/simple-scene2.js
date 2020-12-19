import Phaser from 'phaser';
// import 'phaser';

export default class SimpleScene2 extends Phaser.Scene {
  preload() {
    this.load.image('cokecan', '../assets/cokecan.png');
  }

  create() {
    this.add.text(100, 70, 'Hello Im Mr.Coque');
    this.add.text(100, 90, 'UseArrows and space');
    this.add.text(100, 110, 'to control the game!');
    this.add.image(120, 200, 'cokecan');
    this.time.addEvent({ delay: 4000, callback: this.goto, callbackScope: this });
  }

  goto() {
    this.scene.start('BootScene');
  }
}