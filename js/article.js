import MEDIUM_API_KEY from "../config.js";

// const baseURL = "https://medium2.p.rapidapi.com/article";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-KEY": MEDIUM_API_KEY,
    "X-RapidAPI-Host": "medium2.p.rapidapi.com",
  },
};

fetch("https://medium2.p.rapidapi.com/article/6e419b5cf658/html", options)
  .then((response) => response.json())
  .then((data) => {
    const readMore = () => {
      window.location.href = `./articles.html?currentArticle=${data.html}`;
    };

    const params = new URLSearchParams(window.location.search);
    const currentArticle = params.get("currentArticle");

    document.getElementById("output").innerHTML = currentArticle;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
