const id = new URLSearchParams(window.location.search).get("id");

const renderPostDetails = async () => {
  const allGeneralNewsUrl = "http://localhost:3000/newsPost";
  const allGeneralNewsRes = await fetch(allGeneralNewsUrl);
  const allGeneralNewsPosts = await allGeneralNewsRes.json();

  const generalNewsRes = await fetch("http://localhost:3000/newsPost/" + id);
  if (!generalNewsRes.ok) {
    window.location.replace("/");
  }
  const generalNewsPost = await generalNewsRes.json();

  // Seo Title
  let seoTitle = document.querySelector("title");
  seoTitle.innerHTML = generalNewsPost.meta.seoTitle;

  // Meta Description
  const metaDesc = document.querySelector("meta[name=description");
  metaDesc.setAttribute("content", `${generalNewsPost.meta.metaDesc}`);

  // Meta Description
  const metaAuthor = document.querySelector("meta[name=author");
  metaAuthor.setAttribute("content", `${generalNewsPost.meta.metaAuthor}`);

  // Meta Keywords
  const metaKeywords = document.querySelector("meta[name=keywords");
  metaKeywords.setAttribute("content", `${generalNewsPost.meta.metaKeywords}`);

  // --------------------------------------------------------------------------
  // Article Header Content
  const navArticleTitle = document.querySelector("#navigation-article-title");
  navArticleTitle.innerHTML = generalNewsPost.title;
  const articleTitle = document.querySelector(".article-main-header");
  articleTitle.innerHTML = generalNewsPost.title;
  const articleAuthor = document.querySelector("#article-author");
  articleAuthor.innerHTML = generalNewsPost.author;

  const articleBannerImgContainer = document.querySelector(
    ".article-header-img-container"
  );
  const articleHeaderImgTemp = `
    <img src="../../${generalNewsPost.images.mainImg}" alt="${generalNewsPost.title}" class="article-header-img">

    <p class="article-img-des">${generalNewsPost.images.mainImgDes}</p>
  `;
  articleBannerImgContainer.innerHTML = articleHeaderImgTemp;

  // --------------------------------------------------------------------------
  // Article Body Content
  const articleTextContainer = document.querySelector(
    "#article-text-container"
  );
  articleTextContainer.innerHTML = generalNewsPost.body;

  // --------------------------------------------------------------------------
  // Related Article
  // Page One
  const relatedArtPage1 = document.querySelector("#relatedArticlePage1");
  let relatedArtPage1Temp = " ";
  for (let i = 0; i < 4; i++) {
    relatedArtPage1Temp += `
      <div class="news-control">
        <a href="../../pages/news/news-article-page.html?id=${allGeneralNewsPosts[i].id}">
          <div class="news-control-img-container">
            <img class="news-control-img" src="../../${allGeneralNewsPosts[i].images.mainImg}" alt="${allGeneralNewsPosts[i].title}"/>
          </div>
          <h3 class="news-heading">${allGeneralNewsPosts[i].title}</h3>
          <h4 class="news-des">${allGeneralNewsPosts[i].des}</h4>
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
        <a href="../../pages/news/news-article-page.html?id=${allGeneralNewsPosts[i].id}">
          <div class="news-control-img-container">
            <img class="news-control-img" src="../../${allGeneralNewsPosts[i].images.mainImg}" alt="${allGeneralNewsPosts[i].title}"/>
          </div>
          <h3 class="news-heading">${allGeneralNewsPosts[i].title}</h3>
          <h4 class="news-des">${allGeneralNewsPosts[i].des}</h4>
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
        <a href="../../pages/news/news-article-page.html?id=${allGeneralNewsPosts[i].id}">
          <div class="news-control-img-container">
            <img class="news-control-img" src="../../${allGeneralNewsPosts[i].images.mainImg}" alt="${allGeneralNewsPosts[i].title}"/>
          </div>
          <h3 class="news-heading">${allGeneralNewsPosts[i].title}</h3>
          <h4 class="news-des">${allGeneralNewsPosts[i].des}</h4>
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
        <a href="../../pages/news/news-article-page.html?id=${allGeneralNewsPosts[i].id}">
          <div class="aside-article-control">
            <div class="aside-article-img-container">
              <img class="aside-article-img" src="../../${allGeneralNewsPosts[i].images.mainImg}" alt="${allGeneralNewsPosts[i].title}"/>
            </div>
            <div class="aside-article-text-container">
              <h3 class="aside-article-heading ">${allGeneralNewsPosts[i].title}</h3>
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
