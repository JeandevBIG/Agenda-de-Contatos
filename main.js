const form = document.getElementById("form");
const inputName = document.getElementById("name");
const inputContact = document.getElementById("contact");
const inputEmail = document.getElementById("email");
let nameContacts = [];
let numberContact = [];
let nameEmail = [];
let completeTable = "";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addContactList();
    updateTable();

    inputName.value = "";
    inputContact.value = "";
    inputEmail.value = "";
});

function addContactList() {
    if (
    nameContacts.includes(inputName.value) || numberContact.includes(inputContact.value) || nameEmail.includes(inputEmail.value) 
) {
    alert("Contato ou número já foi adicionado a lista!");
    } else {
    nameContacts.push(inputName.value);
    numberContact.push(inputContact.value);
    nameEmail.push(inputEmail.value);
    let contact = `<tr>\n
    <td>${inputName.value}</td>\n
    <td>${inputContact.value}</td>\n
    <td>${inputEmail.value}</td>\n
    </tr>`;

    completeTable += contact;
    }
}

function updateTable() {
    const tableContacts = document.querySelector("tbody");
    tableContacts.innerHTML = completeTable;
}
