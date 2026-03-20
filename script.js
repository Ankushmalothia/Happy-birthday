document.addEventListener("DOMContentLoaded", () => {
    
    // --- MUSIC SETUP ---
    const bgMusic = document.getElementById("bg-music");
    const musicToggle = document.getElementById("musicToggle");
    const musicIcon = document.getElementById("musicIcon");
    let isMusicPlaying = false;

    // --- PAGE NAVIGATION SETUP ---
    const navButtons = document.querySelectorAll(".nav-btn");
    
    // Function to trigger staggered animations on a specific page
    function animatePage(pageId) {
        const page = document.getElementById(pageId);
        const elementsToAnimate = page.querySelectorAll(".fade-element");
        
        // Reset all elements on this page to hidden state first
        elementsToAnimate.forEach(el => el.classList.remove("visible"));

        // Stagger their entrance
        elementsToAnimate.forEach((element, index) => {
            // Calculate delay: longer delay for deeper pages to encourage slow reading
            let baseDelay = 800;
            if (pageId === "page-5" || pageId === "page-6") baseDelay = 1200; 
            
            setTimeout(() => {
                element.classList.add("visible");
            }, baseDelay * index);
        });
    }

    // Function to handle switching pages safely
    function goToPage(targetPageId) {
        const currentActive = document.querySelector(".page.active");
        const nextActive = document.getElementById(targetPageId);

        // 1. Fade out current page text
        const currentElements = currentActive.querySelectorAll(".fade-element");
        currentElements.forEach(el => el.classList.remove("visible"));

        // 2. Wait for fade out, then swap active classes
        setTimeout(() => {
            currentActive.classList.remove("active");
            nextActive.classList.add("active");
            
            // Scroll back to top if the user scrolled down on a long page
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // 3. Trigger animations on the new page
            animatePage(targetPageId);
        }, 800); // Matches the CSS transition time
    }

    // --- EVENT LISTENERS ---

    // Navigation Buttons
    navButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const target = e.target.getAttribute("data-target");
            
            // If this is the very first click on Page 1, start the music!
            if (!isMusicPlaying && target === "page-2") {
                bgMusic.play().then(() => {
                    isMusicPlaying = true;
                    musicToggle.classList.remove("hidden");
                }).catch(err => console.log("Audio play blocked by browser."));
            }

            goToPage(target);
        });
    });

    // Music Toggle Button
    musicToggle.addEventListener("click", () => {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicIcon.textContent = "🔇";
            isMusicPlaying = false;
        } else {
            bgMusic.play();
            musicIcon.textContent = "🎵";
            isMusicPlaying = true;
        }
    });

    // --- INITIALIZATION ---
    // Start animations for Page 1 on load
    setTimeout(() => {
        animatePage("page-1");
    }, 500);

});