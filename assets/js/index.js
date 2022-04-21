var principal = document.querySelector(".principal")
var btnVerificar = document.getElementById("verificar");
var bilhetes = document.querySelector(".bilhetes");

btnVerificar.addEventListener('click', () => {
    principal.style.height = "403px";
    bilhetes.style.display = "flex";
});