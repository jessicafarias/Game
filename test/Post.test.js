import postData from '../src/Leaderboard/postscore';

describe('Testing get and post', () => {
  describe('testing methods', () => {
    const post = postData('username', 1);
    it('Return true when post username and score', () => {
      expect(post).toBeTruthy();
    });
    it('Return true when post new tablegame', () => {
      expect(post).toBeTruthy();
    });
  });
});
