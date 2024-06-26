// Dynamically load Anime.js library
var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

// Wait for Anime.js to be loaded
script.onload = function () {
    window.onload = function () {
        // Set focus to the window
        window.focus();

        // Add event listener for the navigation buttons
        document.querySelectorAll('nav a').forEach(function (button) {
            button.addEventListener('click', function (event) {
                // Stop the default link behavior
                event.preventDefault();

                // Start the smoke animation
                createSmoke();

                // Animate the rocket
                anime({
                    targets: '#rocket',
                    bottom: '100%', // Move to top of screen
                    duration: 2000,
                    easing: 'easeInOutQuad',
                    complete: function () {
                        // Redirect after the rocket animation completes
                        window.location.href = event.target.href;
                    }
                });
            });
        });
    };
};

// Function to create smoke particles
function createSmoke() {
    var smokeContainer = document.getElementById('smoke-container');

    for (var i = 0; i < 100; i++) {
        var smokeParticle = document.createElement('div');
        smokeParticle.classList.add('smoke-particle');
        smokeParticle.style.width = Math.random() * 100 + 'px';
        smokeParticle.style.height = smokeParticle.style.width;
        smokeParticle.style.left = Math.random() * window.innerWidth + 'px';

        smokeContainer.appendChild(smokeParticle);

        anime({
            targets: smokeParticle,
            top: '-150%',
            left: '+=' + Math.random() * 200 - 100 + 'px',
            backgroundSize: ['100%', '0%'],
            duration: Math.random() * 3000 + 2000,
            easing: 'linear',
            complete: function () {
                //smokeParticle.remove();
            }
        });
    }
}

var slideIndex = 0;
carousel();

function carousel() {
    var slides = document.querySelectorAll('.slide');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(carousel, 3000); // Change slide every 3 seconds
}