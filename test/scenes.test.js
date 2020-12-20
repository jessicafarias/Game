import BootScene from '../src/scenes/BootScene';
import WorldScene from '../src/scenes/world';
import SimpleScene2 from '../src/scenes/simple-scene2'
import GameOver from '../src/scenes/GameOver';
import TitleScene from '../src/scenes/TitleScene';

describe('Testing Scenes', () => {
  describe('Testing BootScene', () => {
    it('Finished BootScene and WorldScene start', () => {
      const bootscene = new BootScene()
      expect(bootscene.getConfirmation()).toBe("Start WorldScene");
    });
    it('WorldScene finish and start GameOver scene', () => {
      const world = new WorldScene()
      expect(world.gameover()).toBe("change to GameOver scene");
    });
    it('Display instructions for 4 seconds', () => {
      const instructions = new SimpleScene2()
      expect(instructions.DisplayInstructions()).toBe("Displaying instruction for 4 seconds");
    });
    it('GameOver finish and start ScoreScene', () => {
      const gameOver = new GameOver()
      expect(gameOver.startScoreScene()).toBe("Starting ScoreScene");
    });

    it('Create buttons to select actions', () => {
      const btns = new TitleScene()
      expect(btns.createButtons()).toBeTruthy();
    });

  });
});