
//Global app object (store all Methods/variables/etc.)
const app = {};

// HTML properties
app.navHamburger = document.querySelector(".hamburger")
app.navList = document.querySelector(".navList")
// app.headerNav = document.querySelector(".headerNav")

app.init = () => {
  app.hamburgerClick();
}

app.hamburgerClick = () => {
  app.navHamburger.addEventListener("click", () => {
    app.navList.classList.toggle("active");
    app.navHamburger.classList.toggle("active");
  })
}


// call app.init
app.init();