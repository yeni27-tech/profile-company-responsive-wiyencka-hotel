//slide menu//
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//selesai//


//navbar//
const nav = document.querySelector(".navbar");

window.addEventListener("scroll", fixNaV);

function fixNaV() {
  if (window.scrollY > nav.offsetHeight + 200) {
    nav.classList.add("active");
  }else {
    nav.classList.remove("active");
  }
}
//selesai//
