// här är det bara level-up!
import { name, themes } from "../variables.js";
const nameInput = document.getElementById("name-input");
nameInput.value = name;
const themeList = document.getElementById("theme-list");
if (themeList) {
    themes.forEach(theme => {
        const li = document.createElement("li");
        li.innerHTML = `<p>${theme}</p> <img src="../assets/images/trash_delete.png" />`;
        themeList.appendChild(li);
    });
}
// "logga ut"
const logOutBtn = document.querySelector(".logout");
logOutBtn === null || logOutBtn === void 0 ? void 0 : logOutBtn.addEventListener("click", logOut);
function logOut() {
    window.location.replace('login.html');
}
;
//# sourceMappingURL=Settings.js.map