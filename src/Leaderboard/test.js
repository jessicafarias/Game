require('regenerator-runtime/runtime');
const postData = async (url, data) =>{
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

export default function load2() {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const data = { name: 'JessFaGame' };
  try {
    postData(url, data)
      .then(data => {
        console.log(data);
      });
  } catch (error) {
    console.log(error);
  }
}

