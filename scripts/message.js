import { messageElement } from "./elements";

export function getMessage() {
  return messageElement.innerText;
}

export function setMessage(message) {
  if (message) {
    messageElement.textContent = message;
    clearMessage();
  } else {
    messageElement.textContent = "";
  }
}

export function setLimitMessage(isLimited) {
  if (isLimited) {
    //show message for while searching
    messageElement.textContent =
      "*Search rate limit exceeded, Please try again later.";
    clearMessage();
  }
}

const clearMessage = () => {
  setTimeout(() => {
    messageElement.textContent = "";
  }, 5000);
};
