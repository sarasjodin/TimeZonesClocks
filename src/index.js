let selectedCity = "America/Los_Angeles"; // Default selected city

function updateTime() {
  let cityElement = document.querySelector("#city-1");
  let cityDateElement = cityElement.querySelector(".date");
  let cityTimeElement = cityElement.querySelector(".time");
  let cityTime = moment().tz(selectedCity);

  cityDateElement.innerHTML = cityTime.format("MMMM Do YYYY");
  cityTimeElement.innerHTML = cityTime.format("h:mm:ss[<small>]A[</small>]");

  let cityTwoElement = document.querySelector("#city-2");
  let cityTwoDateElement = cityTwoElement.querySelector(".date");
  let cityTwoTimeElement = cityTwoElement.querySelector(".time");
  cityTwoTime = moment().tz("Europe/London");

  cityTwoDateElement.innerHTML = moment().format("MMMM Do YYYY");
  cityTwoTimeElement.innerHTML = cityTwoTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  let cityThreeElement = document.querySelector("#city-3");
  let cityThreeDateElement = cityThreeElement.querySelector(".date");
  let cityThreeTimeElement = cityThreeElement.querySelector(".time");
  cityThreeTime = moment().tz("Asia/Tokyo");

  cityThreeDateElement.innerHTML = moment().format("MMMM Do YYYY");
  cityThreeTimeElement.innerHTML = cityThreeTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  let cityFourElement = document.querySelector("#city-4");
  let cityFourDateElement = cityFourElement.querySelector(".date");
  let cityFourTimeElement = cityFourElement.querySelector(".time");
  cityFourTime = moment().tz("Australia/Sydney");

  cityFourDateElement.innerHTML = moment().format("MMMM Do YYYY");
  cityFourTimeElement.innerHTML = cityFourTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}

function updateCities(event) {
  let selectedValue = event.target.value;
  if (selectedValue !== "") {
    selectedCity = selectedValue;
    updateTime();
  } else {
    location.reload();
  }
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  let cityElement = document.querySelector("#city-1");
  let cityDateElement = cityElement.querySelector(".date");
  let cityTimeElement = cityElement.querySelector(".time");

  cityDateElement.innerHTML = cityTime.format("MMMM Do YYYY");
  cityTimeElement.innerHTML = `${cityTime.format(
    "h:mm:ss"
  )} <small>${cityTime.format("A")}</small>`;
  cityElement.querySelector("h2").innerHTML =
    citiesElement.options[citiesElement.selectedIndex].text;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCities);
