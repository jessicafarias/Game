import submit from '../Leaderboard/postscore';
const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
var score;
var done=false;

export default class GameOver extends Phaser.Scene {
  constructor () {
      super('GameOver');
  }

  preload() {
    this.load.image('user', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/person.png');
  
    this.load.scenePlugin({
      key: 'rexuiplugin',
      url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
      sceneKey: 'rexUI'
    });        
  }

  create() {
    score = this.sys.game.globals.score.winings;


    var text = this.add.text(100, 30, 'Game over', { color: 'white', fontSize: '20px '});
    var loginDialog = CreateLoginDialog(this, {
      x: 150,
      y: 120,
      title: 'Your score: '+score,
      username: 'name'
    }).on('login', function (username) {
          print.text += `${username}\n`;
      }).popUp(500);
  }
    update() {
      if((score==0)||done){
        this.sys.game.globals.score.restart();
        this.scene.start("ScoreScene")
      }
    }
}

const GetValue = Phaser.Utils.Objects.GetValue;
var CreateLoginDialog = function (scene, config, onSubmit) {
    var username = GetValue(config, 'username', '');
    var title = GetValue(config, 'title', 'Welcome');
    var x = GetValue(config, 'x', 0);
    var y = GetValue(config, 'y', 0);
    var width = GetValue(config, 'width', undefined);
    var height = GetValue(config, 'height', undefined);

    var background = scene.rexUI.add.roundRectangle(0, 0, 10, 10, 10, COLOR_PRIMARY);
    var titleField = scene.add.text(0, 0, title);
    var userNameField = scene.rexUI.add.label({
        orientation: 'x',
        background: scene.rexUI.add.roundRectangle(0, 0, 10, 10, 10).setStrokeStyle(2, COLOR_LIGHT),
        icon: scene.add.image(0, 0, 'user'),
        text: scene.rexUI.add.BBCodeText(0, 0, username, { fixedWidth: 150, fixedHeight: 36, valign: 'center' }),
        space: { top: 5, bottom: 5, left: 5, right: 5, icon: 10, }
    })
        .setInteractive()
        .on('pointerdown', function () {
            var config = {
                onTextChanged: function(textObject, text) {
                    username = text;
                    textObject.text = text;  
                }
            }
            scene.rexUI.edit(userNameField.getElement('text'), config);
        });

    var loginButton = scene.rexUI.add.label({
        orientation: 'x',
        background: scene.rexUI.add.roundRectangle(0, 0, 10, 10, 10, COLOR_LIGHT),
        text: scene.add.text(0, 0, 'Save score'),
        space: { top: 8, bottom: 8, left: 8, right: 8 }
    })
        .setInteractive()
        .on('pointerdown', function () {
            loginDialog.emit('login', username);
            //submit(username,score);
            done=true;
        });

    var loginDialog = scene.rexUI.add.sizer({
        orientation: 'y',
        x: x,
        y: y,
        width: width,
        height: height,
    })
        .addBackground(background)
        .add(titleField, 0, 'center', { top: 10, bottom: 10, left: 10, right: 10 }, false)
        .add(userNameField, 0, 'left', { bottom: 10, left: 10, right: 10 }, true)
        .add(loginButton, 0, 'center', { bottom: 10, left: 10, right: 10 }, false)
        .layout();
    return loginDialog;
};