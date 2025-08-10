document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Toggle menú en mobile
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });

  // Cerrar menú al hacer clic en un enlace
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('open');
    });
  });
});

const emprendimientos = [
    {
        nombre: "Manos Creativas",
        descripcion: "Artesanías únicas hechas a mano con materiales locales.",
        imagen: "https://via.placeholder.com/300x200", // imagen principal
        logo: "images/logo1.png", // logo circular
        redes: {
            facebook: "https://facebook.com/manoscreativas",
            instagram: "https://instagram.com/manoscreativas"
        }
    },
    {
        nombre: "Panadería El Buen Trigo",
        descripcion: "Pan artesanal fresco y saludable cada día.",
        imagen: "https://via.placeholder.com/300x200",
        logo: "images/logo2.png",
        redes: {
            facebook: "https://facebook.com/elbuentrigo",
            instagram: "https://instagram.com/elbuentrigo"
        }
    },
    {
        nombre: "EcoHuerto",
        descripcion: "Productos orgánicos y huertos urbanos sostenibles.",
        imagen: "https://via.placeholder.com/300x200",
        logo: "images/logo3.png",
        redes: {
            facebook: "https://facebook.com/ecohuerto",
            instagram: "https://instagram.com/ecohuerto"
        }
    },
    {
        nombre: "Ropa con Propósito",
        descripcion: "Moda sostenible hecha por mujeres emprendedoras.",
        imagen: "https://via.placeholder.com/300x200",
        logo: "images/logo4.png",
        redes: {
            facebook: "https://facebook.com/ropaconproposito",
            instagram: "https://instagram.com/ropaconproposito"
        }
    }
];

// Mostrar solo 2 logos aleatorios
const logosContainer = document.getElementById('logos-container');
const emprendimientosAleatorios = emprendimientos
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

emprendimientosAleatorios.forEach(emp => {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.backgroundImage = `url(${emp.logo})`;
    logosContainer.appendChild(circle);
});