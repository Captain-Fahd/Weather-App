const input = document.querySelector(".weather-input");
const btn = document.querySelector(".submit-btn");
const main = document.querySelector(".main");
const resultDoc = document.querySelector(".result");
let tempVal = '';


btn.addEventListener("click", async () => {
    if (tempVal !== '') {
        tempVal = '';
        resultDoc.textContent = '';
    }

    main.style.transition = "all 1s";
    main.style.width = "1000px";
    main.style.height = "400px";

    tempVal = await getWeather(input.value);
    //Creating and assigning the Heading for the Temperature
   const weatherHeading = document.createElement("p");
   resultDoc.appendChild(weatherHeading);
   weatherHeading.textContent = `The Temperature in ${input.value} is currently:${tempVal} \u00B0 C `;

   weatherHeading.style.fontSize = "40px";


})
//link : https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=PD9PGCUBFQJQL4RVTS6A9FP7Q&
//     contentType=json

async function getWeather(city) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
        ${city}?unitGroup=metric&key=PD9PGCUBFQJQL4RVTS6A9FP7Q&contentType=json`);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        return data.currentConditions.temp;
    } catch (error) {
        console.error(error);
        throw error;
    }


}