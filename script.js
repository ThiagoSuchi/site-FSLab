//----------------- CABEÇALHO MENU-MOBILE ----------------------//
class MobileScript {
    constructor(menuMobile, navList, navLinks) {
        this.menuMobile = document.querySelector(menuMobile);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        })
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.menuMobile.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.menuMobile.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.menuMobile) {
            this.addClickEvent();
        }
        return this;
    }
}


const mobileScript = new MobileScript(
    ".menu-mobile",
    ".nav-list",
    ".nav-list li",
);
mobileScript.init();


//------------------------ PROJETOS CAROUSEL -------------------------//


const container = document.getElementById("imagem");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;
const contageSlide = slides.length;
const larguraTela = window.innerWidth;

console.log("ola", larguraTela)

function proxSlide() {
    if (larguraTela <= 425) {
        currentIndex = (currentIndex + 1) % contageSlide; // Muda para o próximo slide e volta ao início se necessário
        const desloc = -currentIndex * 100; // Calcula o deslocamento necessário
        container.style.transform = `translateX(${desloc}%)`; // Aplica o deslocamento
    }
}


// Configura o carrossel para mudar de slide a cada 3 segundos (3000 ms) apenas em telas pequenas
setInterval(proxSlide, 1800);
