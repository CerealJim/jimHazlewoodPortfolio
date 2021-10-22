

    // const firebaseConfig = {
    //   apiKey: "AIzaSyDT7Gm1f1VHkdNnIFcAERKe7mZA3aWLCHA",
    //   authDomain: "portfolio-ccdec.firebaseapp.com",
    //   databaseURL: "https://portfolio-ccdec-default-rtdb.firebaseio.com",
    //   projectId: "portfolio-ccdec",
    //   storageBucket: "portfolio-ccdec.appspot.com",
    //   messagingSenderId: "265314339658",
    //   appId: "1:265314339658:web:bd3c7d5d8159f07fb44fb3"
    // };

    // const firebaseApp = initializeApp(firebaseConfig);
    // const realtime = getDatabase(firebaseApp);
    // const dbRef = ref(realtime);
    // console.log(dbRef, "dbRef")



//Global app object (store all Methods/variables/etc.)
const app = {};



// HTML properties
// Nav properties
app.navHamburger = document.querySelector(".hamburger")
app.navList = document.querySelector(".navList")
app.navLink = document.querySelectorAll(".navLink")
// Form properties
app.formElement = document.querySelector('form');
app.formResponse = document.querySelector(".submitParagraph");

app.contactMessages = [];

// //FIREBASE FUNCTIONS
//     // Grab our content from firebase
//     dbRef.on('value', (data) => {
//       const firebaseData = data.val()

//       app.portfolioResponse = []

//       // adding in new data as it is available.
//       for(props in firebaseData){
//         app.portfolioResponse.push(listItem)
//       }
//     })

app.init = () => {
  app.hamburgerClick();
  app.linkClick();
  app.submission();
}

// Navigation hamburger cick
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

// Form submit click
app.submission = () => {
  app.formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    if (document.getElementById('comment').value.length > 0) {
    let contactMessage = {
      id: Date.now(),
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('comment').value
    }
    app.contactMessages.push(contactMessage);
    app.formElement.reset();
    console.log(app.contactMessages, "contact messages");
    app.formResponse.textContent = `✔ Thank you!`;
  } else {
    alert('please fill in the form');
    console.log(app.contactMessages, "contact messages");
  }
  })
}



// call app.init
app.init();


// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

AOS.init();