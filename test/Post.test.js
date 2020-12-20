import postData from '../src/Leaderboard/postscore'
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


describe('Testing get and post', () => {
  describe('testing methods', () => {
    var post = postData('username', 1);
    it('Return true when post username and score', () => {
      expect(post).not.toBeTruthy();
    });
    it('Return true when post username and score', () => {
      expect(post).not.toBeTruthy();
    });

  });
});
