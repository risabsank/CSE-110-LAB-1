function formFunction() {
    const emailAddress = document.getElementById("email").value;
    window.alert("Email Registered: " + emailAddress)
}

window.onload = function () {
    document.getElementById("subscribe-form").addEventListener("submit", formFunction);
}
