document.addEventListener("DOMContentLoaded", () => {
    // Grab all elements to animate
    const elementsToAnimate = document.querySelectorAll(".fade-up");
    
    // Stagger the fade-in with a longer delay for emotional impact
    elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("visible");
        }, 1200 * index); // 1.2 seconds between each line appearing
    });

    // Button Interaction
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.addEventListener("click", () => {
        nextBtn.textContent = "Loading...";
        nextBtn.style.opacity = "0.7";
        // We will link to the final step here!
    });
});