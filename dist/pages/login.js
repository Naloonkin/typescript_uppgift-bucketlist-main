"use strict";
// Global variabel (måste ligga utanför en funktion för att vara tillgänglig i hela filen)
let myName = "";
// Hämta element
const form = document.querySelector("form");
const nameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const nameErrorMsg = document.getElementById("username-error-message");
const passwordErrorMsg = document.getElementById("password-error-message");
const togglePasswordBtn = document.querySelector(".toggle-password");
const eyeIcon = togglePasswordBtn.querySelector("img");
// Visa/dölj lösenord
togglePasswordBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") { // Kollar vilken typ det är, är det password så är det dolt
        passwordInput.type = "text"; // Visa lösenord som vanlig etxt
        eyeIcon.alt = "Dölj lösenord"; // Ändra ALT-text på knappen
    }
    else {
        passwordInput.type = "password"; // Dölj lösenord
        eyeIcon.alt = "Visa lösenord"; // Ändra ALT-text på knappen
    }
});
// Formulärvalidering
form.addEventListener("submit", (event) => {
    let valid = true;
    const enteredName = nameInput.value.trim();
    const enteredPassword = passwordInput.value;
    // Validera namn
    if (enteredName === "") { // Om namnet är tomt syns felmeddelande
        nameErrorMsg.textContent = "Du måste fylla i ditt namn.";
        nameErrorMsg.style.display = "block";
        valid = false;
    }
    else {
        myName = enteredName; // Om nmanet är ifyllt - spara till global variabel
    }
    // Validera lösenord
    if (enteredPassword.length < 4) { // Om det man skrivit in är mindre än fyra tecken syns felmeddelandet
        passwordErrorMsg.textContent = "Lösenordet måste vara minst 4 tecken långt.";
        passwordErrorMsg.style.display = "block";
        valid = false;
    }
    if (!valid) {
        event.preventDefault(); // Om något inte är valid så stoppas formuläret från att skicka vidare
    }
    else {
        localStorage.setItem("username", myName);
        console.log(myName);
        // Är det valid skickas man till dashboard.html eftersom det är länkat via login.html.
    }
});
//# sourceMappingURL=Login.js.map