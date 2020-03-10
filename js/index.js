// Handle menu when scroll
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var navBar = document.getElementsByClassName('myNavbar')[0];
    var logo = document.getElementsByClassName('header__logo')[0];
    if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
        navBar.style.backgroundColor = 'white';
        navBar.style.position = 'fixed';
        navBar.style.width = '100%';
        navBar.style.transition = 'all .4s';
        logo.src = './images/logo.png';
        logo.style.height = '62px';
        logo.style.width = 'auto';
        logo.style.transition = 'all .4s';
    } else {
        navBar.style.backgroundColor = 'transparent';
        logo.src = './images/logo.png';
        logo.style.height = '96px';
        logo.style.width = 'auto';
    }
}
// End handle menu when scroll

// Handle progress-bar skills
$(document).ready(function () {
    $(".skills__progress-bar").waypoint(
        function () {
            $(".skills__progress-bar").css({
                animation: "animate-positive 1s",
                opacity: "1"
            });
        },
        { offset: "75%" }
    );
});
// End handle progress-bar skills
