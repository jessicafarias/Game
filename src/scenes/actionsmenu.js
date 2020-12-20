import Menu from './menu';

export default class ActionsMenu extends Menu {
  constructor(x, y, scene) {
    super(x, y, scene);
    this.addMenuItem('Attack');
  }
  confirm() {
    this.scene.events.emit('SelectedAction');
  }
}