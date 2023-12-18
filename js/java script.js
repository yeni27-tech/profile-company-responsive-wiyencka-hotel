function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//navbar//
const nav = document.querySelector("header");

window.addEventListener("scroll", fixnaV);

function fixnaV() {
  if (window.scrollY > nav.offsetHeight + 200) {
    nav.classList.add("active");
  }else {
    nav.classList.remove("active");
  }
}
//selesai//
