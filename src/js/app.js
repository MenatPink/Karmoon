// Menu Nav Open Event
const burgerMenu = document.querySelector('#nav-opener');
const openNavigation = document.querySelector('.full-screen-navigation');
burgerMenu.addEventListener('click', () => {
    openNavigation.classList.remove('nav-close');
});
//Close
openNavigation.addEventListener('click', (e) => {
    e.currentTarget.classList.add('nav-close')
});