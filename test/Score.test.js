import Score from '../src/scores';

describe('Testing Score class', () => {
  describe('testing methods', () => {
    const score = new Score();
    it('Create winings variable equal 0', () => {
      expect(score.winings).toBe(0);
    });

    it('Create status variable equal false', () => {
      expect(score.status).toBeFalsy();
    });

    it('Testing plus method to increase winings variable', () => {
      score.plus();
      expect(score.winings).toBe(1);
    });

    it('Testing gameOver to change status value', () => {
      score.gameover();
      expect(score.status).toBeTruthy();
    });

    it('Testing gameOver to change status value to false', () => {
      score.restart();
      score.gameover();
      expect(score.status).not.toBeFalsy();
    });

    it('Testing restart method to restart winings value', () => {
      score.restart();
      expect(score.winings).toBe(0);
    });

    it('Testing restart method not to be morethan 0', () => {
      score.restart();
      expect(score.winings).not.toBe(1);
    });

    it('Testing restart method to restart status value', () => {
      score.plus();
      score.restart();
      expect(score.status).toBeFalsy();
    });

    it('Testing not to be 0 after call plus method', () => {
      score.restart();
      score.plus();
      expect(score.status).not.toBe(0);
    });
  });
});
