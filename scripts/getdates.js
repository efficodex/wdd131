//the DOM element for output
const year = document.querySelector("#currentYear");
let lastModified1 = document.querySelector("#lastModified")

//the objects
const today = new Date();
let oLastModif = new Date(document.lastModified);
year.innerHTML += `${today.getFullYear()} Alexandra Fernandez - Perú`;
lastModified1.innerHTML += oLastModif;