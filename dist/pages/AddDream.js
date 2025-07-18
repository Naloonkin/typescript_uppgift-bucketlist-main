document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const textInput = document.getElementById("dream");
    const themeSelect = document.getElementById("dream-select");
    const textError = document.getElementById("dream-error-message");
    const themeError = document.getElementById("theme-error-message");
    const successMessage = document.getElementById("success-message");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Förhindrar att default (att skickas direkt till nästa sida t.ex.) körs
        const text = textInput.value.trim(); // tar bort eventuella mellanslag
        // Hämtar det alternativ användaren valt i <select>-menyn.
        // – selectedIndex ger indexet för valt alternativ.
        // – .options[...] ger hela <option>-elementet.
        const selectedOption = themeSelect.options[themeSelect.selectedIndex];
        const theme = selectedOption.text; // Tar det som står i text, inte value
        let valid = true;
        // Validering
        if (text === "") { //Kollar om fältet är tomt
            textError.style.display = "block"; // Är det tomt så ska felmeddelande visas
            valid = false;
        }
        else {
            textError.style.display = "none"; // Om det inte är tomt visas inget felmeddelande
        }
        if (themeSelect.value === "") { //Kollar om fältet är tomt
            themeError.style.display = "block"; // Är det tomt så ska felmeddelande visas
            valid = false;
        }
        else {
            themeError.style.display = "none"; // Om det inte är tomt visas inget felmeddelande
        }
        if (!valid)
            return; // Om någon av fälten var tomma köra inte funktionen och inget sparas
        // Skapa och spara drömmen direkt
        //Skapar ett nytt objekt newDream enligt Dream-interfacet
        const newDream = {
            id: Date.now(), // Genererar ett unikt numeriskt ID baserat på tidsstämpel
            name: text, // Texten som man själv fyller i
            theme: theme, // Temat man väljer i listan
            checked: false, // False från början eftersom man inte klickat i checkboxen
        };
        // Försöker hämta en existerande lista med drömmar från localStorage. Om detta är första gången, kommer stored att bli null
        const stored = localStorage.getItem("dreams");
        //Om något hittas görs texten om till en array, hittas inget läggs en tom array till
        const dreams = stored ? JSON.parse(stored) : [];
        dreams.push(newDream); // Lägger till den nya drömmen längst bak i listan
        localStorage.setItem("dreams", JSON.stringify(dreams)); // Gör om listan till en sträng i JSON-format eftersom localstorage bara kan spara strängar
        form.reset(); // Rensa formuläret
        successMessage.style.display = "block"; // Visa bekräftelse
        setTimeout(() => {
            successMessage.style.display = "none"; // Dölj efter 3 sekunder
        }, 3000);
    });
});
export {};
//# sourceMappingURL=AddDream.js.map