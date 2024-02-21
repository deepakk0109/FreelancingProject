// For example, highlighting the current section in the navbar
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-items a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(lnk => lnk.classList.remove('active'));
            this.classList.add('active');
        });
    });
});