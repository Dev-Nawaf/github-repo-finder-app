import { loaderElement } from "./elements";
import setSearchResult from "./setSearchResults";

export default function (loaingState) {
    loaderElement.classList.toggle("hidden", !loaingState);
    loaingState && setSearchResult(null);
};