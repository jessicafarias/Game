import 'phaser';
import config from '../Config/config';

export default class CreditsScene extends Phaser.Scene {
  constructor () {
    super('Credits');
  }

  create () {
    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '20px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'jessica.farias.rosado@gmail.com', { fontSize: '15px', fill: '#FF5733' });
    this.madeByText2 = this.add.text(0, 0, 'Jessica Michelle Farias', { fontSize: '15px', fill: '#FF5733' });

    this.zone = this.add.zone(config.width/2, config.height/2, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone
    );

    Phaser.Display.Align.In.Center(
      [this.madeByText,
      this.madeByText2],
      this.zone
    );

    this.madeByText.setY(200);
    this.madeByText2.setY(300);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 4000,
      delay: 500,
      onComplete: function () {
        this.destroy;
      }
    });

    this.madeByTween = this.tweens.add({
      targets: [this.madeByText,this.madeByText2],
      y: -300,
      ease: 'Power1',
      duration: 6000,
      delay: 1000,
      onComplete: function () {
        this.madeByTween.destroy;
        this.scene.start('Title');
      }.bind(this)
    });
  }
};