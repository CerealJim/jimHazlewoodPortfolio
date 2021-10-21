const navHamburger = document.querySelector(".hamburger")
const navList = document.querySelector(".navList")
const headerNav = document.querySelector(".headerNav")

navHamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
  // headerNav.classList.toggle("active");
  // navHamburger.classList.toggle("active");
})



// const iconSkill = document.querySelector(".icon")
// const iconName = document.querySelector("iconName")

// iconSkill.addEventListener("hover", () => {
//   console.log('hover is working')
//   iconName.classList.toggle("show");
// })