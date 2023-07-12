var Cantidad = document.getElementById("cantidadinput")

var nCategoria = document.getElementById("inputGroupSelect01")

var nTotal = 0

const form          = document.getElementById("form")
const username      = document.getElementById("username")
const userlastname  = document.getElementById("userlastname")
const usermemail    = document.getElementById("usermemail")

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});


const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

};

const validateInputs = () => {
    const usernamevalue     = username.value.trim();
    const userlastnamevalue = userlastname.value.trim();
    const useremailvalue    = usermemail.value.trim();

    alert ('Please enter');

    if (usernamevalue === '') {
        alert ('Please enter');
        setError(username,"userName cannot be empty");
    } else {
        setSuccess(username)}


}


