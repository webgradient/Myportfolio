const navbar = document.getElementById('nav-bar');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click',()=>{
    navbar.classList.toggle("active");
    hamburger.classList.toggle("active");

})