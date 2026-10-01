const taskOneHeading = document.querySelector("#taskOneHeading");
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const changeStyleButton = document.querySelector("#changeStyleButton");
const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeHeadingButton.addEventListener("click", function () {
taskOneHeading.textContent = "Muokattu otsikko!";
});

changeStyleButton.addEventListener("click", function () {
taskOneHeading.classList.toggle("highlight");
});

changeTextButton.addEventListener("click", function () {
if (animalText.textContent === "Elefantit ovat maailman suurimpia maaeläimiä.") {
animalText.textContent =
"Tiikerit ovat suuria petoeläimiä, jotka elävät pääasiassa Aasiassa.";
} else {
animalText.textContent =
"Elefantit ovat maailman suurimpia maaeläimiä.";
}
});

animalText.addEventListener("dblclick", function () {
if (!animalText.textContent.includes("Ne ovat erittäin älykkäitä eläimiä.")) {
animalText.textContent +=
" Ne ovat erittäin älykkäitä eläimiä.";
}
});

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
animalTable.classList.toggle("hidden");
});

const backgroundButton = document.querySelector("#backgroundButton");

backgroundButton.addEventListener("click", function () {
document.body.classList.toggle("dark-background");
});

const animalContent = document.querySelector("#animalContent");

const animalHeading = document.createElement("h3");
animalHeading.textContent = "Päivän eläin";
animalHeading.classList.add("animal-heading");

const animalParagraph = document.createElement("p");
animalParagraph.textContent =
"Pingviinit ovat lentokyvyttömiä merilintuja, jotka ovat erinomaisia uimareita.";

const animalCreatedImage = document.createElement("img");
animalCreatedImage.src = "images/penguin.png";
animalCreatedImage.alt = "Pingviini";

animalContent.append(
animalHeading,
animalParagraph,
animalCreatedImage
);

const hideAnimalButton = document.querySelector("#hideAnimalButton");

hideAnimalButton.addEventListener("click", function () {
animalContent.style.display = "none";
});

const showAnimalButton = document.querySelector("#showAnimalButton");

showAnimalButton.addEventListener("click", function () {
animalContent.style.display = "block";
});

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

const animals = {
elephant: {
name: "Elefantti",
image: "images/elephant.png",
description: "Elefantit ovat maailman suurimpia maaeläimiä."
},

```
tiger: {
    name: "Tiikeri",
    image: "images/tiger.png",
    description: "Tiikeri on suuri kissaeläin ja tehokas peto."
},

penguin: {
    name: "Pingviini",
    image: "images/penguin.png",
    description: "Pingviinit ovat lentokyvyttömiä merilintuja."
},

panda: {
    name: "Panda",
    image: "images/panda.png",
    description: "Panda tunnetaan erityisesti bambusta koostuvasta ruokavaliostaan."
}
```

};

animalSelect.addEventListener("change", function () {
const selectedAnimal = animalSelect.value;
const animal = animals[selectedAnimal];

```
animalName.textContent = animal.name;
animalImage.src = animal.image;
animalImage.alt = animal.name;
animalDescription.textContent = animal.description;
```

});

animalImage.addEventListener("mouseenter", function () {
animalImage.classList.add("image-highlight");
});

animalImage.addEventListener("mouseleave", function () {
animalImage.classList.remove("image-highlight");
});

const animalForm = document.querySelector("#animalForm");
const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");
const observationTableBody = document.querySelector("#observationTableBody");

animalForm.addEventListener("submit", function (event) {
event.preventDefault();

```
const animalValue = observationAnimal.value.trim();
const locationValue = observationLocation.value.trim();
const dateValue = observationDate.value;

if (
    animalValue === "" ||
    locationValue === "" ||
    dateValue === ""
) {
    alert("Täytä kaikki kentät.");
    return;
}

const newRow = document.createElement("tr");

const animalCell = document.createElement("td");
animalCell.textContent = animalValue;

const locationCell = document.createElement("td");
locationCell.textContent = locationValue;

const dateCell = document.createElement("td");
dateCell.textContent = dateValue;

const deleteCell = document.createElement("td");

const deleteButton = document.createElement("button");
deleteButton.textContent = "Poista";
deleteButton.classList.add("delete-button");

deleteButton.addEventListener("click", function () {
    newRow.remove();
});

deleteCell.append(deleteButton);

newRow.append(
    animalCell,
    locationCell,
    dateCell,
    deleteCell
);

observationTableBody.append(newRow);

animalForm.reset();
```

});

const deleteButtons = document.querySelectorAll(".delete-button");

deleteButtons.forEach(function (button) {
button.addEventListener("click", function () {
const row = button.closest("tr");
row.remove();
});
});

const headerAnimalImage = document.querySelector("#headerAnimalImage");

const moveImageButton = document.querySelector("#moveImageButton");

moveImageButton.addEventListener("click", function () {
headerAnimalImage.classList.toggle("move-image");
});

const animateImageButton = document.querySelector("#animateImageButton");

animateImageButton.addEventListener("click", function () {
headerAnimalImage.classList.remove("animate-image");
void headerAnimalImage.offsetWidth;
headerAnimalImage.classList.add("animate-image");
});

const fadeImageButton = document.querySelector("#fadeImageButton");

fadeImageButton.addEventListener("click", function () {
headerAnimalImage.classList.toggle("fade-image");
});

const removeImageButton = document.querySelector("#removeImageButton");

removeImageButton.addEventListener("click", function () {
if (headerAnimalImage) {
headerAnimalImage.remove();
}
});

const allListItems = document.querySelectorAll("li");

allListItems.forEach(function (item) {
item.addEventListener("click", function () {
item.classList.toggle("list-highlight");
});
});
