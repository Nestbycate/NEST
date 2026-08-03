const track = document.querySelector(".gallery-track");

const nextBtn = document.querySelector(".gallery-btn.next");
const prevBtn = document.querySelector(".gallery-btn.prev");

const cards = document.querySelectorAll(".gallery-item");

const scrollAmount = cards[0].offsetWidth + 30;

nextBtn.addEventListener("click", () => {

    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {

        track.scrollTo({
            left: 0,
            behavior: "smooth"
        });

    } else {

        track.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });

    }

});

prevBtn.addEventListener("click", () => {

    if (track.scrollLeft <= 10) {

        track.scrollTo({
            left: track.scrollWidth,
            behavior: "smooth"
        });

    } else {

        track.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });

    }

});
/*=========================================
Gentle Scroll Reveal
=========================================*/

const reveals=document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const top=section.getBoundingClientRect().top;

        const windowHeight=window.innerHeight;

        if(top<windowHeight-120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealSections);

window.addEventListener("load",revealSections);
/*=========================================
LIGHTBOX
=========================================*/

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");

console.log(lightbox);
console.log(lightboxImage);
console.log(lightboxClose);

document.querySelectorAll(".lightbox-trigger").forEach(image => {

    image.addEventListener("click", function(e){

        e.preventDefault();

        lightboxImage.src = this.href;

        lightbox.classList.add("active");

    });

});

lightboxClose.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", e => {

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown", e=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

});