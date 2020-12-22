import postData from '../src/Leaderboard/postscore';

describe('Testing get and post', () => {
  describe('testing methods', () => {
    it('Return true when post username and score', () => {
      const post = postData('username', 1);
      expect(post).toBeTruthy();
    });
    it('Return true when post new tablegame', () => {
      const post = postData('username', 1);
      expect(post).toBeTruthy();
    });
    it('Return true when post new tablegame fails', () => {
      const post = postData('username', 1);
      expect(post).not.toBeFalsy();
    });
  });
});
