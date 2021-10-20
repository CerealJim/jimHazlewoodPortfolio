const navHamburger = document.querySelector(".hamburger")
const navList = document.querySelector(".navList")

navHamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
})
