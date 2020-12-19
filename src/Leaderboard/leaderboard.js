require('regenerator-runtime/runtime');

export default function load() {
  const img = document.getElementById('jes');
  try {
    const getCats = async () => {
      const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=pfKKJEnGjBFYVmyT9w8YF3rV255vNTPm&s=cats', { mode: 'cors' });
      const catData = await response.json();
      img.src = catData.data.images.original.url;
    };
    getCats();
  } catch (error) {
    console.log(error);
  }
}