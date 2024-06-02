document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("fadein").classList.add("active");
  }, 50);
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("lightApp").classList.add("active");
  }, 800);
});

function revealProjects() {
  document.getElementById("projectHide").classList.toggle("on");
  document.getElementById("projectBtn").classList.toggle("off");
}
