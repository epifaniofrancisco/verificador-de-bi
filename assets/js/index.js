var principal = document.querySelector(".principal");
var btnVerificar = document.getElementById("verificar");
var bilhetes = document.querySelector(".bilhetes");

const form = document.getElementById("form");
const inputBI = document.getElementById("numero-bi-input");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const inputValue = inputBI.value.trim();

	if (inputValue === "") {
		// mostrar erro
		// add classe
		setErrorFor(inputBI, "Preencha esse campo");
	} else if (!validarBI(inputValue)) {
		setErrorFor(inputBI, "Digite um número de BI válido");
	} else {
		// adicionar a classe de sucesso
		setSuccessFor(inputBI);
		// ! Resolver o problema do button que tem que ser clicado duas vezes para funcionar
		showBI()
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const span = formControl.querySelector("span");

	span.innerText = message;
	span.classList.add("active");
	formControl.className = "input-group error";
}

function setSuccessFor(input) {
	const formControl = input.parentElement;

	formControl.className = "input-group success";
}

function validarBI(bi) {
	const regex = /\d{9}[A-Za-z]{2}\d{3}$/;

	return regex.test(bi);
}

function showBI() {
	btnVerificar.addEventListener("click", () => {
		principal.style.height = "403px";
		bilhetes.style.display = "flex";
	});
}
