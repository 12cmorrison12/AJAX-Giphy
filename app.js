//select input value and button
const submit = document.getElementById("submit-btn");
let searchInput = document.getElementById("search-input");
const gifs = document.getElementById("results");

const gifResults = (list) => {
    let results = list.data.length;

    let randomNum = Math.floor(Math.random() * results);
    const gifDiv = document.createElement('div');
    const newGif = document.createElement('img');

    newGif.src = list.data[randomNum].images.original.url;

    gifDiv.append(newGif);
    gifs.append(gifDiv);
}

//add event listener to button
submit.addEventListener("submit", async function(e) {
    e.preventDefault();
    searchInput = searchInput.value;
    const response = await axios.get("api.giphy.com/v1/gifs/search", {params: {q: searchInput, api_key: "l7TS7sv9E4gKnzELrWpm4Jo3R0vNn42I"}});
    searchInput.value = '';

    gifResults(response.data);
});

submit.addEventListener("click", function() {
    gifDiv.empty();
})