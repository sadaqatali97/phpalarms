// document.addEventListener('DOMContentLoaded', function () {
//     const scrollBtn = document.getElementById("scroll-btn");
//     const qualitiesSection = document.getElementById("why-us");
//
//     if (scrollBtn && qualitiesSection) {
//         scrollBtn.addEventListener('click', function () {
//             const offsetTop = qualitiesSection.offsetTop - 95;
//             window.scrollTo({
//                 top: offsetTop,
//                 behavior: "smooth"
//             });
//         });
//     }
// });
//

//
//
// // document.addEventListener('DOMContentLoaded', function() {
// //     const radioButtons = document.querySelectorAll('input[name="propertyType"]');
// //     const quoteForm = document.getElementById('quote-form');
// //
// //     radioButtons.forEach(radio => {
// //         radio.addEventListener('change', function() {
// //             quoteForm.style.display = 'flex';
// //         });
// //     });
// // });
//
// AOS.init();
//
document.addEventListener('DOMContentLoaded', function () {
    var mobileStrip = document.querySelector('.mobile-strip');
    // var siteHero = document.getElementById('site-hero');
    // var siteHeroBottom = siteHero.offsetHeight - 500;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 600) {
            mobileStrip.classList.add('show');
        } else {
            mobileStrip.classList.remove('show');
        }
    });
});
//
function headerControl() {
    document.addEventListener('DOMContentLoaded', function () {
        const body = document.body;
        const navLinks = document.querySelectorAll('header .nav-link');
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const navbarButtons = document.querySelectorAll('.navbar .btn');
        const navbarOverlay = document.querySelector('.nav-overlay'); // Assuming this is the overlay element

        function closeNavbar() {
            body.classList.remove('nav-open');
            navbarCollapse.classList.remove('show');
            navbarToggler.setAttribute('aria-expanded', 'false');
        }

        function setActiveLink() {
            let fromTop = window.scrollY + 100;
            navLinks.forEach(link => {
                let section = document.querySelector(link.getAttribute('href'));
                if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }

        navbarToggler.addEventListener('click', function () {
            if (!navbarCollapse.classList.contains('show')) {
                body.classList.add('nav-open');
            } else {
                body.classList.remove('nav-open');
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                    event.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });

                        closeNavbar();
                    }
                } else if (href.startsWith('http')) {
                    // Handle external links
                    window.location.href = href;
                } else {
                    // Handle internal page links
                    event.preventDefault();
                    window.location.href = href;
                }
            });
        });

        navbarButtons.forEach(button => {
            button.addEventListener('click', function () {
                closeNavbar();
            });
        });

        if (navbarOverlay) { // Check if the overlay element exists
            navbarOverlay.addEventListener('click', function () {
                closeNavbar();
            });
        }

        window.addEventListener('scroll', setActiveLink);
        setActiveLink(); // Set the active link on page load

        // Check URL hash on page load
        const hash = window.location.hash;
        if (hash) {
            const targetElement = document.getElementById(hash.substring(1));
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });


    document.addEventListener('DOMContentLoaded', function () {
        var navbar = document.getElementById('navbarNav');

        navbar.addEventListener('shown.bs.collapse', function () {
            document.body.classList.add('nav-open');
        });

        navbar.addEventListener('hidden.bs.collapse', function () {
            document.body.classList.remove('nav-open');
        });
    });
}

headerControl();
//
//
// window.onload = function () {
//     setTimeout(function () {
//         const video = document.getElementById('homeSecurityVideo');
//         video.play();
//     }, 1000); // 1 second delay
// };


function sliders() {
    var reviewsSwiper = new Swiper(".reviewsSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var productSwiper = new Swiper(".productSwiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

sliders();

