/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId, togglesId) => {
  const toggle = document.getElementById(toggleId),
    toggles = document.getElementById(togglesId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav && toggles) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
    toggles.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.remove("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu", "nav-off");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*======= CHANGE BACKGROUND HEADER ===========*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
