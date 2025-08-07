const mood = document.getElementById("mood");
const happyBtn = document.getElementById("happyBtn");
const sadBtn = document.getElementById("sadBtn");

happyBtn.addEventListener("click", function () {
  mood.textContent = "I'm feeling... 😄";
});

sadBtn.addEventListener("click", function () {
  mood.textContent = "I'm feeling... 😢";
});
