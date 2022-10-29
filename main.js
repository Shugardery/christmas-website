/* *** Show Menu *** */
const d = document,
  w = window,
  navMenu = d.getElementById("nav-menu"),
  navToggle = d.getElementById("nav-toggle"),
  navClose = d.getElementById("nav-close");

/* *** Menu Show *** */
// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* *** MENU HIDDEN *** */
// Validate if constant exists
if(navClose){
  navClose.addEventListener("click", () =>{
    navMenu.classList.remove("show-menu");
  })
}

/* *** Remove Menu Mobile *** */
const navLink = d.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = d.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}

navLink.forEach(n => n.addEventListener("click", linkAction));

// Change Background Header -> NOTA: Parece que aquí es donde al dar clic en la | X | se cierra el menú que sale
function scrollHeader () {
  const header = d.getElementById("header");
  // When the scroll is greater than 50 viewport heigh, add the scroll-header class to the header tag
  if(this.scrollY >= 50) header.classList.add("scroll-header"); else header.classList.remove("scroll-header");
}

w.addEventListener("scroll", scrollHeader)

/* *** NEW SWIPER *** */
let newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 24,
  loop: "true",
  slidesPerView: "auto",
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true
  },
  breakpoints: {
    992: {
      spaceBetween: 80,
    },
  },
});

/* *** SCROLL SECTIONS ACTIVE LINK *** */
const sections = d.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = w.scrollX

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute("id")

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      d.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link")
    } else {
      d.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link")
    }
  })
}

w.addEventListener("scroll", scrollActive);

/* *** SHOW SCROLL UP *** */
function scrollUp(){
  const scrollUp = d.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 350) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll");
}
w.addEventListener("scroll", scrollUp);


/* *** DARK LIGHT THEME *** */
const themeButton = d.getElementById("theme-button"),
      darkTheme = "dark-theme",
      iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme"),
      selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => d.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  d.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? "add" : "remove"](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    d.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme())
    localStorage.setItem("selected-icon", getCurrentIcon())
})

/* *** SCROLL REVEAL ANIMATION *** */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.home__img, .new__container, .footer__container`)
sr.reveal(`.home__data`, {delay: 500})
sr.reveal(`.giving__content, .gift__card`, {interval: 100})
sr.reveal(`.celebrate__data, .message__form, .footer__img1`, {origin: "left"})
sr.reveal(`.celebrate__img, .message__img, .footer__img2`, {origin: "right"})