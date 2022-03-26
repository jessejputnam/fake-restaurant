(()=>{"use strict";const n=function(n){n.innerHTML='\n  <div class="intro">\n    <p class="intro__tag body-txt--fancy">\n      <span class="body-txt">"</span>If more of us valued food and cheer\n      and song above hoarded gold, it would be...<span class="body-txt"\n        >"</span\n      >\n      <br />\n      <span class="body-txt">&nbsp; &nbsp; &nbsp;- JRR Tolkien</span>\n    </p>\n    <h1 class="intro__title title--fancy">A Merrier World</h1>\n  </div>\n  <div class="promo">\n    <p class="body-txt promo__txt--1">\n      Fresh ingredients, locally sourced, hunted and foraged for\n      personally by our very own Chef Luna\n    </p>\n    <img\n      src="images/luna-outdoor-search.jpg"\n      alt="Luna searching"\n      class="promo__img promo__img--1"\n    />\n    <p class="body-txt promo__txt--2">\n      Treat yourself to rustic, natural, organic meals gathered, selected,\n      prepared, and served with care and reverence...\n    </p>\n    <img\n      src="images/luna-beach-dig.JPG"\n      alt="Luna digging for clams"\n      class="promo__img promo__img--2"\n    />\n  </div>\n  '},e=document.querySelector(".header__wrapper"),s=document.querySelectorAll(".btn__tab"),i=(document.getElementById("content"),document.querySelector("main"));let a,t="home";n(i),s[0].classList.add("tab--selected"),e.addEventListener("click",(n=>{const e=n.target.closest(".btn__tab");e&&(a=t,t=e.id.split("--")[1],s.forEach((n=>n.classList.remove("tab--selected"))),e.classList.add("tab--selected"),i.innerHTML="",l(t))}));const l=function(e){i.classList.remove(`main--${a}`),i.classList.add(`main--${t}`),"home"===e&&n(i),"menu"===e&&(i.innerHTML='\n  <h1 class="title">Menu</h1>\n  <p>\n    Our menu is dynamic and ever-changing. The food we serve was\n    directly gathered by our award-winning chef, Luna. She paw-selects\n    only the best smelling foods, naturally found and naturally\n    harvested.\n  </p>\n  <hr class="divider--page" />\n  <div class="menu__container">\n    <div class="menu--left">\n      <div class="menu__item">\n        <img\n          src="images/menu-broth-mix.webp"\n          height="260px"\n          class="item__img"\n        />\n        <div class="item__info">\n          <p class="item__desc">Soup du Jour</p>\n          <hr class="divider--prix" />\n          <p class="item__prix">22</p>\n        </div>\n      </div>\n      <div class="menu__item">\n        <img\n          src="images/menu-eggs-veg1.jpeg"\n          height="260px"\n          class="item__img"\n        />\n        <div class="item__info">\n          <p class="item__desc">Egg Scramble</p>\n          <hr class="divider--prix" />\n          <p class="item__prix">18</p>\n        </div>\n      </div>\n      <div class="menu__item">\n        <img\n          src="images/menu-left-veg.jpeg"\n          height="260px"\n          class="item__img"\n        />\n        <div class="item__info">\n          <p class="item__desc">Citrus Zest Salad</p>\n          <hr class="divider--prix" />\n          <p class="item__prix">16</p>\n        </div>\n      </div>\n    </div>\n\n    <div class="menu--right">\n      <div class="menu__item">\n        <img\n          src="images/menu-seeds-veg.jpeg"\n          height="260px"\n          class="item__img"\n        />\n        <div class="item__info">\n          <p class="item__desc">Citrus Fruit-Seed Saut&eacute;e</p>\n          <hr class="divider--prix" />\n          <p class="item__prix">22</p>\n        </div>\n      </div>\n      <div class="menu__item">\n        <img\n          src="images/menu-wing-bones.jpeg"\n          height="260px"\n          class="item__img"\n        />\n        <div class="item__info">\n          <p class="item__desc">Teriyaki Chicken Wings</p>\n          <hr class="divider--prix" />\n          <p class="item__prix">26</p>\n        </div>\n      </div>\n      <div class="menu__item">\n        <img\n          src="images/menu-course-meal.jpeg"\n          height="260px"\n          class="item__img"\n        />\n        <div class="item__info">\n          <p class="item__desc">Prix-Fix 3 Course Dinner</p>\n          <hr class="divider--prix" />\n          <p class="item__prix">60</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  '),"about"===e&&function(n){n.innerHTML='\n  <h1 class="title title--contact title--center">What is A Merrier World?</h1>\n  <div class="about__info">\n    <div class="about__info__txt">\n      <p>\n        A Merrier World is the passion project of our head chef and\n        founder, Luna. She is a dog who shares a hobbit\'s affinity and\n        appreciation of the fine art of eating. As a connoisseur of the\n        finest found delectables, she wanted to share her amazing,\n        organic, all natural, humane, non-exploitive passion for finding\n        the best ground food possible.\n      </p>\n      <p>\n        It is with this ethic in mind that we present to you this\n        amazing offering found nowhere else on the planet &mdash; a\n        natural dining experience, the very thing that could save our\n        fragile planet.\n      </p>\n    </div>\n    <div class="about__info__imgs">\n      <img\n        src="images/luna-outdoor-antler.jpg"\n        alt="Luna showing off her hunt"\n        class="about__img"\n        id="about__img--1"\n      />\n    </div>\n  </div>\n\n  <hr class="divider--page" />\n\n  <h3 class="title title--contact">Contact Us</h3>\n\n  <div class="about__contact">\n    <div class="contact__info">\n      <h4>Hours:</h4>\n      <ul>\n        <li>Weekdays: 11am - 4pm</li>\n        <li>Weekends: 10am - 3pm</li>\n      </ul>\n    </div>\n\n    <form class="contact__form">\n      <fieldset class="contact__fieldset">\n        <legend class="contact__legend">Contact Us</legend>\n        <label class="form--label" for="name">Name: </label><br />\n        <input\n          class="form--input"\n          type="text"\n          id="name"\n          name="name"\n          placeholder="Your Name"\n        /><br />\n        <label class="form--label" for="message">Message: </label><br />\n        <textarea class="form--message"></textarea>\n      </fieldset>\n    </form>\n  </div>\n  '}(i)}})();