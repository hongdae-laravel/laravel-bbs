console.log("app.js is running.");

const prompt = document.querySelector('#prompt');
console.log(prompt);
let currentPromptValue = prompt.value;
const inputWatcha = setInterval(function() {
    if (currentPromptValue !== prompt.value) {
        console.log('change!');
        prompt.style.width = `${((prompt.value).length * 0.8) + 0.8}rem`;
        currentPromptValue = prompt.value;
    }
}, 200);