setInterval(function () {
  let cityOneElement = document.querySelector("#city-1");
  let cityOneDateElement = cityOneElement.querySelector(".date");
  let cityOneTimeElement = cityOneElement.querySelector(".time");
  cityOneTime = moment().tz("America/Los_Angeles");

  cityOneDateElement.innerHTML = moment().format("MMMM Do YYYY");
  cityOneTimeElement.innerHTML = cityOneTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

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
}, 1000);
