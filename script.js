document.addEventListener("DOMContentLoaded", function() {
    let animated = false;

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (!animated) {
            const fadeInText = document.querySelector(".fade-in-text");
            const fadeInUpText = document.querySelector(".fade-in-up-text");

            if (isElementInViewport(fadeInText)) {
                animated = true;
                fadeInText.classList.add("animate-fade-in");
            }

            if (isElementInViewport(fadeInUpText)) {
                animated = true;
                fadeInUpText.classList.add("animate-fade-in-up");
            }
        }
    }

    window.addEventListener("scroll", handleScroll);
});
