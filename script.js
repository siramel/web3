document.addEventListener("DOMContentLoaded", function () {
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
            const fadeInUpText1 = document.querySelector('.image-text h1 span:nth-child(1)');
            const fadeInUpText2 = document.querySelector('.image-text h1 span:nth-child(2)');
            const fadeInUpText3 = document.querySelector('.image-text h1 span:nth-child(3)');

            if (isElementInViewport(fadeInText)) {
                animated = true;
                fadeInText.classList.add("animate-fade-in");
            }

            if (isElementInViewport(fadeInUpText1)) {
                animated = true;
                fadeInUpText1.classList.add('animate-fade-in-up');
            } else if (isElementInViewport(fadeInUpText2)) {
                animated = true;
                fadeInUpText2.classList.add('animate-fade-in-up');
            } else if (isElementInViewport(fadeInUpText3)) {
                animated = true;
                fadeInUpText3.classList.add('animate-fade-in-up');
            }
        }
    }

    window.addEventListener("scroll", handleScroll);

    // Darken the image gradually after 1 second
    setTimeout(function () {
        document.querySelector('.big-image').classList.add('darken-image');
    }, 500);

    // Add dark overlay and fade in text gradually after 3 seconds
    setTimeout(function () {
        document.querySelector('.image-container').classList.add('dark-overlay');
        document.querySelector('.image-text h1').style.opacity = 1;
    }, 3000);

    function showText(id, delay) {
        var elem = document.getElementById(id);
        setTimeout(function () {
            elem.style.opacity = 1;
        }, delay * 300)
    }
    window.onload = function () {
        showText('yourBrand', 1);
        showText('yourStory', 2);
        showText('ourExpertise', 3);
    }

});


