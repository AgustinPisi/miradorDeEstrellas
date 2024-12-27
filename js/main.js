document.addEventListener("scroll", function () {
    const carousel = document.getElementById("carouselExampleInterval");
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const fadeFactor = 1 - Math.min(scrollY / windowHeight, 1);
    carousel.style.opacity = fadeFactor;
});
