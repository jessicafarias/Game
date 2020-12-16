export class SimpleScene2 extends Phaser.Scene {
  preload() {
    this.load.image('cokecan', '../assets/cokecan.png');
  }
  

  create() {
    this.add.text(30, 70, "Hello Im Mr.Coque");
    this.add.text(30, 90, 'UseArrows and space');
    this.add.text(20, 110, 'to control the game!');
    this.add.image(100, 200, 'cokecan');
    this.time.addEvent({ delay: 4000, callback: this.goto, callbackScope: this });
  }

  goto(){
    this.scene.start('BootScene');
  }
}

