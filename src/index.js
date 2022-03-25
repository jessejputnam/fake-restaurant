"use strict";

// DOM VARIABLES
const headWrap = document.querySelector(".header__wrapper");
const tabs = document.querySelectorAll(".btn__tab");
const content = document.getElementById("content");
const main = document.querySelector("main");

// SAVED VARIABLES
let curPage = "home";

// SELECTING TABS
headWrap.addEventListener("click", (e) => {
  const clicked = e.target.closest(".btn__tab");
  curPage = clicked.id.split("--")[1];

  if (!clicked) return;

  tabs.forEach((tab) => tab.classList.remove("tab--selected"));
  clicked.classList.add("tab--selected");

  displayPage(curPage);
});

const displayPage = function (page) {
  main.className = "";
  if (page === "home") {
    main.classList.add("main");
    main.classList.add("main--homepage");
    main.innerHTML = htmlHome;
  }
};

// HOMEPAGE
const htmlHome = `
  <div class="intro">
    <p class="intro__tag body-txt--fancy">
      <span class="body-txt">"</span>If more of us valued food and cheer
      and song above hoarded gold, it would be...<span class="body-txt"
        >"</span
      >
      <br />
      <span class="body-txt">&nbsp; &nbsp; &nbsp;- JRR Tolkien</span>
    </p>
    <h1 class="intro__title title--fancy">A Merrier World</h1>
  </div>
  <div class="promo">
    <p class="body-txt">
      Fresh ingredients, locally sourced, hunted and foraged for
      personally by our very own Chef Luna
    </p>
    <img
      src="../images/luna-outdoor-search.jpg"
      alt="Luna searching"
      class="promo__img"
    />
    <p class="body-txt">
      Treat yourself to rustic, natural, organic meals gathered, selected,
      prepared, and served with care and reverence...
    </p>
    <img
      src="../images/luna-beach-dig.JPG"
      alt="Luna digging for clams"
      class="promo__img"
    />
  </div>
`;
