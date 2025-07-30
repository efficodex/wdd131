const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


//objects for the temples
//This file contains an array of temple objects with their details.
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
  {
	templeName: "Salt Lake City Utah",
	location: "Salt Lake City, Utah, United States",
	dedicated: "1893, April, 6",
	area: 106000,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
  },
  {
	templeName: "San Diego California",
	location: "San Diego, California, United States",
	dedicated: "1993, June, 3",
	area: 160000,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-mormon-temple-1164678-wallpaper.jpg"
	},
  {
	templeName: "Provo City Center Utah",	
	location: "Provo, Utah, United States",
	dedicated: "2016, March, 20",	
	area: 70000,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple08.jpg"
	}

];

/*****************************************/
const container = document.getElementById('templeContainer');

function displayTemples(filteredTemples) {
  container.innerHTML = ""; // limpia el contenido actual

  filteredTemples.forEach(temple => {
    const card = document.createElement('div');
    card.classList.add('temple-card');

    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
    `;

    container.appendChild(card);
  });
}
/*********************************************/

function filterTemples(criteria) {
  let filtered = [];

  filtered = temples.filter(t => {
    const dateParts = t.dedicated.split(", ");
    const year = parseInt(dateParts[0]);
    const area = t.area;

    switch (criteria) {
      case "old":
        return year < 1900;
      case "new":
        return year > 2000;
      case "large":
        return area > 90000;
      case "small":
        return area < 10000;
      default:
        return true; // para "home"
    }
  });

  displayTemples(filtered);
}

/*************************************/

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // elimina clase 'active' de todos los enlaces
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    e.target.classList.add("active");

    const criteria = e.target.textContent.toLowerCase(); // "home", "old", etc.
    filterTemples(criteria);
  });
});

/*******************************************/

displayTemples(temples);

/*********************************/

const year = document.querySelector("#currentYear");
let lastModified1 = document.querySelector("#lastModified")

//the objects
const today = new Date();
let oLastModif = new Date(document.lastModified);
year.innerHTML += `${today.getFullYear()} Alexandra Fernandez - Perú`;
lastModified1.innerHTML += oLastModif;