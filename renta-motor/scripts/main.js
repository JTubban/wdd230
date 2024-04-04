// const hamButton = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation');

// hamButton.addEventListener('click', () => {
// 	navigation.classList.toggle('open');
// 	hamButton.classList.toggle('open');
// });

window.onload = function() {
    const menuBtn = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');

    menuBtn.addEventListener('click', () =>  {
        mobileNav.classList.toggle('is-active');
        menuBtn.classList.toggle('is-active');
    });
}