const counterValue = document.querySelector('#value');
let value = 0;

const btnAddCount = document.querySelector('button[data-action="increment"]');

btnAddCount.addEventListener('click', onAddCount);

function onAddCount() {
    value += 1;
    counterValue.textContent = value;
};


const btnRemoveCount = document.querySelector('button[data-action="decrement"]');

btnRemoveCount.addEventListener('click', onRemoveCount);

function onRemoveCount() {
    value -= 1;
    counterValue.textContent = value;
};





