export function insertStoredUsername() {
    const nameSpan = document.getElementById("user-name"); // Letar efter ett HTML-element som heter user-name eller null om inget hittas
    const storedName = localStorage.getItem("username"); // Hämtar det sparade användarnamnet från localStorage som sparades vid login
    if (nameSpan && storedName) { // Kontrollerar så att ett HTML-element hittades (där namnet ska in) och att det fanns något att hitta i local storage
        nameSpan.textContent = storedName; // textContent är en property som skriver ut det som hittas i local storage i HTML-elementet nameSpan (user-name)
    }
}
// Körs direkt vid import (måste ligga utanför funktionen)
insertStoredUsername();
//# sourceMappingURL=insertName.js.map