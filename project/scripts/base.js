//MENU HAMBURGUESA
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-links');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('active'); // antes ponía 'open'
    hamButton.classList.toggle('open');    // esta sí la puedes dejar para cambiar el icono
});


// FOOTER YEAR
const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML += `${today.getFullYear()} Alexandra Fernandez - Peru`;