// Menu Nav Open Event
const burgerMenu = $('#nav-opener');
const openNavigation = $('.full-screen-navigation');
burgerMenu.click(function () {
    burgerMenu.attr("src", function (i, attr) {
        return attr == "build/images/Group 2.png" ? "build/images/ic_drawer.png" : "build/images/Group 2.png"
    })
    openNavigation.toggleClass('nav-close');
});
// // Close
// openNavigation.click(function (e) {
//     e.currentTarget.addClass('nav-close')
// });