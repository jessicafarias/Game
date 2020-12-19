import Phaser from 'phaser';
import { Menu } from './menu';

export const HeroesMenu = new Phaser.Class({
  Extends: Menu,
  initialize(x, y, scene) {
    Menu.call(this, x, y, scene);
  },
});