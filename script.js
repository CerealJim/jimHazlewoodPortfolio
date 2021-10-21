
//Global app object (store all Methods/variables/etc.)
const app = {};

// HTML properties
app.navHamburger = document.querySelector(".hamburger")
app.navList = document.querySelector(".navList")
app.headerNav = document.querySelector(".headerNav")


app.hamburgerClick = () => {
  app.navHamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
  })
}

app.init = () => {
  app.hamburgerClick();
}

// call app.init
app.init();