// Call to submit name and score
require('regenerator-runtime/runtime');

export default function submit(username, score) {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TpWk1ZvKQyd7ON6jgZbj/scores';
  const data = {
    user: `${username}`,
    score,
  };

  try {
    async function postData(url, data) {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        body: JSON.stringify(data),
      });
      return response.json();
    }
    postData(url, data)
      .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
      });
  } catch (error) {
    console.log(error);
  }
}