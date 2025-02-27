const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('menu');

hamburger.addEventListener('click', function(){
    navMenu.classList.toggle('show');
    hamburger.classList.toggle('active');
});