document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuButton = document.querySelector(".menu-button");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");
            menuButton.classList.toggle("active");

        });


        mobileMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");
                menuButton.classList.remove("active");

            });

        });

    }



    /* =========================
       NAVBAR ON SCROLL
    ========================= */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 60) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();



    /* =========================
       CURSOR EFFECT
    ========================= */

    const cursorGlow = document.querySelector(".cursor-glow");

    if (cursorGlow && window.innerWidth > 700) {

        window.addEventListener("mousemove", (event) => {

            cursorGlow.style.left = event.clientX + "px";
            cursorGlow.style.top = event.clientY + "px";

        });

    }



    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        revealObserver.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });



    /* =========================
       PORTFOLIO IMAGE HOVER
    ========================= */

    const portfolioCards =
        document.querySelectorAll(".portfolio-card");


    portfolioCards.forEach(card => {

        const image = card.querySelector("img");

        if (!image) return;


        card.addEventListener("mousemove", (event) => {

            if (window.innerWidth < 700) return;

            const rect = card.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) / rect.width - 0.5;

            const y =
                (event.clientY - rect.top) / rect.height - 0.5;


            image.style.transform =
                `scale(1.06) translate(${x * 8}px, ${y * 8}px)`;

        });


        card.addEventListener("mouseleave", () => {

            image.style.transform = "scale(1)";

        });

    });



    /* =========================
       HERO PARALLAX
    ========================= */

    const heroImage =
        document.querySelector(".hero-image");


    if (heroImage && window.innerWidth > 800) {

        window.addEventListener("scroll", () => {

            const scrollAmount =
                window.scrollY * 0.05;

            heroImage.style.transform =
                `translateY(${scrollAmount}px) scale(1.02)`;

        });

    }



    /* =========================
       MAGNETIC BUTTONS
    ========================= */

    const buttons =
        document.querySelectorAll(".button, .nav-cta");


    buttons.forEach(button => {

        button.addEventListener("mousemove", (event) => {

            if (window.innerWidth < 800) return;

            const rect =
                button.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left -
                rect.width / 2;

            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            button.style.transform =
                `translate(${x * 0.12}px, ${y * 0.12}px)`;

        });


        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });



    /* =========================
       SMOOTH ANCHOR LINKS
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });



    /* =========================
       IMAGE FALLBACK
    ========================= */

    document.querySelectorAll("img").forEach(image => {

        image.addEventListener("error", () => {

            console.warn(
                "Image could not be loaded:",
                image.src
            );

        });

    });



    /* =========================
       CURRENT YEAR
    ========================= */

    const year =
        document.getElementById("year");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});