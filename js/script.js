var appointmentButton = document.querySelector(".appointment-button");
var appointmentFormBox = document.querySelector(".appointment-form-box");

appointmentButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    appointmentFormBox.classList.toggle("appointment-form-show");
    arrival.focus();
});

window.addEventListener("keydown", function (evt) {
    if(evt.keycode === 27) {
    if(appointmentFormBox.classList.contains("appointment-form-show")){
    evt.preventDefault();
    appointmentFormBox.classList.remove("appointment-form-show");
    }
    }
});