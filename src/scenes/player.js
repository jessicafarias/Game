import Phaser from 'phaser';

import { Unit } from './unit';

export var PlayerCharacter = new Phaser.Class({
  Extends: Unit,
  initialize:
  function PlayerCharacter(scene, x, y, texture, frame, type, hp, damage) {
    Unit.call(this, scene, x, y, texture, frame, type, hp, damage);
    this.flipX = true;
    this.setScale(2);
  },
});