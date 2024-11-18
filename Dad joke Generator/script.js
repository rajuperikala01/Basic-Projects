const jokeEl = document.getElementById("joke");
const btnEl = document.getElementById("btn");

const apiKey = "mzxQUDUQFp3BkdoTt2l7RZClob4NcU5DHO8kHAoW";
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
    method: "GET",
    headers : {
        "X-Api-key" : apiKey,
    },
};
async function getJoke() {

    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading";
        const respose  = await fetch(apiUrl, options);
        const data = await respose.json();

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        
        jokeEl.innerText = data[0].joke;

    } catch (error) {
        jokeEl.innerText = "An Error Occurred... Try Again";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
    }
    
}   

btnEl.addEventListener('click', getJoke);