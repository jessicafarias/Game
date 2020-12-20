import Phaser from 'phaser';
import getBest from '../Leaderboard/results';

let name;
let win;

export default class ScoreScene extends Phaser.Scene {
  constructor() {
    super('ScoreScene');
  }

  init(data) {
    name = data.name;
    win = data.win;
  }

  create() {
    this.add.text(75, 20, 'Best Players', { fontSize: '20px', fill: '#db2e00' });

    this.add.text(50, 50, `*${name}*`, { fill: '#FF5733' });
    this.add.text(250, 50, win, { fill: '#FF5733' });

    getBest().then(data => {
      const top = data.result.sort((a, b) => b.score - a.score);
      let a = 50;
      for (let i = 0; i < 8; i += 1) {
        a += 20;
        this.add.text(50, a, `${[i + 1]}.${top[i].user}`);
        this.add.text(250, a, top[i + 1].score);
      }
    });
    this.time.addEvent({ delay: 5000, callback: this.goto, callbackScope: this });
  }

  goto() {
    this.scene.start('Title');
  }
}