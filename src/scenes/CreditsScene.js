import Phaser from 'phaser';
import config from '../Config/config';

/* eslint-disable no-unused-expressions */

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.creditsText = this.add.text(20, 20, 'Credits', { fontSize: '30px', fill: '#fff' });
    this.madeByText2 = this.add.text(40, 0, 'Jessica Michelle Farias', { fontSize: '15px', fill: '#FF5733' });
    this.madeByText = this.add.text(25, 0, 'jessica.farias.rosado@gmail.com', { fontSize: '15px', fill: '#FF5733' });
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.madeByText,
      this.madeByText2,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      [this.madeByText,
        this.madeByText2],
      this.zone,
    );

    this.madeByText.setY(200);
    this.madeByText2.setY(250);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -10,
      ease: 'Power1',
      duration: 4000,
      delay: 500,
      onComplete() {
        this.destroy;
      },
    });

    this.madeByTween = this.tweens.add({
      targets: [this.madeByText, this.madeByText2],
      y: -10,
      ease: 'Power1',
      duration: 4000,
      delay: 500,
      onComplete: function () {
        this.madeByTween.destroy;
        this.scene.start('Title');
      }.bind(this),
    });
  }
}
