import MEDIUM_API_KEY from "../config.js";

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
    const readMoreButton = document.querySelector(".readMore");
    const readMore = () => {
      window.location.href = `./articles.html?currentArticle=${data.html}`;
    };

    if (readMoreButton.classList.contains("readMore")) {
      document.querySelector(".readMore").addEventListener("click", readMore);
    }
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

fetch("https://medium2.p.rapidapi.com/article/6e419b5cf658/", options)
  .then((response) => response.json())
  .then((data) => {
    const publishedDate = new Date(data.published_at);
    const articleTitle = data.title;
    const subtitle = data.subtitle;
    const articleImage = data.image_url;

    document.querySelector(".posted_on").innerText =
      publishedDate.toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });

    document.querySelector(".article-title").innerText = articleTitle;

    document.querySelector(".publication-subtitle").innerText = subtitle;

    document.querySelector(".article-image").src = articleImage;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
