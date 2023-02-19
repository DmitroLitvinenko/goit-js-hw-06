
const input = document.querySelector('#font-size-control'); 
const text = document.querySelector('#text'); 

input.addEventListener('input', onInputRange);

function onInputRange() {
    text.style.fontSize = `${input.value}px`; 
};