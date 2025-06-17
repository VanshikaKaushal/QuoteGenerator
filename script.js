const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

async function fetchQuote() {
  newQuoteBtn.disabled = true;
  newQuoteBtn.textContent = "Loading...";

  try {
    const response = await fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random");
    const data = await response.json();
    const quote = data[0]; // the API returns an array

    quoteText.textContent = `"${quote.q}"`;
    authorText.textContent = quote.a ? `— ${quote.a}` : "— Unknown";

    newQuoteBtn.textContent = "New Quote";
    newQuoteBtn.disabled = false;
  } catch (error) {
    quoteText.textContent = "Oops! Couldn't fetch quote.";
    authorText.textContent = "";
    newQuoteBtn.textContent = "Try Again";
    console.error("Error loading quote:", error);
  }
}

newQuoteBtn.addEventListener("click", fetchQuote);

// Load the first quote
fetchQuote();
