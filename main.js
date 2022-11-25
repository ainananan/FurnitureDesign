
const hamburgerMenu = document.querySelector(".toggle_btn");

const nav = document.getElementById("nav"); 
const mask =document.getElementById("mask");
const hamburgerMenuSections = document.querySelectorAll("nav-menu");

hamburgerMenu.addEventListener("click" , function() {
  hamburgerMenu.classList.toggle("active");
  nav.classList.toggle('active');
  mask.classList.toggle("active");
});

hamburgerMenuSections.forEach((hamburgerMenuSection) => {
  hamburgerMenuSection.addEventListener("click" , function() {
    hamburgerMenu.classList.remove("active");
    nav.classList.remove("active");
    mask.classList.remove("active");
  });
});
