export default class GameOver extends Phaser.Scene {
  constructor () {
    super('GameOver');
  }

  create() {
    var score = this.sys.game.globals.score.winings;
    this.add.text(0, 0, 'GAME OVER').setAlign('center');
    this.add.text(0, 50, 'Score: '+score);
  }
}