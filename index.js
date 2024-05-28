const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm_password");

const passwordSpan = document.querySelector(".password-span");
const confirmPassSpan = document.querySelector(".confirm-pass-span");

const belowPasswords = document.querySelectorAll(".tip");

//will check if the values of the passwords are the same
function checkPasswords(){
    if (password.value !== confirmPass.value){
        return false;
    }
    return true;
}


//will check if both input values doesn't contain any characters
function checkIfEmpty(){
    if (password.value.length === 0 && confirmPass.value.length === 0){
        return true;
    }
    return false;
}

// change color of the border for the passwords input
// and span text depending on color
function changeBorderColor(color){
    if(color === "transparent"){
        passwordSpan.style.color = "white";
        confirmPassSpan.style.color= "white";
        password.style.border = color;
        confirmPass.style.border = color;
        belowPasswords.forEach(span => {
            span.textContent = "Minimum of 8 characters.";
        });
    }else{
        passwordSpan.style.color = color;
        confirmPassSpan.style.color= color;
        password.style.border = `2.5px solid ${color}`;
        confirmPass.style.border = `2.5px solid ${color}`;
    }
}

/* 
    change the color of the border for password input depending if the fields are both empty,
    or the confirm field is empty, or the passwords match or don't match
*/
document.querySelector("#user-info").addEventListener("input", (event) => {
    if(event.target.id === "password" || event.target.id === "confirm_password"){
    
        if (confirmPass.value.length === 0){
            if(password.style.borderColor !== "transparent"){
                changeBorderColor("transparent");
            }
        }else{
            if(checkIfEmpty()){
                changeBorderColor("transparent");
            //if the passwords match
            }else if (checkPasswords()){
                changeBorderColor("#32CD32");
                belowPasswords.forEach(span => {
                    span.textContent = "";
                });
            //if the passwords don't match
            }else{
                changeBorderColor("#DC143C");
                belowPasswords.forEach(span => {
                    span.textContent = "Passwords do not match!";
                });
            }
        }
       
    }
}
);