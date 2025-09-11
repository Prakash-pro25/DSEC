document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const slides = document.querySelector(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dotscontainer = document.querySelector(".dots-container");

  function nextslide() {
    currentslide = (currentslide + 1) % slidecount;
    goToslide(currentslide);
  }

  function prevslide() {
    currentslide = (currentslide - 1 + slidecount) % slidecount;
    goToslide(currentslide);
  }

  nextBtn.addEventListener("click", nextslide);
  prevBtn.addEventListener("click", prevslide);

  setInterval(nextslide, 5000);
});
