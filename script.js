document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active'); // For animating the hamburger icon
        });

        // Close nav menu when a link is clicked (for single-page navigation)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Optional: Add scroll effects or sticky header class if desired
    // For example, adding a class to the header on scroll to make it opaque/shadowed
    // window.addEventListener('scroll', () => {
    //     const header = document.querySelector('header');
    //     if (window.scrollY > 50) {
    //         header.classList.add('scrolled');
    //     } else {
    //         header.classList.remove('scrolled');
    //     }
    // });
});