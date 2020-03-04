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
    let entryObject = { // save the form values as an object
        fistName : fNameInput.value,
        lastName : lNameInput.value,
        email : emailInput.value,
        message : messageInput.value,
    }
    console.log(`First Name : ${entryObject.fistName}\nLast Name : ${entryObject.lastName}\nEmail Address : ${entryObject.email}\nMessage : ${entryObject.message}`); // print the form values as a formatted string from the object
}
 // add event listener on click
formSubmissionBtn.addEventListener("click", submitForm); 