document.addEventListener("DOMContentLoaded", () => {
    // Grab all elements that need to animate (heading, paragraphs, button)
    const elementsToAnimate = document.querySelectorAll(".fade-up");
    
    // Loop through each element and stagger their appearance
    elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("visible");
        }, 800 * (index + 1)); // Multiplies 800ms by the element's order
    });

    // Button Click Event for moving to Page 3
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.addEventListener("click", () => {
        // Prepare for the next page transition
        nextBtn.textContent = "Loading...";
        nextBtn.style.opacity = "0.7";
        
        // Uncomment and update the line below when you have Step 3 ready
        // window.location.href = "page3.html"; 
    });
});