//select input value and button
const submit = document.getElementById("submit-btn");
let searchInput = document.getElementById("search-input");

async function searchGifs(e) {
    e.preventDefault();
    let response = await axios.get("api.giphy.com/v1/gifs/search", {params: {q: searchInput.value, api_key: "l7TS7sv9E4gKnzELrWpm4Jo3R0vNn42I"}});
    console.log(response);
    searchInput.value = '';
}

//add event listener to button
submit.addEventListener("click", searchGifs);

