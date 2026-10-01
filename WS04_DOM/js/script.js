
const taskOneHeading = document.querySelector("#taskOneHeading");

const changeHeadingButton = document.querySelector("#changeHeadingButton");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});


const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});


const changeTextButton = document.querySelector("#changeTextButton");

const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function () {
    animalText.textContent =
        "Elefantti on suuri nisäkäs, joka elää Afrikassa ja Aasiassa.";
});



animalText.addEventListener("dblclick", function () {
    animalText.textContent +=
        " Elefantit ovat tunnettuja hyvästä muististaan.";
});



const animalButton = document.querySelector("#animalButton");

const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.classList.toggle("hidden");
});



const backgroundButton =
    document.querySelector("#backgroundButton");

backgroundButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-background");
});



const animalContent =
    document.querySelector("#animalContent");

const animalHeading =
    document.createElement("h3");

animalHeading.textContent = "Päivän eläin";

animalHeading.classList.add("animal-heading");


const animalParagraph =
    document.createElement("p");

animalParagraph.textContent =
    "Tämän päivän eläin on elefantti. Elefantti on maailman suurin maaeläin.";


const animalImage =
    document.createElement("img");

animalImage.src = "images/elephant.png";

animalImage.alt = "Elefantti";


animalContent.append(
    animalHeading,
    animalParagraph,
    animalImage
);



const hideAnimalButton =
    document.querySelector("#hideAnimalButton");

hideAnimalButton.addEventListener("click", function () {
    animalContent.classList.add("hidden");
});



const showAnimalButton =
    document.querySelector("#showAnimalButton");

showAnimalButton.addEventListener("click", function () {
    animalContent.classList.remove("hidden");
});



const animalSelect =
    document.querySelector("#animalSelect");

const animalName =
    document.querySelector("#animalName");

const animalImageElement =
    document.querySelector("#animalImage");

const animalDescription =
    document.querySelector("#animalDescription");


const animals = {

    elephant: {
        name: "Elefantti",
        image: "images/elephant.png",
        description:
            "Elefantti on maailman suurin maaeläin."
    },

    tiger: {
        name: "Tiikeri",
        image: "images/tiger.png",
        description:
            "Tiikeri on suuri kissaeläin ja taitava metsästäjä."
    },

    penguin: {
        name: "Pingviini",
        image: "images/penguin.png",
        description:
            "Pingviini on lentokyvytön lintu, joka viihtyy kylmissä ympäristöissä."
    },

    panda: {
        name: "Panda",
        image: "images/panda.png",
        description:
            "Panda tunnetaan erityisesti bambun syömisestä."
    }
};


animalSelect.addEventListener("change", function () {

    const selectedAnimal =
        animalSelect.value;

    animalName.textContent =
        animals[selectedAnimal].name;

    animalImageElement.src =
        animals[selectedAnimal].image;

    animalImageElement.alt =
        animals[selectedAnimal].name;

    animalDescription.textContent =
        animals[selectedAnimal].description;
});



animalImageElement.addEventListener(
    "mouseenter",
    function () {

        animalImageElement.classList.add(
            "image-highlight"
        );
    }
);


animalImageElement.addEventListener(
    "mouseleave",
    function () {

        animalImageElement.classList.remove(
            "image-highlight"
        );
    }
);


const animalForm =
    document.querySelector("#animalForm");

const observationAnimal =
    document.querySelector("#observationAnimal");

const observationLocation =
    document.querySelector("#observationLocation");

const observationDate =
    document.querySelector("#observationDate");

const observationTableBody =
    document.querySelector("#observationTableBody");


animalForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const animal =
            observationAnimal.value.trim();

        const location =
            observationLocation.value.trim();

        const date =
            observationDate.value;


        if (
            animal === "" ||
            location === "" ||
            date === ""
        ) {
            alert("Täytä kaikki kentät.");
            return;
        }



        const row =
            document.createElement("tr");



        const animalCell =
            document.createElement("td");

        animalCell.textContent =
            animal;



        const locationCell =
            document.createElement("td");

        locationCell.textContent =
            location;


        

        const dateCell =
            document.createElement("td");

        dateCell.textContent =
            date;


        

        const actionCell =
            document.createElement("td");

        const deleteButton =
            document.createElement("button");

        deleteButton.textContent = "Poista";

        deleteButton.classList.add(
            "delete-button"
        );


        deleteButton.addEventListener(
            "click",
            function () {

                row.remove();

            }
        );


        actionCell.append(deleteButton);


     

        row.append(
            animalCell,
            locationCell,
            dateCell,
            actionCell
        );


    

        observationTableBody.append(row);


        

        animalForm.reset();

    }
);




const deleteButtons =
    document.querySelectorAll(
        ".delete-button"
    );


deleteButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const row =
                    button.closest("tr");

                row.remove();

            }
        );

    }
);




const headerAnimalImage =
    document.querySelector(
        "#headerAnimalImage"
    );


const moveImageButton =
    document.querySelector(
        "#moveImageButton"
    );


moveImageButton.addEventListener(
    "click",
    function () {

        headerAnimalImage.classList.toggle(
            "move-image"
        );

    }
);




const animateImageButton =
    document.querySelector(
        "#animateImageButton"
    );


animateImageButton.addEventListener(
    "click",
    function () {

        headerAnimalImage.classList.remove(
            "animate-image"
        );

        void headerAnimalImage.offsetWidth;

        headerAnimalImage.classList.add(
            "animate-image"
        );

    }
);




const fadeImageButton =
    document.querySelector(
        "#fadeImageButton"
    );


fadeImageButton.addEventListener(
    "click",
    function () {

        headerAnimalImage.classList.toggle(
            "fade-image"
        );

    }
);


// BONUS: POISTA KUVA
// =========================

const removeImageButton =
    document.querySelector(
        "#removeImageButton"
    );


removeImageButton.addEventListener(
    "click",
    function () {

        headerAnimalImage.remove();

    }
);




const listItems =
    document.querySelectorAll("li");


listItems.forEach(
    function (item) {

        item.addEventListener(
            "click",
            function () {

                item.classList.toggle(
                    "list-highlight"
                );

            }
        );

    }
);