// script.js

// Smooth scrolling functionality
const smoothScroll = (target) => {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

// Navigation functionality
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        smoothScroll(link.getAttribute('href'));
    });
});

// Interactive elements functionality
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active');
        const content = dropdown.querySelector('.dropdown-content');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
