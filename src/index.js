"use strict";

import displayHome from "./displayHome";

// DOM VARIABLES
const headWrap = document.querySelector(".header__wrapper");
const tabs = document.querySelectorAll(".btn__tab");
const content = document.getElementById("content");
const main = document.querySelector("main");

// SAVED VARIABLES
let curPage = "home";
// displayHome(main);

// SELECTING TABS
headWrap.addEventListener("click", (e) => {
  const clicked = e.target.closest(".btn__tab");

  if (!clicked) return;

  curPage = clicked.id.split("--")[1];

  tabs.forEach((tab) => tab.classList.remove("tab--selected"));
  clicked.classList.add("tab--selected");

  main.innerHTML = "";
  displayPage(curPage);
});

const displayPage = function (page) {
  main.className = "";
  if (page === "home") {
    displayHome(main);
  }
};
