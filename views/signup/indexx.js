let nameValidation = false;
let emailValidation = false;
let passwordValidation =false;
let matchValidation = false;


// Regex validations
const EMAIL_VALIDATION = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_VALIDATION = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const NAME_VALIDATION = /^[A-Z\u00d1][a-zA-Z-ÿí\u00f1\u00d1]+(\s*[A-Z\u00d1][a-zA-Z-ÿí\u00f1\u00d1]*)*$/;

//Events
nameInput.addEventListener('input', e=> {
    const nameValidation=NAME_VALIDATION.test(e.target.value);
    if( e, target.value === '')
        nameInput.classList.remove('outline')


})
const nameValidation (input, e) =>{
    if(input.value === ''){
        input.classlist.remove('outline-red-700', 'outline-2','outline');
        input.classlit.remo
    }



};
