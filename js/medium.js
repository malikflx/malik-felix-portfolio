import MEDIUM_API_KEY from "../config.js";

// const baseURL = "https://medium2.p.rapidapi.com/article";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-KEY": MEDIUM_API_KEY,
    "X-RapidAPI-Host": "medium2.p.rapidapi.com",
  },
};

fetch("https://medium2.p.rapidapi.com/article/6e419b5cf658/content", options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector(".publication").innerText = data.content;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
// .then((response) => console.log(response))
// .catch((err) => console.error(err));

// const mediumUrl = "https://medium2.p.rapidapi.com/article/6e419b5cf658/content";

// fetch(mediumUrl)
// .then(response => response.json())
// .then(data => {
//   data.result
// })
