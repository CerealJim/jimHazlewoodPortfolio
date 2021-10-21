
//Global app object (store all Methods/variables/etc.)
const app = {};

// HTML properties
app.navHamburger = document.querySelector(".hamburger")
app.navList = document.querySelector(".navList")
app.navLink = document.querySelectorAll(".navLink")

app.init = () => {
  app.hamburgerClick();
  app.linkClick();
}

app.hamburgerClick = () => {
  app.navHamburger.addEventListener("click", () => {
    app.navList.classList.toggle("active");
  })
}

app.linkClick = () => {
  app.navLink.forEach((navLinks) => { 
    navLinks.addEventListener("click", () => {
      app.navList.classList.toggle("active");
    });
  }
)}



// call app.init
app.init();