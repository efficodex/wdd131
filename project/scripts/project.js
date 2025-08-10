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
        nombre: "Alzamora Joyas",
        descripcion: "Variedad de joyas con materiales oro y plata.",
        imagen: "images/mirtha-joya1.jpg", // imagen principal
        logo: "images/mirtha-joyas.jpg", // logo circular
        redes: {
            facebook: "https://www.facebook.com/profile.php?id=100054317478585"
        }
    },
    {
        nombre: "DJ-Norick",
        descripcion: "Dj fiestas privadas y empresariales.",
        imagen: "images/dj-norick.jpg",
        logo: "images/norick-dj.webp",
        redes: {
            facebook: "https://www.facebook.com/profile.php?id=100066511270406"
        }
    },
    {
        nombre: "Edgar Fernandez- Joyero Modelista",
        descripcion: "Joyero artesano, joyas a pedido en oro y plata.",
        imagen: "images/edgar-joyero.jpg",
        logo: "images/edgar-joyas.jpg",
        redes: {
            facebook: "https://www.facebook.com/edgarfernandez.joyeromodelista"
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


