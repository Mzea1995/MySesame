window.onload = function() {
    var button = document.getElementById('click');
    button.addEventListener('click', myAlert);
}

function myAlert() {
    alert('hola');
}