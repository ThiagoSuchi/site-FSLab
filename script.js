//----------------- CABEÇALHO MENU-MOBILE ----------------------//
class MobileScript {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade .3s ease forwards ${index / 7 + 0.3}s`);
        })
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
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


const imgs = document.getElementById('imagem');
const img = document.querySelectorAll('#imagem img');

const tamanhoTela = window.innerWidth;

let idX = 0;

console.log(tamanhoTela);

function carousel() {
    idX++;

    if(idX > img.length - 1){
        idX = 0;
    }

    imgs.style.transform = `translateX(${-idX * 412}px)`;
}

function startCarousel() {
    if(tamanhoTela <= 430) {// Verifica se a largura da tela é menor ou igual a 430px
       setInterval(carousel, 1800); 
    } else {
        imgs.style.transform = `translateX(0)`;// Se for maior que 425px, não ativa o carrossel
    }
}

window.onload = startCarousel;// Aqui ira executar a função quando a pagina for recarregada.

