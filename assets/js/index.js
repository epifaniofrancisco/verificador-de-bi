import { validateBi } from "./validateBi.js";
import { showData } from "./showData.js";

const FORM = document.getElementById("form");
const INPUT = document.getElementById("numero-bi-input");

FORM.addEventListener("submit", (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const inputValue = INPUT.value.trim().toUpperCase();

	if (inputValue === "") {
		// mostrar erro
		setErrorFor(INPUT, "Preencha esse campo");
	} else if (!validateBi(inputValue)) {
		setErrorFor(INPUT, "Digite um número de BI válido");
	} else {
		// adicionar a classe de sucesso
		setSuccessFor(INPUT);
		showData();
	}
}

export function setErrorFor(input, message) {
	const inputGroup = input.parentElement;
	const span = inputGroup.querySelector("span");

	span.innerText = message;
	span.classList.add("active");
	inputGroup.className = "input-group error";
	
	INPUT.focus();
}

function setSuccessFor(input) {
	const inputGroup = input.parentElement;

	inputGroup.className = "input-group success";
}
