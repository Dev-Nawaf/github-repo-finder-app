import { buttonElement, searchInput, usersInputElement } from "./scripts/elements";
import performSearch from "./scripts/performSearch.js";

buttonElement?.addEventListener("click", (e) => {
    e.preventDefault();
    performSearch(searchInput.value, usersInputElement.checked);// check users checkbox 
});

