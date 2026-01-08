let count = 0;

const button = document.getElementById("clickBtn");
const counter = document.getElementById("count");

button.addEventListener("click", () => {
    count++;
    counter.textContent = count;
});
