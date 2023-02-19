const input = document.querySelector(`#validation-input`);
let string;

input.addEventListener(`input`, onInputEvent);
function onInputEvent(event) {
    string = event.currentTarget.value.length;
    return string;
};

input.addEventListener(`blur`, onInputBlur);
function onInputBlur(event) {
    if (string !== Number(input.getAttribute(`data-length`))) {
        input.classList.add("invalid");
        input.classList.remove("valid");
    } else {
        input.classList.add("valid");
        input.classList.remove("invalid");
    };
};


