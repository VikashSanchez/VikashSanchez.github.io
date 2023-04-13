"use strict";

// Website menu buttons
const profileBtn = document.querySelector(".profileBtn");
const skillsBtn = document.querySelector(".skillsBtn");
const contactBtn = document.querySelector(".contactBtn");
const cvBtn = document.querySelector(".cvBtn");

// Website content
const profile = document.querySelector(".profile");
const skills = document.querySelector(".skills");
const contact = document.querySelector(".contact");
const cv = document.querySelector(".cv");
let tabContent = document.querySelector(".tabContent");

// Switching between menu items and content

profileBtn.addEventListener("click", function () {
  profile.classList.remove("hidden");
  skills.classList.add("hidden");
  contact.classList.add("hidden");
  cv.classList.add("hidden");
});

skillsBtn.addEventListener("click", function () {
  profile.classList.add("hidden");
  skills.classList.remove("hidden");
  contact.classList.add("hidden");
  cv.classList.add("hidden");
});

contactBtn.addEventListener("click", function () {
  profile.classList.add("hidden");
  skills.classList.add("hidden");
  contact.classList.remove("hidden");
  cv.classList.add("hidden");
});

cvBtn.addEventListener("click", function () {
  profile.classList.add("hidden");
  skills.classList.add("hidden");
  contact.classList.add("hidden");
  cv.classList.remove("hidden");
});
