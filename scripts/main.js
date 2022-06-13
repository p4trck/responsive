const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle Nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })


    // Animate Links 

   navLinks.forEach((link,index) => {
    link.animate = 'navLinkFade 500ms ease forwards ${index/7}s';
   });




navSlide();

