function toggleMenu() {
    var menuLinks = document.querySelector('.menu-links');
    var mobileNavButtons = document.getElementById('mobile-nav-buttons');
    menuLinks.classList.toggle('open');
    mobileNavButtons.classList.toggle('open'); // Toggle visibility of the mobile nav buttons section
}
