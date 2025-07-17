document.addEventListener('DOMContentLoaded', function() {
    // Testimonial slider functionality
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentIndex = 0;

    // Initialize first slide as active
    slides[0].classList.add('active-slide');
    dots[0].classList.add('active');

    // Add event listeners to dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            // Remove active class from all slides and dots
            slides.forEach(slide => slide.classList.remove('active-slide'));
            dots.forEach(dot => dot.classList.remove('active'));

            // Get index of clicked dot
            currentIndex = parseInt(this.getAttribute('data-index'));

            // Add active class to current slide and dot
            slides[currentIndex].classList.add('active-slide');
            this.classList.add('active');

            // Move the slider
            sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    });
// Mobile menu toggle functionality
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navbar = document.querySelector('.navbar');
    const body = document.body;

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navbar.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navbar.contains(event.target) && !menuToggle.contains(event.target) && navbar.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navbar.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });

        // Close menu when clicking on navbar links
        const navLinks = navbar.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navbar.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
    }

    // Handle window resize - reset mobile menu state when resizing to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navbar.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navbar.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
}); 