window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let moveDistance = scrollPosition * 2;
    document.querySelector('.ghost').style.transform = 'translateX(' + moveDistance + "px";
});
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let moveDistance = scrollPosition * 4;
    document.querySelector('.bat').style.transform = 'translateX(' + moveDistance + "px";
});