const toggleBtn = document.querySelector(".navbar-toggler");
const modal = document.querySelector(".modal");

toggleBtn.addEventListener("click", function () {
  if (toggleBtn.classList.contains("hamburger")) {
    toggleBtn.classList.remove("hamburger");
    toggleBtn.classList.add("close");
  } else {
    toggleBtn.classList.add("hamburger");
    toggleBtn.classList.remove("close");
  }
});

modal.addEventListener("click", function (e) {
  if (!e.target.classList.contains("modal")) return;
  if (toggleBtn.classList.contains("hamburger")) {
    toggleBtn.classList.remove("hamburger");
    toggleBtn.classList.add("close");
  } else {
    toggleBtn.classList.add("hamburger");
    toggleBtn.classList.remove("close");
  }
});
