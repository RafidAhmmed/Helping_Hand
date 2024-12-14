const navbar = document.getElementById('top');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            if (window.scrollY > lastScrollY) {
                // Scrolling down: Hide the navbar
                navbar.classList.add('translate-y-[-100%]');
            } else {
                // Scrolling up: Show the navbar
                navbar.classList.remove('translate-y-[-100%]');
            }
            lastScrollY = window.scrollY;
        });