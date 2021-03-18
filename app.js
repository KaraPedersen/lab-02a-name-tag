const div = document.getElementById ('change-div');
const button = document.getElementById ('change-button');
const input = document.getElementById ('change-input');

console.log(button);

button.addEventListener('click', () =>{
    const userTyped = input.value;
    div.textContent = userTyped;
} );