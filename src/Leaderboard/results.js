require('regenerator-runtime/runtime');

const getData2 = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TpWk1ZvKQyd7ON6jgZbj/scores';
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
  });
  return response.json();
};

export default function getBest() {
  let json;
  try {
    json = getData2();
  } catch (error) {
    json = error;
  }
  return json;
}