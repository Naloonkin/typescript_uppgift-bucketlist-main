const dreamList = document.querySelector(".dream-list"); // Gör en konstant av dream-list från HTML.
// Hämta och rendera listan
function renderDreams() {
    dreamList.innerHTML = ""; // Töm listan för att undvika dubletter
    const stored = localStorage.getItem("dreams"); // Hämtar listan som finns i localstorage
    if (!stored)
        return; // Om inget finns i listan avslutas funktionen för att undvika felmeddelande när parse körs efteråt
    const dreams = JSON.parse(stored); // Gör om sträng i localstorage till lista, följer hur interfacet Dream ser ut.
    const noDreamsMessage = document.getElementById("no-dreams-message"); // Hämtar ID från HTML och gör till konstant
    if (dreams.length === 0) { // Om dreams inte innehåller något visas meddelandet, annars visas det inte
        noDreamsMessage.style.display = "block";
        return;
    }
    else {
        noDreamsMessage.style.display = "none";
    }
    // Index är numret i listan 0,1,2 osv
    dreams.forEach((dream, index) => {
        const li = document.createElement("li"); // För varje objekt görs ett nytt li-element i HTML
        li.classList.add("dream-list_item"); // Lägger till CSS-klass så listan får rätt utseende
        li.setAttribute("data-id", dream.id.toString()); // Lägger till ett data-attribut på <li> för att kunna ta bort rätt dröm från listan. Gör om ID till en sträng
        //Lägger in checkbox, får unikt ID baserat på vilket index drömmen har. Om dream checked är true blir rutan checked.
        // Visar drömmens namn och sen drömmens tema.
        // Ikon med papperskorg för att ta bort en dröm. Klassen delet-dream används nedan för att aktivera click på den.
        li.innerHTML = `
      <input class="dream-check" type="checkbox" id="dream-check-${index}" ${dream.checked ? "checked" : ""}> 

      <span>${dream.name}, <span class="dream-theme">${dream.theme}</span></span>
      
      <button type="button" class="delete-dream"><img src="../assets/images/trash_delete.png" alt="Ta bort"></button>
    `;
        dreamList.appendChild(li); // Lägger till det nya li-elementet i UL så det syns i HTML
    });
}
// Ta bort en dröm
function DeleteButton() {
    dreamList.addEventListener("click", (event) => {
        const button = event.target.closest("button.delete-dream"); // .target är det element som klickades på. Kollar om det var en knapp ->
        if (!button)
            return; // -> Var det inte en knapp avslutas funktionen
        const li = button.closest("li"); // Hittar den li som ligger närmast knappen vi klickade på
        const dreamId = li === null || li === void 0 ? void 0 : li.getAttribute("data-id"); // Hittar det ID som hör till drömmen (som lades in på rad 35)
        if (!dreamId)
            return; // Hittas inget ID avbryts funktionen
        const stored = localStorage.getItem("dreams"); // Hämta drömmar från local storage
        if (!stored)
            return; // Hittas ingen lista avbryts funktionen
        const dreams = JSON.parse(stored); // Gör om strängen från localstorage till lista igen
        const updatedDreams = []; // Skapa en ny tom lista
        for (let i = 0; i < dreams.length; i++) {
            const dream = dreams[i];
            // Är drömmens id INTE samma som det id vi vill ta bort?
            if (dream.id !== Number(dreamId)) {
                updatedDreams.push(dream); // Om IDt inte matchar - Lägg till den i nya listan
            }
        }
        localStorage.setItem("dreams", JSON.stringify(updatedDreams)); // Gör om den nya listan updatedDreams till en sträng och sparar den i local storage. 
        renderDreams(); // Uppdatera listan i HTML så den syns
    });
}
// Kör de två funktionerna renderDreams och DeleteButton när sidan laddas in
renderDreams();
DeleteButton();
export {};
//# sourceMappingURL=Dashboard.js.map