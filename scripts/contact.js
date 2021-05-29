const form = document.querySelector("form");
const fullname = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const success = document.querySelector("#success");

const errorName = document.querySelector("#errorName");
const errorEmail = document.querySelector("#errorEmail");
const errorSubject = document.querySelector("#errorSubject");
const errorMessage = document.querySelector("#errorMessage");

form.addEventListener("submit", formValidation);

function formValidation(form) {
    form.preventDefault();

    // Name
    let enteredName = fullname.value.trim();
    errorName.innerHTML = "";
    if (enteredName.length < 5) {
        errorName.innerHTML += "Name must be a minimum of 5 characters";
    }
    if (/\d/.test(enteredName)){
        errorName.innerHTML += "Name can't contain digits!";
    }

    // Email
    let enteredEmail = email.value.trim();
    errorEmail.innerHTML = "";
    let emailpattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailpattern.test(enteredEmail)) {
        errorEmail.innerHTML += "Please enter a valid email!";
    }

    // Subject
    let enteredSubject = subject.value.trim();
    errorSubject.innerHTML = "";
    if (enteredSubject.length < 15) {
        errorSubject.innerHTML += "Subject must be a minimum of 15 characters!";
    }

    // Message
    let enteredMessage = message.value.trim();
    errorMessage.innerHTML = "";
    if (enteredMessage.length < 25) {
        errorMessage.innerHTML = "Message must be a minimum of 25 characters!";
    }

    // Success
    if (errorName.innerHTML === "" && errorEmail.innerHTML === "" && errorSubject.innerHTML === "" && errorMessage.innerHTML === "") {
        success.innerHTML = "Message sent!"
    }
};