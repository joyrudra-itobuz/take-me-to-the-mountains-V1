const menuBtn = document.querySelector(".menu-btn");
const menuContainer = document.querySelector(".menu-container");

menuBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("hidden");
  menuContainer.classList.toggle("menu-container-animation");
  menuBtn.classList.toggle("menu-btn-animation");
});

const techDropdownBtn = document.querySelector(".tech-dropdown-btn");
const techDropdownList = document.querySelector(".tech-dropdown");
const listTechDropdown = document.querySelector(".list-dropdown-tech");
const techDropdownIcon = document.querySelector(".tech-dropdown-icon");

techDropdownBtn.addEventListener("click", () => {
  techDropdownList.classList.toggle("hidden");
  techDropdownList.classList.toggle("menu-container-animation");
  menuContainer.classList.toggle("md:mt-[0.62rem]");
  techDropdownIcon.classList.toggle("tech-dropdown-icon-toggle");
});

const mainIcon = document.querySelector(".main-icon img");
console.log(mainIcon);

mainIcon.addEventListener("mouseover", () => {
  mainIcon.classList.toggle("main-icon-animation");
});
mainIcon.addEventListener("mouseleave", () => {
  mainIcon.classList.toggle("main-icon-animation");
});

// mainIcon.onfocus = () => {
//   mainIcon.classList.toggle("main-icon-animation");
// };
// mainIcon.onblur = () => {
//   mainIcon.classList.toggle("main-icon-animation");
// };

//Carousel
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "1",
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  //   breakpoints: {
  //     425: {
  //       slidesPerView: "1",
  //       spaceBetween: 30,
  //     },
  //     700: {
  //       slidesPerView: "2",
  //       spaceBetween: 30,
  //     },
  //     900: {
  //       slidesPerView: "3",
  //       spaceBetween: 30,
  //       },
  //     1
  //   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
