
const form = document.querySelector('.login-form');
const mail = form.elements.email;
const password = form.elements.password;

console.log(mail, password)

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event){
    event.preventDefault();
    if (mail.value === '' || password.value === '') { 
        alert('Все поля должны быть заполнены!');
        return;
};

const formData = { 
    email: mail.value,
    password: password.value,
  };

  console.log(formData);

  form.reset();
};

