const emailInput = document.querySelector('.email-input');
const validationOutput = document.querySelector('.validation-output');
const form = document.querySelector('.email-form')
const errorIcon = document.querySelector('.error-icon');


function ValidateEmail(input){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(input.match(mailformat)){
        return true;
        }else{
        return false;
        }
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputValue = emailInput.value;
    console.log(inputValue);
    if(ValidateEmail(inputValue)){
        if(inputValue.length < 25){
            validationOutput.innerHTML = "The email has been successfully sent.";
            validationOutput.style.color = 'green';
            errorIcon.style.display = 'none';
        }
        
    }
    else{
        validationOutput.innerHTML = "Please provide a valid email.";
        validationOutput.style.color = 'red';
        errorIcon.style.display = 'block';
        
    }
    
    
})