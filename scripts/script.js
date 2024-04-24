document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuLateral = document.querySelector('.menu-lateral');
    const iconeX = document.getElementById('icone-x');
    const body = document.body;

    mobileMenu.addEventListener('click', function () {
        if (window.innerWidth < 1000) {
            menuLateral.style.display = 'block';
            body.classList.add('menu-lateral-aberta');
        }
    });

    iconeX.addEventListener('click', function () {
        menuLateral.style.display = 'none';
        body.classList.remove('menu-lateral-aberta');
    });
});