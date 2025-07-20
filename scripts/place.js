document.getElementById("temperature").textContent = "15°C";
document.getElementById("conditions").textContent = "Partly Cloudy";
document.getElementById("wind").textContent = "9 km/h";

const temperature = 15; // °C
const windSpeed = 9;  // km/h

const windChillElement = document.querySelector("#weather li:last-child");

function calculateWindChill(temperature, windSpeed) {
    return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

 if (temperature <= 10 && windSpeed >= 4.8) {
     const windChill =  calculateWindChill(temperature, windSpeed);
    windChillElement.innerHTML = `<span class="label">Wind Chill:</span> ${windChill} °C`;
    } else {
    windChillElement.innerHTML = `<span class="label">Wind Chill:</span> N/A `;
    }