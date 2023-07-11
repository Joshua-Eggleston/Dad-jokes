const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke")


const apiKey = "gZuG43EhD+toh2MI8JR3fg==CtzAVVU23rY1Iclt";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){

    try {
        joke.innerText = "updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading..."

   const response = await fetch(apiURL, options)
   const data = await response.json()

   btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke"

   jokeEl.innerText = data[0].joke
    } catch (error) {
        jokeEl.innerText = "an error happened, try again later"
        btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke"
    }

}  

btnEl.addEventListener("click", getJoke)