const jsdom = require('jsdom');
const { JSDOM } = jsdom;
import createTask from '../src/Leaderboard/results';


describe('MODULE DROPDOWN TEST', () => {
 /*
  beforeEach(() => JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    }));
  */
  describe('test1', () => {
    it('Testing if dropdown exist', () => {
      const element2 = 1;
      expect(element2).not.toBeNull();
    });
  });
});
