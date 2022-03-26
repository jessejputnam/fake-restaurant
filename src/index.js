"use strict";

import displayHome from "./displayHome";
import displayMenu from "./displayMenu";
import displayAbout from "./displayAbout";

// DOM VARIABLES
const headWrap = document.querySelector(".header__wrapper");
const tabs = document.querySelectorAll(".btn__tab");
const content = document.getElementById("content");
const main = document.querySelector("main");

// INITIAL LOAD
let prevPage;
let curPage = "home";
displayHome(main);
tabs[0].classList.add("tab--selected");

// SELECTING TABS
headWrap.addEventListener("click", (e) => {
  const clicked = e.target.closest(".btn__tab");

  if (!clicked) return;

  prevPage = curPage;
  curPage = clicked.id.split("--")[1];

  tabs.forEach((tab) => tab.classList.remove("tab--selected"));
  clicked.classList.add("tab--selected");

  main.innerHTML = "";
  displayPage(curPage);
});

const displayPage = function (page) {
  main.classList.remove(`main--${prevPage}`);
  main.classList.add(`main--${curPage}`);

  if (page === "home") displayHome(main);
  if (page === "menu") displayMenu(main);
  if (page === "about") displayAbout(main);
};
