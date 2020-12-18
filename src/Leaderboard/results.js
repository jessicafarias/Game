//Get json table of scores 
require("regenerator-runtime/runtime");
export default function load3(){
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TpWk1ZvKQyd7ON6jgZbj/scores'
  const data = {"name": "JessFaGame"}
  try{
    async function getData(url) {
      const response = await fetch(url, {
        method: 'GET', 
        mode: 'cors',
        redirect: 'follow'
      });
      return await response.json();
    }
    getData(url, data)
      .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
      });
  }catch(error){
    console.log(error)
  }
}