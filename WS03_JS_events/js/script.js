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