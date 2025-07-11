const cards = document.querySelectorAll('.skill');

cards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;

    const rotateX = ((y - centerY) / centerY) * 20;
    const rotateY = ((x - centerX) / centerX) * 20;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
});



  ScrollReveal().reveal('.reveal', {
    distance: '40px',
    duration: 800,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 200
  });

let NavStatus = false;
const btnHamburger = document.getElementById('hamburger-btn');
const navItems = document.getElementById('nav-items');
navItems.classList.add('hide');
btnHamburger.classList.add('fa-bars');

function switchIcon(toIcon) {
  btn.style.opacity = '0';

  setTimeout(() => {
    btn.classList.remove('fa-bars', 'fa-times');
    btn.classList.add(toIcon);
    btn.style.opacity = '1';
  }, 300);
}



function toggleNavlinks() {
  if(window.innerWidth > 980){
    NavStatus = !NavStatus;
    console.log(`navbar toggled: ${NavStatus}`);
    if (!NavStatus) {
      navItems.classList.add('hide');
      switchIcon('fa-bars');
    } else {
      navItems.classList.remove('hide');
      switchIcon('fa-times');
    }
  }
  

  
}
let lastScrollY = window.scrollY;
const navbar = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down
    navbar.classList.add('hidden');
  } else {
    // Scrolling up
    navbar.classList.remove('hidden');
  }
  lastScrollY = window.scrollY;
});
