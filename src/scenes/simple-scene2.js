import Phaser from 'phaser';

export default class SimpleScene2 extends Phaser.Scene {
  preload() {
    this.load.image('cokecan', '../assets/cokecan.png');
    this.load.image('space', '../assets/space.png');
  }

  create() {
    this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');
    this.add.text(70, 50, 'UseArrows and space');
    this.add.text(70, 70, 'to control the game!');
    this.add.image(70, 150, 'cokecan');
    this.add.image(180, 150, 'space');
    this.add.text(120, 180, 'select option');
    this.add.text(135, 195, 'to attack');
    this.time.addEvent({ delay: 4000, callback: this.goto, callbackScope: this });
    DisplayInstructions();
  }

  goto() {
    this.scene.start('BootScene');
  }

  DisplayInstructions(){
    return "Displaying instruction for 4 seconds"
  }
}