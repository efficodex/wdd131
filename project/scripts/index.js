

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

