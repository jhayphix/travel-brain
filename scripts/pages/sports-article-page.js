const id = new URLSearchParams(window.location.search).get("id");

const renderPostDetails = async () => {
  const allSportsUrl = "http://localhost:3000/sportsPost";
  const allSportsNewsRes = await fetch(allSportsUrl);
  const allSportsNewsPosts = await allSportsNewsRes.json();

  const sportsNewsRes = await fetch("http://localhost:3000/sportsPost/" + id);
  if (!sportsNewsRes.ok) {
    window.location.replace("/");
  }
  const sportsNewsPost = await sportsNewsRes.json();

  // Seo Title
  let seoTitle = document.querySelector("title");
  seoTitle.innerHTML = sportsNewsPost.meta.seoTitle;

  // Meta Description
  const metaDesc = document.querySelector("meta[name=description");
  metaDesc.setAttribute("content", `${sportsNewsPost.meta.metaDesc}`);

  // Meta Description
  const metaAuthor = document.querySelector("meta[name=author");
  metaAuthor.setAttribute("content", `${sportsNewsPost.meta.metaAuthor}`);

  // Meta Keywords
  const metaKeywords = document.querySelector("meta[name=keywords");
  metaKeywords.setAttribute("content", `${sportsNewsPost.meta.metaKeywords}`);

  // --------------------------------------------------------------------------
  // Article Header Content
  const navArticleTitle = document.querySelector("#navigation-article-title");
  navArticleTitle.innerHTML = sportsNewsPost.title;
  const articleTitle = document.querySelector(".article-main-header");
  articleTitle.innerHTML = sportsNewsPost.title;
  const articleAuthor = document.querySelector("#article-author");
  articleAuthor.innerHTML = sportsNewsPost.author;

  const articleBannerImgContainer = document.querySelector(
    ".article-header-img-container"
  );
  const articleHeaderImgTemp = `
    <img src="../../${sportsNewsPost.images.mainImg}" alt="${sportsNewsPost.title}" class="article-header-img">

    <p class="article-img-des">${sportsNewsPost.images.mainImgDes}</p>
  `;
  articleBannerImgContainer.innerHTML = articleHeaderImgTemp;

  // --------------------------------------------------------------------------
  // Article Body Content
  const articleTextContainer = document.querySelector(
    "#article-text-container"
  );
  articleTextContainer.innerHTML = sportsNewsPost.body;

  // --------------------------------------------------------------------------
  // Related Article
  // Page One
  const relatedArtPage1 = document.querySelector("#relatedArticlePage1");
  let relatedArtPage1Temp = " ";
  for (let i = 0; i < 4; i++) {
    relatedArtPage1Temp += `
      <div class="news-control">
        <a href="../../pages/sports/sports-article-page.html?id=${allSportsNewsPosts[i].id}">
          <div class="news-control-img-container">
            <img class="news-control-img" src="../../${allSportsNewsPosts[i].images.mainImg}" alt="${allSportsNewsPosts[i].title}"/>
          </div>
          <h3 class="news-heading">${allSportsNewsPosts[i].title}</h3>
          <h4 class="news-des">${allSportsNewsPosts[i].des}</h4>
        </a>
      </div>
      `;
  }
  relatedArtPage1.innerHTML = relatedArtPage1Temp;
  // Page Two
  const relatedArtPage2 = document.querySelector("#relatedArticlePage2");
  let relatedArtPage2Temp = " ";
  for (let i = 4; i < 8; i++) {
    relatedArtPage2Temp += `
      <div class="news-control">
        <a href="../../pages/sports/sports-article-page.html?id=${allSportsNewsPosts[i].id}">
          <div class="news-control-img-container">
            <img class="news-control-img" src="../../${allSportsNewsPosts[i].images.mainImg}" alt="${allSportsNewsPosts[i].title}"/>
          </div>
          <h3 class="news-heading">${allSportsNewsPosts[i].title}</h3>
          <h4 class="news-des">${allSportsNewsPosts[i].des}</h4>
        </a>
      </div>
      `;
  }
  relatedArtPage2.innerHTML = relatedArtPage2Temp;
  // Page Two
  const relatedArtPage3 = document.querySelector("#relatedArticlePage3");
  let relatedArtPage3Temp = " ";
  for (let i = 2; i < 6; i++) {
    relatedArtPage3Temp += `
      <div class="news-control">
        <a href="../../pages/sports/sports-article-page.html?id=${allSportsNewsPosts[i].id}">
          <div class="news-control-img-container">
            <img class="news-control-img" src="../../${allSportsNewsPosts[i].images.mainImg}" alt="${allSportsNewsPosts[i].title}"/>
          </div>
          <h3 class="news-heading">${allSportsNewsPosts[i].title}</h3>
          <h4 class="news-des">${allSportsNewsPosts[i].des}</h4>
        </a>
      </div>
      `;
  }
  relatedArtPage3.innerHTML = relatedArtPage3Temp;

  // --------------------------------------------------------------------------
  // Recent News
  const asideContainer = document.querySelector(
    ".aside-articles-outermost-container"
  );
  let recentNewsTemplate = " ";
  for (let i = 4; i < 8; i++) {
    recentNewsTemplate += `
        <a href="../../pages/sports/sports-article-page.html?id=${allSportsNewsPosts[i].id}">
          <div class="aside-article-control">
            <div class="aside-article-img-container">
              <img class="aside-article-img" src="../../${allSportsNewsPosts[i].images.mainImg}" alt="${allSportsNewsPosts[i].title}"/>
            </div>
            <div class="aside-article-text-container">
              <h3 class="aside-article-heading ">${allSportsNewsPosts[i].title}</h3>
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
    articleControl.style.cursor = "pointer";
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
};

window.addEventListener("DOMContentLoaded", renderPostDetails);
