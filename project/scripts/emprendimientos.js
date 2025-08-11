// Contenedor
const contenedor = document.getElementById('lista-emprendimientos');

// Crear tarjetas
emprendimientos.forEach(emp => {
    const card = document.createElement('div');
    card.classList.add('card-emprendimiento');

    card.innerHTML = `
        <img src="${emp.imagen}" alt="${emp.nombre}">
        <div class="card-content">
            <h2>${emp.nombre}</h2>
            <p>${emp.descripcion}</p>
            <a href="${emp.redes.facebook}" target="_blank">Ver en Facebook</a>
        </div>
    `;

    contenedor.appendChild(card);
});



