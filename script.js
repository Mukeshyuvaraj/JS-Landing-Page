//Menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

//Showmenu
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

//hide menu
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

//remove menu mobile

const navLinks = document.querySelectorAll('.nav__links');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

//blur and header

const blurHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader);

//Show scroll up

const scrollup = () => {
    const scrollup = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                       : scrollup.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollup);

//scroll section activation link

const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{

    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
            
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    });
}
window.addEventListener('scroll', scrollActive);


//scroll Revealanimation

const scrollAni = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration: 3000,
    delay: 400,
    //reset: true //Animations repeat
})
scrollAni.reveal(`.home__data, .explore__data, .explore__user, .footer__container`);
scrollAni.reveal(`.home__card`,{delay: 600, distance: '100px', interval: 100});
scrollAni.reveal(`.about__data, .join__image`, {origin: 'right'});
scrollAni.reveal(`.about__image, .join__data`, {origin: 'left'});
scrollAni.reveal(`.popular__card`, {interval: 200});