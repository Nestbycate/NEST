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