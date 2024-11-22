const button = document.getElementById("actionButton");
const Display = document.querySelector(".quoteDisplay");
import { API_Key } from "./storage";

function fetchQuote() {
  return new Promise((resolve, reject) => {
    fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": API_Key,
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}
button.addEventListener("click", (e) => {
  Display.textContent = "";
  Display.classList.add("spinner");
  fetchQuote().then((data) => {
    Display.classList.remove("spinner");
    Display.textContent = data[0].quote;
  });
});
