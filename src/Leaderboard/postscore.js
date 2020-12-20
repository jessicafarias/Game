require('regenerator-runtime/runtime');

const postData = async (url, data) => {
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
};

export default function submit(username, score) {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TpWk1ZvKQyd7ON6jgZbj/scores';
  const data = {
    user: `${username}`,
    score,
  };
  try {
    postData(url, data)
      .then(data => data);
    return true;
  } catch (error) {
    return false;
  }
}
