// funcs (dry method for login and search)
function openModal(trigger, modal, className) {
  if (trigger) {
    trigger.addEventListener("click", () => {
      modal.classList.add(className);
    });
  }
}

function closeModal(trigger, modal, className) {
  if (trigger) {
    trigger.addEventListener("click", () => {
      modal.classList.remove(className);
    });
  }
}
/*=============== SEARCH ===============*/
const searchOpenBtn = document.getElementById("search-button"),
  searchCloseBtn = document.getElementById("search-close"),
  searchContent = document.getElementById("search-content");

openModal(searchOpenBtn, searchContent, "show-search");
closeModal(searchCloseBtn, searchContent, "show-search");

/*=============== LOGIN ===============*/

const loginOpenBtn = document.getElementById("login-button"),
  loginCloseBtn = document.getElementById("login__close"),
  loginContent = document.getElementById("login-content");

openModal(loginOpenBtn, loginContent, "show-login");
closeModal(loginCloseBtn, loginContent, "show-login");

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1220: {
      spaceBetween: -32,
    },
  },
});
/*=============== FEATURED SWIPER ===============*/

// featured__swiper

let swiperFeatured = new Swiper(".featured__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});

/*=============== NEW SWIPER ===============*/

let swiperNew = new Swiper(".new__swiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  },
});

/*=============== TESTIMONIAL SWIPER ===============*/

let swiperTestimonial = new Swiper(".testimonial__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

function linkActive() {
  const scrollBar = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 58,
      sectionId = section.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__item a[href*=" + sectionId + "]"
      );

    if (scrollBar > sectionTop && scrollBar <= sectionHeight + sectionTop) {
      sectionClass.classList.add("link-active");
    } else {
      sectionClass.classList.remove("link-active");
    }
  });
}

window.addEventListener("scroll", linkActive);
/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: false,
});

sr.reveal(
  `.home__data, .featured__container,.new__container,.join__data,.testimonial__container,.footer`
);
sr.reveal(`.home__images`, { delay: 600 });
sr.reveal(`.services__card`, { interval: 150 });
sr.reveal(`.discount__data`, { origin: "left" });
sr.reveal(`.discount__images`, { origin: "right" });
