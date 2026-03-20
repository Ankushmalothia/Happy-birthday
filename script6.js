document.addEventListener("DOMContentLoaded", () => {
    // Grab all elements to animate
    const elementsToAnimate = document.querySelectorAll(".fade-up");
    
    // Stagger the fade-in with a very slow, peaceful pacing
    elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("visible");
        }, 1500 * index); // 1.5 seconds delay between each item
    });

    // Button Interaction (Linking back to the start)
    const restartBtn = document.getElementById("restartBtn");
    restartBtn.addEventListener("click", () => {
        restartBtn.textContent = "Taking you back...";
        restartBtn.style.opacity = "0.6";
        // We will link this back to index.html!
    });
});