document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("fadein").classList.add("active");
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function(){ 
    document.getElementById("lightApp").classList.add("active");
  }, 1500);
});

function revealProjects() {
  document.getElementById("projectHide").classList.toggle("on");
  document.getElementById("projectBtn").classList.toggle("off");
}
