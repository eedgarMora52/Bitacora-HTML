const fondo = document.querySelector('.fondo-halo');
const monteIzq = document.querySelector('.monte-amarillo-izquierda');
const monteDer = document.querySelector('.monte-derecho');
const masterChief = document.querySelector('.master-chief');
const logo = document.querySelector('.logo-halo');

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;

  // Mueve cada capa a distinta velocidad
  fondo.style.transform = `translateY(${scrollY * 0.3}px)`;
  monteIzq.style.transform = `translateY(${scrollY * 0.5}px)`;
  monteDer.style.transform = `translateY(${scrollY * 0.4}px)`;
  masterChief.style.transform = `translateY(${scrollY * 0.2}px)`;
  logo.style.transform = `translateY(${scrollY * 0.1}px)`;
});
