console.log("CW Linked");

let formSubmissionBtn = document.querySelector("#submitForm");

submitForm = (event) => {
    event.preventDefault();
    console.log("Form submitted");
}

formSubmissionBtn.addEventListener("click", submitForm);