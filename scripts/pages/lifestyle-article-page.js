const id = new URLSearchParams(window.location.search).get("id");

const renderPostDetails = async () => {
  const allLifestyleUrl = "http://localhost:3000/lifestylePost";
  const allLifestyleRes = await fetch(allLifestyleUrl);
  const allLifestylePosts = await allLifestyleRes.json();

  const lifestyleRes = await fetch("http://localhost:3000/lifestylePost/" + id);
  if (!lifestyleRes.ok) {
    window.location.replace("/");
  }
  const lifestylePost = await lifestyleRes.json();

  // Seo Title
  let seoTitle = document.querySelector("title");
  seoTitle.innerHTML = lifestylePost.meta.seoTitle;

  // Meta Description
  const metaDesc = document.querySelector("meta[name=description");
  metaDesc.setAttribute("content", `${lifestylePost.meta.metaDesc}`);

  // Meta Description
  const metaAuthor = document.querySelector("meta[name=author");
  metaAuthor.setAttribute("content", `${lifestylePost.meta.metaAuthor}`);

  // Meta Keywords
  const metaKeywords = document.querySelector("meta[name=keywords");
  metaKeywords.setAttribute("content", `${lifestylePost.meta.metaKeywords}`);

  // --------------------------------------------------------------------------
  // Article Header Content
  const navArticleTitle = document.querySelector("#navigation-article-title");
  navArticleTitle.innerHTML = lifestylePost.title;
  const articleTitle = document.querySelector(".article-main-header");
  articleTitle.innerHTML = lifestylePost.title;
  const articleAuthor = document.querySelector("#article-author");
  articleAuthor.innerHTML = lifestylePost.author;

  const articleBannerImgContainer = document.querySelector(
    ".article-header-img-container"
  );
  const articleHeaderImgTemp = `
    <img src="../../${lifestylePost.images.mainImg}" alt="${lifestylePost.title}" class="article-header-img">

    <p class="article-img-des">${lifestylePost.images.mainImgDes}</p>
  `;
  articleBannerImgContainer.innerHTML = articleHeaderImgTemp;

  // --------------------------------------------------------------------------
  // Article Body Content
  const articleTextContainer = document.querySelector(
    "#article-text-container"
  );
  articleTextContainer.innerHTML = lifestylePost.body;

  // --------------------------------------------------------------------------
  // Related Article
  // Page One
  const relatedArtPage1 = document.querySelector("#relatedArticlePage1");
  let relatedArtPage1Temp = " ";
  for (let i = 0; i < 4; i++) {
    relatedArtPage1Temp += `
      <div class="news-control">
        <a href="../../pages/lifestyle/lifestyle-article-page.html?id=${allLifestylePosts[i].id}">
          <div class="news-control-img-container">
            <img class="news-control-img" src="../../${allLifestylePosts[i].images.mainImg}" alt="${allLifestylePosts[i].title}"/>
          </div>
          <h3 class="news-heading">${allLifestylePosts[i].title}</h3>
          <h4 class="news-des">${allLifestylePosts[i].des}</h4>
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
        <a href="../../pages/lifestyle/lifestyle-article-page.html?id=${allLifestylePosts[i].id}">
          <div class="news-control-img-container">
            <img class="news-control-img" src="../../${allLifestylePosts[i].images.mainImg}" alt="${allLifestylePosts[i].title}"/>
          </div>
          <h3 class="news-heading">${allLifestylePosts[i].title}</h3>
          <h4 class="news-des">${allLifestylePosts[i].des}</h4>
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
        <a href="../../pages/lifestyle/lifestyle-article-page.html?id=${allLifestylePosts[i].id}">
          <div class="news-control-img-container">
            <img class="news-control-img" src="../../${allLifestylePosts[i].images.mainImg}" alt="${allLifestylePosts[i].title}"/>
          </div>
          <h3 class="news-heading">${allLifestylePosts[i].title}</h3>
          <h4 class="news-des">${allLifestylePosts[i].des}</h4>
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
        <a href="../../pages/lifestyle/lifestyle-article-page.html?id=${allLifestylePosts[i].id}">
          <div class="aside-article-control">
            <div class="aside-article-img-container">
              <img class="aside-article-img" src="../../${allLifestylePosts[i].images.mainImg}" alt="${allLifestylePosts[i].title}"/>
            </div>
            <div class="aside-article-text-container">
              <h3 class="aside-article-heading ">${allLifestylePosts[i].title}</h3>
              <h4 class="aside-article-des"></h4>
            </div>
          </div>
      </a>
      `;
  }
  asideContainer.innerHTML = recentNewsTemplate;

  // Click to read more
  const articleTextHeader = document.querySelectorAll(".text-section-header");
  articleTextHeader.forEach((header) => {
    header.addEventListener("click", (e) => {
      // If the button click is the read more text
      if (e.target.classList.contains("read-more-text")) {
        const readMoreHeader = e.target.parentElement;
        readMoreHeader.nextElementSibling.classList.toggle("show-text-content");
        readMoreHeader.firstElementChild.classList.toggle("fa-caret-up");
        e.target.classList.toggle("disappear");
      } else if (e.target.classList.contains("fa")) {
        const readMoreHeader = e.target.parentElement;
        readMoreHeader.nextElementSibling.classList.toggle("show-text-content");
        readMoreHeader.firstElementChild.classList.toggle("fa-caret-up");
        readMoreHeader.firstElementChild.nextElementSibling.classList.toggle(
          "disappear"
        );
      } else {
        const readMoreHeader = e.target;
        readMoreHeader.nextElementSibling.classList.toggle("show-text-content");
        readMoreHeader.firstElementChild.classList.toggle("fa-caret-up");
        readMoreHeader.firstElementChild.nextElementSibling.classList.toggle(
          "disappear"
        );
      }
    });
  });

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
