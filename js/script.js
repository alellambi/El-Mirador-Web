// Page's Element
const logo = document.getElementById("logo");
const logocontainer = document.getElementById("logo-container");
const body = document.getElementById("body");
const arrow = document.getElementById("arrow");

//Modals
const menu = document.getElementById("menu");
const selector = document.getElementById("selector");

//Menu Links
const eye = document.getElementById("eye");
const showLink = document.getElementById("showLink");
const discographyLink = document.getElementById("discographyLink");
const videoLink = document.getElementById("videoLink");
const biographyLink = document.getElementById("biographyLink");
const contactLink = document.getElementById("contactLink");
const back = document.getElementById("backLink");

//Page Sections
const sectHome = document.getElementById("home");
const sectShow = document.getElementById("show");
const sectDiscography = document.getElementById("discography");
const sectVideo = document.getElementById("video");
const sectBiography = document.getElementById("biography");

// -------------------------------------------------------------------- Menu
const menuOpen = () => {
  logo.addEventListener(`click`, (e) => {
    menu.classList.add("show");
    arrow.classList.add("hide");
    body.classList.add("modal__open");
    logo.classList.add("hide");
    logocontainer.classList.add("hide");
  });
};

const menuClose = () => {
  back.addEventListener(`click`, (e) => {
    menu.classList.remove("show");
    body.classList.remove("modal__open");
    arrow.classList.remove("hide");
    logo.classList.remove("hide");
    logocontainer.classList.remove("hide");
  });

  menu.addEventListener(`click`, (e) => {
    if (e.target == menu) {
      menu.classList.remove("show");
      body.classList.remove("modal__open");
      arrow.classList.remove("hide");
      logo.classList.remove("hide");
      logocontainer.classList.remove("hide");
    }
  });
};

//--------------------------------- Links
const links = () => {
  showLink.addEventListener("click", (e) => {
    body.classList.remove("modal__open");
    menu.classList.remove("show");
    arrow.classList.remove("hide");
    logo.classList.remove("hide");
    logocontainer.classList.remove("hide");
  });
  discographyLink.addEventListener("click", (e) => {
    body.classList.remove("modal__open");
    menu.classList.remove("show");
    arrow.classList.remove("hide");
    logo.classList.remove("hide");
    logocontainer.classList.remove("hide");
  });
  videoLink.addEventListener("click", (e) => {
    body.classList.remove("modal__open");
    menu.classList.remove("show");
    arrow.classList.remove("hide");
    logo.classList.remove("hide");
    logocontainer.classList.remove("hide");
  });
  biographyLink.addEventListener("click", (e) => {
    body.classList.remove("modal__open");
    menu.classList.remove("show");
    arrow.classList.remove("hide");
    logo.classList.remove("hide");
    logocontainer.classList.remove("hide");
  });
  contactLink.addEventListener("click", (e) => {
    body.classList.remove("modal__open");
    menu.classList.remove("show");
    arrow.classList.remove("hide");
    logo.classList.remove("hide");
    logocontainer.classList.remove("hide");
  });
};

// -------------------------------------------------------------------- Selector
const selectorOpen = () => {
  eye.addEventListener(`click`, (e) => {
    selector.classList.add("show");
    menu.classList.remove("show");
    arrow.classList.add("hide");
    body.classList.add("modal__open");
    logo.classList.add("hide");
    logocontainer.classList.add("hide");
  });
};

menuOpen();
selectorOpen();
menuClose();
links();
