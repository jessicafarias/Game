import Phaser from 'phaser';
import getBest from '../Leaderboard/results';

export default class ScoreScene extends Phaser.Scene {
  constructor() {
    super('ScoreScene');
  }

  create() {
    this.add.text(75, 20, 'Best 8 Players', { fontSize: '20px', fill: '#db2e00' });

    getBest().then(data => {
      const top = data.result.sort((a, b) => b.score - a.score);
      console.log();
      let a = 30;
      for (let i = 0; i < top.length; i += 1) {
        a += 20;
        this.add.text(50, a, top[i].user);
        this.add.text(250, a, top[i].score);
      }
    });
    this.time.addEvent({ delay: 5000, callback: this.goto, callbackScope: this });
  }

  goto() {
    this.scene.start('Title');
  }
}