import Phaser from 'phaser';

const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
let score;

export default class Demo extends Phaser.Scene {
  constructor() {
    super('Demo');
  }

  preload() {
    this.load.image('user', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/person.png');

    this.load.scenePlugin({
      key: 'rexuiplugin',
      url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
      sceneKey: 'rexUI',
    });
  }

  create() {
    score = this.sys.game.globals.score.winings;

    this.add.text(100, 30, 'Game over', { color: 'white', fontSize: '20px ' });
    CreateLoginDialog(this, {
      x: 150,
      y: 120,
      title: `Your score: ${score}`,
      username: 'name',
    }).on('login', (username) => {
      print.text += `${username}\n`;
    }).popUp(500);
  }

  update() { }
}

const { GetValue } = Phaser.Utils.Objects;
var CreateLoginDialog = function (scene, config, onSubmit) {
  let username = GetValue(config, 'username', '');
  const title = GetValue(config, 'title', 'Welcome');
  const x = GetValue(config, 'x', 0);
  const y = GetValue(config, 'y', 0);
  const width = GetValue(config, 'width', undefined);
  const height = GetValue(config, 'height', undefined);

  const background = scene.rexUI.add.roundRectangle(0, 0, 10, 10, 10, COLOR_PRIMARY);
  const titleField = scene.add.text(0, 0, title);
  var userNameField = scene.rexUI.add.label({
    orientation: 'x',
    background: scene.rexUI.add.roundRectangle(0, 0, 10, 10, 10).setStrokeStyle(2, COLOR_LIGHT),
    icon: scene.add.image(0, 0, 'user'),
    text: scene.rexUI.add.BBCodeText(0, 0, username, { fixedWidth: 150, fixedHeight: 36, valign: 'center' }),
    space: {
      top: 5, bottom: 5, left: 5, right: 5, icon: 10,
    },
  })
    .setInteractive()
    .on('pointerdown', () => {
      const config = {
        onTextChanged(textObject, text) {
          username = text;
          textObject.text = text;
        },
      };
      scene.rexUI.edit(userNameField.getElement('text'), config);
    });

  const loginButton = scene.rexUI.add.label({
    orientation: 'x',
    background: scene.rexUI.add.roundRectangle(0, 0, 10, 10, 10, COLOR_LIGHT),
    text: scene.add.text(0, 0, 'Save score'),
    space: {
      top: 8, bottom: 8, left: 8, right: 8,
    },
  })
    .setInteractive()
    .on('pointerdown', () => {
      loginDialog.emit('login', username);
      console.log(username);
      console.log(score);
    });

  var loginDialog = scene.rexUI.add.sizer({
    orientation: 'y',
    x,
    y,
    width,
    height,
  })
    .addBackground(background)
    .add(titleField, 0, 'center', {
      top: 10, bottom: 10, left: 10, right: 10,
    }, false)
    .add(userNameField, 0, 'left', { bottom: 10, left: 10, right: 10 }, true)
    .add(loginButton, 0, 'center', { bottom: 10, left: 10, right: 10 }, false)
    .layout();
  return loginDialog;
};