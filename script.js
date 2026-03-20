document.addEventListener("DOMContentLoaded", () => {
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const openBtn = document.getElementById("openBtn");
    const music = document.getElementById("bg-music");

    // Sequence 1: "Hey Krishna..." (After 0.8s)
    setTimeout(() => {
        line1.classList.add("visible");
    }, 800);

    // Sequence 2: "I made something for you" (After another 1.5s)
    setTimeout(() => {
        line2.classList.add("visible");
    }, 2300);

    // Sequence 3: The Button (After another 1.2s)
    setTimeout(() => {
        openBtn.classList.add("visible");
    }, 3500);

    // Button Click Event
    openBtn.addEventListener("click", () => {
        // Start the music
        music.play().catch(error => {
            console.log("Audio autoplay was prevented by the browser until interaction.");
        });

        // Add your next action here (e.g., transition to the next page)
        // window.location.href = "next-page.html"; 
        
        // For now, let's just make the button text change as feedback
        openBtn.textContent = "Loading...";
        openBtn.style.opacity = "0.7";
    });
});