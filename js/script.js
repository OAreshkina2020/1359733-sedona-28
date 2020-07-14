var appointmentButoon = document.querySelector(".appointment-button");
var appointmentFormBox = document.querySelector(".input-form");

appointmentButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    appointmentFormBox.classList.add("appointment-form-show");
});

