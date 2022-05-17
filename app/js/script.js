const toggleBtn = document.querySelector(".navbar-toggler");
const modal = document.querySelector("#exampleModal");

toggleBtn.addEventListener("click", function () {
  console.log("button click");
  if (toggleBtn.classList.contains("hamburger")) {
    toggleBtn.classList.remove("hamburger");
    toggleBtn.classList.add("close");
  } else {
    toggleBtn.classList.add("hamburger");
    toggleBtn.classList.remove("close");
  }
});
