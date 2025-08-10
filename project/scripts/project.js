const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-links');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('active'); // antes ponía 'open'
    hamButton.classList.toggle('open');    // esta sí la puedes dejar para cambiar el icono
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
        imagen: "images/edgar-joyas.jpg",
        logo: "images/edgar-joyero.jpg",
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

const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML += `${today.getFullYear()} Alexandra Fernandez - Peru`;