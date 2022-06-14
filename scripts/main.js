const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle Nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });


    // Animate Links 

    navLinks.forEach((link,index) => {
        link.style.animation = 'navLinkfade .5s ease forwards ${index / 7+ 1.5}s';
        console.log(index/7);
    });
}

navSlide();

