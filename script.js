document.getElementById('celebrateBtn').addEventListener('click', function() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.style.display = 'block'; // Show confetti container
    startConfetti(); // Start the confetti effect
});

function startConfetti() {
    const colors = ['#FFC700', '#FF4B00', '#FF0080', '#00BFFF', '#00FF00'];
    const numParticles = 200; // Number of confetti particles

    for (let i = 0; i < numParticles; i++) {
        createParticle(colors[Math.floor(Math.random() * colors.length)]);
    }
}

function createParticle(color) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.backgroundColor = color;
    particle.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    particle.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random duration
    particle.style.opacity = Math.random(); // Random opacity
    document.getElementById('confetti').appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 5000); // Remove after 2 seconds
}