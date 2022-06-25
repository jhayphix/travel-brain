const newsControlContainer = document.querySelector(
  ".innermost-news-control-container"
);
const mainBanner = document.querySelector(".main-banner-news-container");
const subBanners = document.querySelector(".subs-banner-news-container");
const asideContainer = document.querySelector(
  ".aside-articles-outermost-container"
);

// Render Posts on News Pages
async function renderPosts() {
  const entertainmentsNewsUrl = "http://localhost:3000/entertainmentsPost";
  const entertainmentsNewsRes = await fetch(entertainmentsNewsUrl);
  const entertainmentsNewsPosts = await entertainmentsNewsRes.json();

  // Banner News
  const mainBannerNews = entertainmentsNewsPosts[0];
  let mainBannerTemplate = `
    <a href="../pages/entertainments/entertainments-article-page.html?id=${mainBannerNews.id}">
      <div class="main-banner-news-control">
        <img src="../${mainBannerNews.images.mainImg}" alt="${mainBannerNews.title}" class="main-banner-news-img">
        <div class="main-banner-text-container">
          <h3 class="main-banner-news-heading">${mainBannerNews.title}</h3>
        </div>
      </div>
   </a>
  `;
  mainBanner.innerHTML = mainBannerTemplate;

  // Sub Banner News
  let subBannersTemplate = " ";
  for (let i = 1; i < 5; i++) {
    subBannersTemplate += `
    <a href="../pages/entertainments/entertainments-article-page.html?id=${entertainmentsNewsPosts[i].id}">
      <div class="sub-news-control">
        <img src="../${entertainmentsNewsPosts[i].images.mainImg}" alt="${entertainmentsNewsPosts[i].title}" class="sub-news-img">
        <div class="sub-news-text-container">
          <h3 class="sub-news-heading">${entertainmentsNewsPosts[i].title}</h3>
        </div>
      </div>
    </a>
    `;
  }
  subBanners.innerHTML = subBannersTemplate;

  // All News
  let template = " ";
  for (let i = 5; i < entertainmentsNewsPosts.length; i++) {
    template += `
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

  newsControlContainer.innerHTML = template;

  // Recent News
  let recentNewsTemplate = " ";
  for (let i = 4; i < 8; i++) {
    recentNewsTemplate += `
        <a href="../pages/entertainments/entertainments-article-page.html?id=${entertainmentsNewsPosts[i].id}">
          <div class="aside-article-control">
            <div class="aside-article-img-container">
              <img class="aside-article-img" src="../${entertainmentsNewsPosts[i].images.mainImg}" alt="${entertainmentsNewsPosts[i].title}"/>
            </div>
            <div class="aside-article-text-container">
              <h3 class="aside-article-heading ">${entertainmentsNewsPosts[i].title}</h3>
              <h4 class="aside-article-des"></h4>
            </div>
          </div>
      </a>
      `;
  }
  asideContainer.innerHTML = recentNewsTemplate;

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
