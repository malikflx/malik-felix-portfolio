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
fetch("https://medium2.p.rapidapi.com/article/6e419b5cf658/", options)
  .then((response) => response.json())
  .then((data) => {
    const publishedDate = new Date(data.published_at);
    const articleTitle = data.title;
    const subtitle = data.subtitle;

    document.querySelector(".posted_on").innerText =
      publishedDate.toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });

    document.querySelector(".article-title").innerText = articleTitle;

    document.querySelector(".publication-subtitle").innerText = subtitle;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
