const input = document.querySelector(".weather-input");
const btn = document.querySelector(".submit-btn");
const main = document.querySelector(".main");
const resultDoc = document.querySelector(".result");
let currTemp = '';


btn.addEventListener("click", async (event) => {
    if (currTemp !== '') {
        currTemp = '';
    }

    main.style.transition = "all 1s";
    main.style.width = "1000px";
    main.style.height = "400px";

    currTemp = await getWeather(input.value);

    tempVal = document.createElement("h3");
    resultDoc.appendChild(tempVal);
    tempVal.innerText = currTemp;

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
        const temp = data.currentConditions.temp;

        return temp;
    } catch (error) {
        console.error(error);
        throw error;
    }


}