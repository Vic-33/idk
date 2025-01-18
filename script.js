document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the scroll-trigger class
    const scrollTriggers = document.querySelectorAll('.scroll-trigger');

    // Intersection Observer for scroll-trigger elements
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class to trigger fade-in effect
                entry.target.classList.add('visible');
                scrollObserver.unobserve(entry.target); // Trigger animation only once
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Observe all scroll-trigger elements
    scrollTriggers.forEach(element => scrollObserver.observe(element));
});
