export var Message = new Phaser.Class({
  Extends: Phaser.GameObjects.Container,
  initialize(scene, events) {
    Phaser.GameObjects.Container.call(this, scene, 160, 30);
    var graphics = this.scene.add.graphics();
    this.add(graphics);
    graphics.lineStyle(1, 0xffffff, 0.8);
    graphics.fillStyle(0x031f4c, 0.3);     
    graphics.strokeRect(-90, -15, 180,30);
    graphics.fillRect(-90, -15, 180, 30); 
    this.text = new Phaser.GameObjects.Text(scene, 0, 0, "", { color: "#ffffff", align: "center", fontSize: 13, wordWrap: { width: 170, useAdvancedWrap: true }});
    this.add(this.text);
    this.text.setOrigin(0.5);        
    events.on("Message", this.showMessage, this);
    this.visible = false;
  },
  showMessage(text) {
    this.text.setText(text);
    this.visible = true;
    if(this.hideEvent)
        this.hideEvent.remove(false);
    this.hideEvent = this.scene.time.addEvent({ delay: 1000, callback: this.hideMessage, callbackScope: this });
  },
  hideMessage() {
    this.hideEvent = null;
    this.visible = false;
  }
});