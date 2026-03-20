document.addEventListener("DOMContentLoaded", () => {
    // Set up the Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the visible class to trigger the CSS animation
                entry.target.classList.add("visible");
                // Stop observing once it has animated in
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Grab all elements with the fade-up class and observe them
    const elementsToAnimate = document.querySelectorAll(".fade-up");
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Button Interaction (Placeholder for later!)
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.addEventListener("click", () => {
        nextBtn.textContent = "Loading...";
        nextBtn.style.opacity = "0.7";
        // We will add the page linking logic here later!
    });
});