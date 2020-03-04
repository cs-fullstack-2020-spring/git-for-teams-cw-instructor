console.log("CW Linked"); // sanity check

// select submit button
let formSubmissionBtn = document.querySelector("#submitForm");
// select form fields
let fNameInput= document.querySelector("#fName");
let lNameInput= document.querySelector("#lName");
let emailInput= document.querySelector("#email");
let messageInput= document.querySelector("#message");

// define event handler call back arrow function
submitForm = (event) => {
    event.preventDefault(); // stop the page from reloading
    alert("Form Submitted"); // alert the user
    let submissionObject = { // save the form values as an object
        fistName : fNameInput.value,
        lastName : lNameInput.value,
        email : emailInput.value,
        message : messageInput.value,
    }
    console.log(`First Name : ${submissionObject.fistName}\nLast Name : ${submissionObject.lastName}\nEmail Address : ${submissionObject.email}\nMessage : ${submissionObject.message}`); // print the form values as a formatted string from the object
}
 // add event listener on click
formSubmissionBtn.addEventListener("click", submitForm); 