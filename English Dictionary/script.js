const input = document.getElementById("input");
const infoText = document.getElementById("info-text");
const meaningContainer = document.getElementById("meaning-container");
const titles = document.getElementById("title");
const meaning = document.getElementById("Meaning");
const audio = document.getElementById("audio");

async function fetchAPI(word){
    try {
        infoText.style.display = 'block';
        infoText.innerText = `searching the meaning of ${word}`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res) =>
        res.json());

        if(result.title){
            infoText.style.display = 'none';
            titles.innerText = word;
            meaning.innerText = result.message;
            audio.style.display = 'none';
            
        }
        else {
            audio.style.display = "inline";
            infoText.style.display = 'none';
            meaningContainer.style.display = "block";
            titles.innerText = result[0].word;
            meaning.innerText = result[0].meanings[0].definitions[0].definition;
            audio.src = result[0].phonetics[0].audio;
            input.value = '';
        }
        
    } catch (error) {
        infoText.innerText = "An Error happened!... Check your Internet";
    }
    
}

input.addEventListener("keyup", (e) => {
    if(e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value)
    }
});