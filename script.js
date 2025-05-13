document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            // Change icon for toggle
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Placeholder for cart count update - in a real app, this would be dynamic
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        // Example: You might fetch this from localStorage or an API
        // cartCountElement.textContent = getCartItemCount(); 
        // For now, it uses the HTML value or you can set it here:
        // cartCountElement.textContent = '3'; 
    }

    // Smooth scroll for internal links (optional)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.getAttribute('href').length > 1) { // Exclude href="#"
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                // Only prevent default if it's a real anchor link for scrolling
                if (href.startsWith('#') && document.querySelector(href)) {
                    e.preventDefault();
                    document.querySelector(href).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
});