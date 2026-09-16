function showTable() {
    const animal = "Tiikeri";
    const habitat = "Metsä";
    const diet = "Liha";

    const table = `
        <table>
            <tr>
                <th>Eläin</th>
                <th>Elinympäristö</th>
                <th>Ruokavalio</th>
            </tr>
            <tr>
                <td>${animal}</td>
                <td>${habitat}</td>
                <td>${diet}</td>
            </tr>
        </table>
    `;

    const container = document.querySelector("#tableContainer");
    container.innerHTML = table;
}


const exercise2 = document.querySelector("h2:nth-of-type(2)");

exercise2.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});


const exercise1 = document.querySelector("h2:nth-of-type(1)");

exercise1.addEventListener("click", function() {
    exercise1.style.color = "red";
    exercise1.innerHTML = "Bye bye mouse!";
});


const feedback = document.querySelector("#feedback");
const status = document.querySelector("#status");

feedback.addEventListener("focus", function() {
    status.innerHTML = "Kirjoita palautteesi tähän.";
});

feedback.addEventListener("blur", function() {
    status.innerHTML = "";
});

const charcount = document.querySelector("#charcount");

const preview = document.querySelector("#preview");

feedback.addEventListener("input", function() {
    charcount.innerHTML = feedback.value.length + "/200";
    preview.innerHTML = feedback.value;
});
const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (feedback.value.length < 10 || feedback.value.length > 200) {
        status.innerHTML = "Palaute pitää olla 10–200 merkkiä.";
    } else {
        status.innerHTML = "Thank you for your feedback!";
        feedback.value = "";
        preview.innerHTML = "";
        charcount.innerHTML = "0/200";
    }
});

document.addEventListener("keydown", function(event) {
    document.querySelector("#keyinfo").innerHTML =
        "Näppäin: " + event.key +
        " | Koodi: " + event.code +
        " | Shift: " + event.shiftKey +
        " | Ctrl: " + event.ctrlKey +
        " | Alt: " + event.altKey;
});

let keyCount = 0;

document.addEventListener("keydown", function(event) {
    keyCount++;

    document.querySelector("#keycount").innerHTML =
        "Näppäimiä painettu: " + keyCount;
});
