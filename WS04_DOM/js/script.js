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


// TEHTÄVÄ 2

const animalContent = document.querySelector("#animalContent");

const animalHeading = document.createElement("h3");

animalHeading.textContent = "Päivän eläin";

animalHeading.classList.add("animal-heading");


const animalParagraph = document.createElement("p");

animalParagraph.textContent =
    "Pingviinit ovat lentokyvyttömiä lintuja, jotka elävät pääasiassa eteläisellä pallonpuoliskolla.";


const animalImage = document.createElement("img");

animalImage.src = "images/penguin.png";

animalImage.alt = "Pingviini";


animalContent.append(
    animalHeading,
    animalParagraph,
    animalImage
);


// TEHTÄVÄ 2 – PAINIKKEET

const hideAnimalButton = document.querySelector("#hideAnimalButton");

const showAnimalButton = document.querySelector("#showAnimalButton");


hideAnimalButton.addEventListener("click", function () {

    animalContent.style.display = "none";

});


showAnimalButton.addEventListener("click", function () {

    animalContent.style.display = "block";

});