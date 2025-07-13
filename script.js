document.addEventListener('DOMContentLoaded', function() {
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

            // Get the index of clicked dot
            currentIndex = parseInt(this.getAttribute('data-index'));

            // Add active class to current slide and dot
            slides[currentIndex].classList.add('active-slide');
            this.classList.add('active');

            // Move the slider
            sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    });

}); 