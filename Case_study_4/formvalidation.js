function onlyLettersAndSpace(str) {
    // only contains letters and spaces
    // additional: must contain at least 1 letter
    return (/[a-zA-Z]/.test(str) && /^[A-Za-z\s]+$/.test(str));
}

function isValidEmail(str){
    // contains a username part follows by "@" and a domain name part
    // the username contains word characters including hyphen "-" and period "."
    // the domain name contains 2-4 address extensions
    // each extension is string of word characters and separated from the other by "."
    // the last extension must have 2-3 characters
    // additional: the username must start with letter
    
    const pattern = /^[a-zA-Z][\w.-]*@(?:\w+\.){1,3}\w{2,3}$/;
    return pattern.test(str);
}

function validateForm() {
    'use strict';

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var startdate = document.getElementById("startdate");
    var experience = document.getElementById("experience");

    // validate
    
    if((name.value.length > 0) && (email.value.length > 0) && (experience.value.length > 0)){
        if(!onlyLettersAndSpace(name.value)){
            return false;
        }
        
        if(!isValidEmail(email.value)){
            alert("Email format is incorrect!");
            return false;
        }

        if(startdate.value.length === 0){
            return true;
        }
        const today = new Date();
        const startdate_datetime = new Date(startdate.value);
        if(today.getTime() < startdate_datetime.getTime()){
            return true;
        }else{
            alert("Start date must be after today!");
            return false;
        }

    }else{
        alert("Please complete the form!");
        return false;
    }
}

const submitButton = document.getElementById("form-submit");
submitButton.addEventListener('click', validateForm);