import Menu from './menu';

export default class EnemiesMenu extends Menu {
  constructor(x, y, scene) {
    super(x, y, scene);
    this.x = x;
    this.y = y;
  }

  confirm() {
    this.scene.events.emit('Enemy', this.menuItemIndex);
  }
}