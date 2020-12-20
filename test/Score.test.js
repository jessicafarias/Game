import Score from '../src/scores';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;



describe('Score test', () => {
  describe('testing methods', () => {
    var a = new Score();
    it('Create winings variable equal 0', () => {
      expect(a.winings).toBe(0);
    });

    it('Create status variable equal false', () => {
      expect(a.status).toBeFalsy();
    });

    it('Testing plus method to increase winings variable', () => {
      a.plus();
      expect(a.winings).toBe(1);
    });

    it('Testing gameOver to change status value', () => {
      a.gameover();
      expect(a.status).toBeTruthy();
    });

    it('Testing restart method to restart winings value', () => {
      a.restart()
      expect(a.winings).toBe(0);
    });

    it('Testing restart method to restart status value', () => {
      a.restart()
      expect(a.status).toBeFalsy();
    });
  });
});
