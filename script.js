// Hamburger Menu Toggle
const menu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for fixed header
                behavior: 'smooth'
            });
        }

        // Close the menu on mobile after clicking
        if (navList.classList.contains('active')) {
            navList.classList.remove('active');
        }
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) { // Show button after scrolling down 300px
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});