
function validateEmail() {
    let email = document.getElementById("email").value;
    let confirmEmail = document.getElementById("confirmEmail").value;

    if (email !== confirmEmail) {
        alert("Email addresses do not match. Please check again.");
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}
