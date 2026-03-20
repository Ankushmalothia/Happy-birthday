document.getElementById('startJourneyBtn').addEventListener('click', function() {
    const hiddenSection = document.getElementById('hiddenMessage');
    const button = document.getElementById('startJourneyBtn');
    
    // Hide the button smoothly
    button.style.display = 'none';
    
    // Reveal the message
    hiddenSection.classList.remove('hidden');
    
    // Slight delay for smooth fade-in effect
    setTimeout(() => {
        hiddenSection.classList.add('visible');
    }, 100);
});