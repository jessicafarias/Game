import 'phaser';

export default class Score {
  constructor (wins=0) {
    this.winings = wins;
    this.status = false;
  }

  plus(){
    this.winings += 1;
  }

  gameover(){
    this.status=true;
  }

  restart(){
    this.status=false;
    this.winings=0;
  }

}