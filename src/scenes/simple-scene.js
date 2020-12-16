export class SimpleScene extends Phaser.Scene {
  create() {
    this.add.text(100, 100, 'GAME OVER');
    this.add.text(70, 100, 'Space to start again');
  }
}