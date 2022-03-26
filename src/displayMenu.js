"use strict";

// Menu Page

const displayMenu = function (node) {
  node.innerHTML = `
  <h1 class="title">Menu</h1>
  <p>
    Our menu is dynamic and ever-changing. The food we serve was
    directly gathered by our award-winning chef, Luna. She paw-selects
    only the best smelling foods, naturally found and naturally
    harvested.
  </p>
  <hr class="divider--page" />
  <div class="menu__container">
    <div class="menu--left">
      <div class="menu__item">
        <img
          src="../images/menu-broth-mix.webp"
          height="260px"
          class="item__img"
        />
        <div class="item__info">
          <p class="item__desc">Soup du Jour</p>
          <hr class="divider--prix" />
          <p class="item__prix">22</p>
        </div>
      </div>
      <div class="menu__item">
        <img
          src="../images/menu-eggs-veg1.jpeg"
          height="260px"
          class="item__img"
        />
        <div class="item__info">
          <p class="item__desc">Egg Scramble</p>
          <hr class="divider--prix" />
          <p class="item__prix">18</p>
        </div>
      </div>
      <div class="menu__item">
        <img
          src="../images/menu-left-veg.jpeg"
          height="260px"
          class="item__img"
        />
        <div class="item__info">
          <p class="item__desc">Citrus Zest Salad</p>
          <hr class="divider--prix" />
          <p class="item__prix">16</p>
        </div>
      </div>
    </div>

    <div class="menu--right">
      <div class="menu__item">
        <img
          src="../images/menu-seeds-veg.jpeg"
          height="260px"
          class="item__img"
        />
        <div class="item__info">
          <p class="item__desc">Citrus Fruit-Seed Saut&eacute;e</p>
          <hr class="divider--prix" />
          <p class="item__prix">22</p>
        </div>
      </div>
      <div class="menu__item">
        <img
          src="../images/menu-wing-bones.jpeg"
          height="260px"
          class="item__img"
        />
        <div class="item__info">
          <p class="item__desc">Teriyaki Chicken Wings</p>
          <hr class="divider--prix" />
          <p class="item__prix">26</p>
        </div>
      </div>
      <div class="menu__item">
        <img
          src="../images/menu-course-meal.jpeg"
          height="260px"
          class="item__img"
        />
        <div class="item__info">
          <p class="item__desc">Prix-Fix 3 Course Dinner</p>
          <hr class="divider--prix" />
          <p class="item__prix">60</p>
        </div>
      </div>
    </div>
  </div>
  `;
};

export default displayMenu;
