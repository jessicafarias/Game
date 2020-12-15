export class SimpleScene2 extends Phaser.Scene {
  preload() {
    this.load.image('cokecan', 'cokecan.png');
  }

  create() {
    this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
    this.add.image(100, 200, 'cokecan');
  }
}