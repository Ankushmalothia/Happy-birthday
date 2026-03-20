document.addEventListener("DOMContentLoaded", () => {
    // Grab all elements to animate
    const elementsToAnimate = document.querySelectorAll(".fade-up");
    
    // Stagger the fade-in based on the element's order
    elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("visible");
        }, 600 * (index + 1)); // 600ms delay between each item
    });

    // Button Interaction
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.addEventListener("click", () => {
        nextBtn.textContent = "Loading...";
        nextBtn.style.opacity = "0.7";
        // We will link to the final page here!
    });
});