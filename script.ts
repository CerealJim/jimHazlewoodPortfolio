import AOS from 'aos';
import 'aos/dist/aos.css';

//Global app object (store all Methods/variables/etc.)
const app = {};

// HTML properties
// Nav properties
app.navHamburger = document.querySelector(".hamburger");
app.navList = document.querySelector(".navList");
app.navLink = document.querySelectorAll(".navLink");

app.contactMessages = [];

app.init = () => {
  app.hamburgerClick();
  app.linkClick();
  app.toggleMode();
};

// Navigation hamburger cick
app.hamburgerClick = () => {
  app.navHamburger.addEventListener("click", () => {
    app.navList.classList.toggle("active");
    app.navHamburger.classList.toggle("active");
  });
};

app.linkClick = () => {
  app.navLink.forEach((navLinks) => {
    navLinks.addEventListener("click", () => {
      app.navList.classList.toggle("active");
      app.navHamburger.classList.toggle("active");
    });
  });
};
app.toggleMode = () => {
  const modeCheckbox = document.getElementById("toggle");
  const bodyElement = document.querySelector("body");

  if (modeCheckbox.checked) {
    bodyElement.classList.add("dark-mode");
  }

  modeCheckbox.addEventListener("click", () => {
    console.log();
    if (modeCheckbox.checked) {
      bodyElement.classList.add("dark-mode");
    } else {
      bodyElement.classList.remove("dark-mode");
    }
  });
};

// call app.init
app.init();

// ANNIMATION BY "https://michalsnik.github.io/aos/"
AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

AOS.init();

// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-176EJWXYPS");

// Define interfaces/types
interface AppInterface {
  navHamburger: HTMLElement | null;
  navList: HTMLElement | null;
  navLink: NodeListOf<Element>;
  contactMessages: any[];
  init: () => void;
  hamburgerClick: () => void;
  linkClick: () => void;
  toggleMode: () => void;
}

// Convert to Vue composition API
import { onMounted } from 'vue';

export default {
  setup() {
    const app: AppInterface = {
      navHamburger: null,
      navList: null,
      navLink: document.querySelectorAll(".navLink"),
      contactMessages: [],

      init() {
        this.navHamburger = document.querySelector(".hamburger");
        this.navList = document.querySelector(".navList");
        this.hamburgerClick();
        this.linkClick();
        this.toggleMode();
      },

      hamburgerClick() {
        this.navHamburger?.addEventListener("click", () => {
          this.navList?.classList.toggle("active");
          this.navHamburger?.classList.toggle("active");
        });
      },

      linkClick() {
        this.navLink.forEach((navLinks) => {
          navLinks.addEventListener("click", () => {
            this.navList?.classList.toggle("active");
            this.navHamburger?.classList.toggle("active");
          });
        });
      },

      toggleMode() {
        const modeCheckbox = document.getElementById("toggle") as HTMLInputElement;
        const bodyElement = document.querySelector("body");

        if (modeCheckbox?.checked) {
          bodyElement?.classList.add("dark-mode");
        }

        modeCheckbox?.addEventListener("click", () => {
          if (modeCheckbox.checked) {
            bodyElement?.classList.add("dark-mode");
          } else {
            bodyElement?.classList.remove("dark-mode");
          }
        });
      }
    };

    // Initialize on component mount
    onMounted(() => {
      app.init();
      
      // AOS initialization
      AOS.init({
        disable: false,
        startEvent: "DOMContentLoaded",
        // ... rest of AOS config ...
      });
    });

    // Google Analytics
    declare global {
      interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
      }
    }

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", "G-176EJWXYPS");
  }
};
