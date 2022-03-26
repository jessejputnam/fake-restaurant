"use strict";

// Display About Page

const displayAbout = function (node) {
  node.innerHTML = `
  <h1 class="title title--contact title--center">What is A Merrier World?</h1>
  <div class="about__info">
    <div class="about__info__txt">
      <p>
        A Merrier World is the passion project of our head chef and
        founder, Luna. She is a dog who shares a hobbit's affinity and
        appreciation of the fine art of eating. As a connoisseur of the
        finest found delectables, she wanted to share her amazing,
        organic, all natural, humane, non-exploitive passion for finding
        the best ground food possible.
      </p>
      <p>
        It is with this ethic in mind that we present to you this
        amazing offering found nowhere else on the planet &mdash; a
        natural dining experience, the very thing that could save our
        fragile planet.
      </p>
    </div>
    <div class="about__info__imgs">
      <img
        src="images/luna-outdoor-antler.jpg"
        alt="Luna showing off her hunt"
        class="about__img"
        id="about__img--1"
      />
    </div>
  </div>

  <hr class="divider--page" />

  <h3 class="title title--contact">Contact Us</h3>

  <div class="about__contact">
    <div class="contact__info">
      <h4>Hours:</h4>
      <ul>
        <li>Weekdays: 11am - 4pm</li>
        <li>Weekends: 10am - 3pm</li>
      </ul>
    </div>

    <form class="contact__form">
      <fieldset class="contact__fieldset">
        <legend class="contact__legend">Contact Us</legend>
        <label class="form--label" for="name">Name: </label><br />
        <input
          class="form--input"
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
        /><br />
        <label class="form--label" for="message">Message: </label><br />
        <textarea class="form--message"></textarea>
      </fieldset>
    </form>
  </div>
  `;
};

export default displayAbout;
