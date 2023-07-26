const email_data = localStorage.getItem("email");

function asignnValueEmail() {
    const inputEmail = document.getElementById('emailUser');
    inputEmail.value = email_data;
}

window.onload = function() {
    asignnValueEmail();
};