import Phaser from 'phaser';
import Menu from './menu';

export default class EnemiesMenu extends Menu {
  constructor(x, y, scene) {
    super(x, y, scene);
  }
  confirm() {
    this.scene.events.emit('Enemy', this.menuItemIndex);
  }
}