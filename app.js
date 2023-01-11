//select input value and button
let searchInput = document.getElementById('search-input').value;
const submit = document.getElementById('submit-btn');

//add event listener to button
submit.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(searchInput);
})