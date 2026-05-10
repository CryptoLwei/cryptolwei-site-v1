// JavaScript for mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});
