import Menu from './menu';

export default class HeroesMenu extends Menu {
  constructor(x, y, scene) {
    super(x, y, scene);
    this.x = x;
    this.y = y;
  }
}