import { messageElement } from "./elements";

export function getMessage() {
    return messageElement.innerText;
}

export function setMessage(message) {
    messageElement.textContent = message ? `*${message}` : "";
};

export function setLimitMessage(isLimited) {
    if (isLimited) {
        messageElement.textContent = "*Search rate limit exceeded, Please try again later.";
    } else {
        messageElement.textContent = "";
    }
}