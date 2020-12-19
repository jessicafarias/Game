require('regenerator-runtime/runtime');

export default function load2() {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const data = { name: 'JessFaGame' };
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
        console.log(data);
      });
  } catch (error) {
    console.log(error);
  }
}
