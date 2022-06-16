//Art Cards
const akasha = document.getElementById("akashaCard");
const slv = document.getElementById("soltarlavozCard");
const dejavu = document.getElementById("dejavuCard");
const favicon = document.querySelector("link");

const akashear = () => {
  akasha.addEventListener(`click`, (e) => {
    document.documentElement.style.cssText = `--svglogo:#9c338b;
--svgcolor: #403581; 
--background1: #161128; 
--background2: #DFBCC3; 
--text-color: rgb(182, 175, 165);
--title-color: #3B4896;`;
    selector.classList.remove("show");
    menu.classList.remove("show");
    logo.classList.remove("hide");
    logocontainer.classList.remove("hide");
    body.classList.remove("modal__open");
    arrow.classList.remove("hide");
    favicon.setAttribute("href", "./svg2/logoakasha.svg");
  });
};

const slvear = () => {
  slv.addEventListener(`click`, (e) => {
    document.documentElement.style.cssText = `--svglogo: #E78738;
--svgcolor: #c8ff00; 
--background1: rgb(32, 32, 32); 
--background2: #b15500; 
--text-color: rgb(182, 175, 165);
--title-color: #BA1C1C;`;
    selector.classList.remove("show");
    menu.classList.remove("show");
    logo.classList.remove("hide");
    logocontainer.classList.remove("hide");
    body.classList.remove("modal__open");
    arrow.classList.remove("hide");
    favicon.setAttribute("href", "./svg2/logoslv.svg");
  });
};

const dejavuar = () => {
  dejavu.addEventListener(`click`, (e) => {
    document.documentElement.style.cssText = `--svglogo:#2CFFDF;
--svgcolor: #2CFFDF; 
--background1: #03120F; 
--background2: #218173; 
--text-color: rgb(182, 175, 165);
--title-color: #FFFFFF;`;
    selector.classList.remove("show");
    menu.classList.remove("show");
    logo.classList.remove("hide");
    logocontainer.classList.remove("hide");
    body.classList.remove("modal__open");
    arrow.classList.remove("hide");
    favicon.setAttribute("href", "./svg2/logodejavu.svg");
  });
};

akashear();
slvear();
dejavuar();
