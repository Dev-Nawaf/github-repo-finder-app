import { buttonElement } from "./elements";
import { setLimitMessage, setMessage, getMessage } from "./message";
import setLoadingState from "./setLoadingState";
import setSearchResult from "./setSearchResults";

const USERS_API = "https://api.github.com/search/users?q=";

export default async function performSearch(searchTerm, isUsersSelected) {
    if (!searchTerm.trim()) {
        setMessage("Please fill out the search field");
        return;
    }
    try {
        setLoadingState(true);
        getMessage() && setMessage("");
        setLimitMessage(false);
        buttonElement.disabled = true;

        const typeQuery = isUsersSelected ? "+type:users" : "+type:org";
        const response = await fetch(`${USERS_API}${searchTerm.trim()}${typeQuery}`);

        const remaining = response.headers.get("X-RateLimit-Remaining");
        if (remaining === "0") {
            setLimitMessage(true);
            return;
        }

        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }

        const data = await response.json();
        setSearchResult(data.items);
        //get items obj and use it in setSearchResult
    } catch (error) {
        console.log(error.message);
    } finally {
        setTimeout(() => {
            setLoadingState(false);
            buttonElement.disabled = false;
            buttonElement.classList.remove("disabled");
        }, 1000);
    };
};