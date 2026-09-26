const changeHeadingButton = document.querySelector("#changeHeadingButton");

const changeStyleButton = document.querySelector("#changeStyleButton");

const changeTextButton = document.querySelector("#changeTextButton");

const taskOneHeading = document.querySelector("#taskOneHeading");

const animalText = document.querySelector("#animalText");

changeHeadingButton.addEventListener("click", function () {

    taskOneHeading.textContent = "Muokattu otsikko!";

});

changeStyleButton.addEventListener("click", function () {

    taskOneHeading.classList.toggle("highlight");

});
changeTextButton.addEventListener("click", function () {

    animalText.textContent = "Tiikerit ovat suuria petoeläimiä.";

});