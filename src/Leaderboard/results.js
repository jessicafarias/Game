// Get json table of scores
require('regenerator-runtime/runtime');

export default function getBest() {
  let json;
  try {
    async function getData2() {
      const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TpWk1ZvKQyd7ON6jgZbj/scores';
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
      });
      return await response.json();
    }
    json = getData2();
  } catch (error) {
    console.log(error);
  }
  return json;
}