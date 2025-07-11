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
