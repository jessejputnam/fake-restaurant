"use strict";

// HOMEPAGE
const displayHome = function (node) {
  node.classList.add("main");
  node.classList.add("main--homepage");
  node.innerHTML = `
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
    <p class="body-txt promo__txt--1">
      Fresh ingredients, locally sourced, hunted and foraged for
      personally by our very own Chef Luna
    </p>
    <img
      src="../images/luna-outdoor-search.jpg"
      alt="Luna searching"
      class="promo__img promo__img--1"
    />
    <p class="body-txt promo__txt--2">
      Treat yourself to rustic, natural, organic meals gathered, selected,
      prepared, and served with care and reverence...
    </p>
    <img
      src="../images/luna-beach-dig.JPG"
      alt="Luna digging for clams"
      class="promo__img promo__img--2"
    />
  </div>
  `;
};

export default displayHome;
