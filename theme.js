const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
const themeToggleBtn = document.getElementById("theme-toggle");
const documentHTML = document.documentElement;
let theme = localStorage.getItem("theme");

document.addEventListener("DOMContentLoaded", () => {
   if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
         window.matchMedia("(prefers-color-scheme: dark)").matches)
   ) {
      documentHTML.classList.add("dark");
      themeToggleLightIcon.classList.remove("hidden");
   } else {
      documentHTML.classList.remove("dark");
      themeToggleDarkIcon.classList.remove("hidden");
   }
});

themeToggleBtn.addEventListener("click", () => {
   themeToggleDarkIcon.classList.toggle("hidden");
   themeToggleLightIcon.classList.toggle("hidden");

   if (theme === "light") {
      documentHTML.classList.add("dark");
      theme = "dark";
      localStorage.theme = "dark";
   } else {
      documentHTML.classList.remove("dark");
      theme = "light";
      localStorage.theme = "light";
   }
});
