const quoteEl = document.getElementById("quote");
const btn = document.getElementById("btn");
const author = document.getElementById("author");

const apiUrl = "https://api.quotable.io/quotes/random";

async function getQuote() {
    try {
        author.style.display = 'none';
        btn.disabled = true;
        quoteEl.innerText = "updating....";
        btn.innerText = "Loading...";
        const respose  = await fetch(apiUrl);
        const data = await respose.json();
    
        btn.disabled = false;
        quoteEl.innerText = data[0].content;
        author.innerText = data[0].author;
        author.style.display = 'inline';
        btn.innerText="Get Quote";
    } catch (error) {
        quoteEl.innerText = "An Error Occurred... Try Again";
        btn.disabled = false;
        btn.innerText = "Get Quote";
    }
}
btn.addEventListener('click', getQuote);