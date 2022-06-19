'use strict';

function displayCityDetails(cityName, temperature, humidity) {
    const message = `You have selected: ${ cityName } \nTemperature: ${ temperature } C \nHumidity: ${ humidity } (%)`;
    const container = document.getElementById("widgetContainer");

    container.innerText = message;

    container.style.fontSize = "25px";
    container.style.textAlign = "center";
    container.style.margin = "25px";
}