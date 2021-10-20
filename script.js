const navHamburger = document.querySelector(".hamburger")
const navList = document.querySelector(".navList")
const headerNav = document.querySelector(".headerNav")

navHamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
  headerNav.classList.toggle("active");
  navHamburger.classList.toggle("active");
})
