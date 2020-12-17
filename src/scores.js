import 'phaser';

export default class Score {
  constructor (wins=0) {
    this.winings = wins;
  }

  plus(){
    this.winings += 1;
  }

}