const homeGeneralNewsContainer = document.querySelector(
  "#home-general-news-container"
);
const homeEntertainmentsNewsContainer = document.querySelector(
  "#home-entertainments-news-container"
);
const homeLifestyleNewsContainer = document.querySelector(
  "#home-lifestyle-news-container"
);

const homeSportsNewsContainer = document.querySelector(
  "#home-sports-news-container"
);

const asideContainer = document.querySelector(
  ".aside-articles-outermost-container"
);

// Render Posts on News Pages
async function renderPosts() {
  const generalNewsUrl = "http://localhost:3000/newsPost";
  const generalNewsRes = await fetch(generalNewsUrl);
  const generalNewsPosts = await generalNewsRes.json();

  const entertainmentsNewsUrl = "http://localhost:3000/entertainmentsPost";
  const entertainmentsNewsRes = await fetch(entertainmentsNewsUrl);
  const entertainmentsNewsPosts = await entertainmentsNewsRes.json();

  const lifestyleNewsUrl = "http://localhost:3000/lifestylePost";
  const lifestyleNewsRes = await fetch(lifestyleNewsUrl);
  const lifestyleNewsPosts = await lifestyleNewsRes.json();

  const sportsUrl = "http://localhost:3000/sportsPost";
  const sportsNewsRes = await fetch(sportsUrl);
  const sportsNewsPosts = await sportsNewsRes.json();

  // Render General News
  let generalNewsTemplate = " ";
  for (let i = 0; i < 4; i++) {
    generalNewsTemplate += `
        <div class="news-control">
          <a href="../pages/news/news-article-page.html?id=${generalNewsPosts[i].id}">
            <div class="news-control-img-container">
              <img class="news-control-img" src="../${generalNewsPosts[i].images.mainImg}" alt="${generalNewsPosts[i].title}"/>
            </div>
            <h3 class="news-heading">${generalNewsPosts[i].title}</h3>
            <h4 class="news-des">${generalNewsPosts[i].des}</h4>
          </a>
        </div>
      `;
  }
  homeGeneralNewsContainer.innerHTML = generalNewsTemplate;

  // Render General News
  let entertainmentsNewsTemplate = " ";
  for (let i = 0; i < 4; i++) {
    entertainmentsNewsTemplate += `
        <div class="news-control">
          <a href="../pages/entertainments/entertainments-article-page.html?id=${entertainmentsNewsPosts[i].id}">
            <div class="news-control-img-container">
              <img class="news-control-img" src="../${entertainmentsNewsPosts[i].images.mainImg}" alt="${entertainmentsNewsPosts[i].title}"/>
            </div>
            <h3 class="news-heading">${entertainmentsNewsPosts[i].title}</h3>
            <h4 class="news-des">${entertainmentsNewsPosts[i].des}</h4>
          </a>
        </div>
      `;
  }
  homeEntertainmentsNewsContainer.innerHTML = entertainmentsNewsTemplate;

  // Render Lifestyle News
  let lifestyleNewsTemplate = " ";
  for (let i = 0; i < 1; i++) {
    lifestyleNewsTemplate += `
        <div class="news-control">
          <a href="../pages/lifestyle/lifestyle-article-page.html?id=${lifestyleNewsPosts[i].id}">
            <div class="news-control-img-container">
              <img class="news-control-img" src="../${lifestyleNewsPosts[i].images.mainImg}" alt="${lifestyleNewsPosts[i].title}"/>
            </div>
            <h3 class="news-heading">${lifestyleNewsPosts[i].title}</h3>
            <h4 class="news-des">${lifestyleNewsPosts[i].des}</h4>
          </a>
        </div>
      `;
  }
  homeLifestyleNewsContainer.innerHTML = lifestyleNewsTemplate;

  // Render Sports News
  let sportsNewsTemplate = " ";
  for (let i = 0; i < 4; i++) {
    sportsNewsTemplate += `
        <div class="news-control">
          <a href="../pages/sports/sports-article-page.html?id=${sportsNewsPosts[i].id}">
            <div class="news-control-img-container">
              <img class="news-control-img" src="../${sportsNewsPosts[i].images.mainImg}" alt="${sportsNewsPosts[i].title}"/>
            </div>
            <h3 class="news-heading">${sportsNewsPosts[i].title}</h3>
            <h4 class="news-des">${sportsNewsPosts[i].des}</h4>
          </a>
        </div>
      `;
  }
  homeSportsNewsContainer.innerHTML = sportsNewsTemplate;

  // Recent News
  let recentNewsTemplate = " ";
  for (let i = 4; i < 8; i++) {
    recentNewsTemplate += `
        <a href="../pages/news/news-article-page.html?id=${generalNewsPosts[i].id}">
          <div class="aside-article-control">
            <div class="aside-article-img-container">
              <img class="aside-article-img" src="../${generalNewsPosts[i].images.mainImg}" alt="${generalNewsPosts[i].title}"/>
            </div>
            <div class="aside-article-text-container">
              <h3 class="aside-article-heading ">${generalNewsPosts[i].title}</h3>
              <h4 class="aside-article-des"></h4>
            </div>
          </div>
      </a>
      `;
  }
  asideContainer.innerHTML = recentNewsTemplate;

  // -------------------------------------------------------------------//
  // Aside Controls on Hover
  const allAsideArticleControl = document.querySelectorAll(
    ".aside-article-control"
  );
  Array.from(allAsideArticleControl).forEach((articleControl) => {
    articleControl.addEventListener("mouseover", (e) => {
      const articleImgContainer = articleControl.firstElementChild;
      articleImgContainer.firstElementChild.classList.add("article-img-hover");
      const articleHeading =
        articleImgContainer.nextElementSibling.firstElementChild;
      articleHeading.classList.add("article-heading-hover");
    });
    articleControl.addEventListener("mouseout", (e) => {
      const articleImgContainer = articleControl.firstElementChild;
      articleImgContainer.firstElementChild.classList.remove(
        "article-img-hover"
      );
      const articleHeading =
        articleImgContainer.nextElementSibling.firstElementChild;
      articleHeading.classList.remove("article-heading-hover");
    });
  });

  // News Controls On Hover
  const allNewsControl = document.querySelectorAll(".news-control");

  Array.from(allNewsControl).forEach((newsControl) => {
    newsControl.addEventListener("mouseover", (e) => {
      const newsImg = newsControl.firstElementChild.firstElementChild;
      newsImg.firstElementChild.classList.add("news-img-hover");
      const newsHeading = newsImg.nextElementSibling;
      newsHeading.classList.add("news-heading-hover");
    });
    newsControl.addEventListener("mouseout", (e) => {
      const newsImg = newsControl.firstElementChild.firstElementChild;
      const newsHeading = newsImg.nextElementSibling;
      newsHeading.classList.remove("news-heading-hover");
      newsImg.firstElementChild.classList.remove("news-img-hover");
    });
  });

  // Sub Banners Hover Effect
  const subNewsControl = document.querySelectorAll(".sub-news-control");

  Array.from(subNewsControl).forEach((newsControl) => {
    newsControl.addEventListener("mouseover", () => {
      const newsImg = newsControl.firstElementChild;
      newsImg.classList.add("img-hover");
      const newsHeading = newsImg.nextElementSibling.firstElementChild;
      newsHeading.classList.add("heading-hover");
    });
    newsControl.addEventListener("mouseout", () => {
      const newsImg = newsControl.firstElementChild;
      newsImg.classList.remove("img-hover");
      const newsHeading = newsImg.nextElementSibling.firstElementChild;
      newsHeading.classList.remove("heading-hover");
    });
  });
}
window.addEventListener("DOMContentLoaded", renderPosts());
