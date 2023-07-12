
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errormsg');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errormsg');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const adapterForm = (form) => {
    const {username, userlastname,useremail,cantidadinput,inputGroupSelect01} = form;
    // ojo con nCantidad
    const data = {
        nombre   :  username.value,
        apellido :  userlastname.value,
        correo   :  useremail.value,
        cantidad :  cantidadinput.value,
        categoria:  inputGroupSelect01.value
    }

    return data
}

const submitForm = async(form) => {

    console.log("submitForm : ",form)

    const data = adapterForm(form)

    console.log("adapterForm ",data)

    const config = {method: 'POST', body: JSON.stringify(data)}

    let confirm
    confirm = await fetch('/api/tickets',config)
    confirm = await confirm.json()
    console.log(confirm)
        
}



function calc(){
    const usrnamevalue = document.getElementById('username').value.trim();
    const usrlastnamevalue = document.getElementById("userlastname").value.trim()
    const usremailvalue = document.getElementById("useremail").value.trim()
    const nCantidad = document.getElementById("cantidadinput").value.trim()
    var nTotal = 0
    const nCategoria = document.getElementById("inputGroupSelect01")
    const errorElement = document.getElementById("error")

    const {username,userlastname,useremail,cantidadinput,inputGroupSelect01} = form

    let errors = []
    errorElement.innerHTML = ''

    console.log(nCategoria.value);

    if (usrnamevalue === '' || usrnamevalue == null) {
        errors.push('Debe introducir el nombre');
        setError(username, 'Debe introducir el nombre');

    } else {    
        setSuccess(username);
    }

    if (usrlastnamevalue === '' || usrlastnamevalue == null) {
        errors.push('Debe introducir el apellido');
        setError(userlastname, 'Debe introducir el apellido');   
    } else {    
        setSuccess(userlastname);
    }

    if (usremailvalue === '' || usremailvalue == null) {
        errors.push('Debe introducir el email');   
        setError(useremail, 'Debe introducir el email');
    }
    else {    
        setSuccess(useremail);
    }

    if(Number(nCantidad) <= 0) {
        errors.push('Debe introducir una cantidad positiva'); 
        setError(cantidadinput, 'Debe introducir una cantidad positiva');
    }
    else {    
        setSuccess(cantidadinput);
    }
    
    if (nCategoria.value === '' || nCategoria.value === undefined || nCategoria.value === null || nCategoria.value === 'Elija una opción') {
        errors.push('Debe elegir una categoria');
        setError(combo, 'Debe introducir una categoría');
    }
    else {
        document.getElementById('categoriaerrmsg').innerText=''
    }

    if (errors.length > 0) {
        //errorElement.innerHTML = errores.join(', ')   
        }
    else{
        
        var nCant = Number(nCantidad);

        if (nCategoria.value === "1") {
            nTotal = nCant *  40;
        }

        if (nCategoria.value === "2") {
            nTotal = nCant *  100;
        }

        if (nCategoria.value === "3") {
            nTotal = nCant *  170;
        }
        //
        var tituloPagina = document.getElementById('totaltext')
        tituloPagina.textContent="Total a Pagar: $ "+nTotal 

        if (nTotal > 0) {
            submitForm(form)
        //Swal.fire(
        //    'Excelente!',
        //    'Resumen ingresado!',
        //    'success'
        //  )
        }     
        }
};

function clean(){

    var title = document.getElementById('totaltext')
    title.textContent="Total a Pagar: $ "
    var inputElement = document.getElementById("cantidadinput")
    inputElement.value=0
    var inputElement = document.getElementById("username")
    inputElement.value=""
    var inputElement = document.getElementById("userlastname")
    inputElement.value=""
    var inputElement = document.getElementById("useremail")
    inputElement.value=""
    var inputElement = document.getElementById("inputGroupSelect01")
    inputElement.value=""
    var title = document.getElementById('error')
    title.textContent=""
}

function setCategory(cOption) {
    var optionElement = document.getElementById("inputGroupSelect01")
    optionElement.value=cOption
    
}