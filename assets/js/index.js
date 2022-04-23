var principal = document.querySelector(".principal");
var btnVerificar = document.getElementById("verificar");
var bilhetes = document.querySelector(".bilhetes");
var fields = document.querySelectorAll("[required]");

function validateField(field) {
	function validarBI(bi) {
		const regex = /\d{9}[A-Za-z]{2}\d{3}$/;

		return regex.test(bi);
	}

	function verifyErrors() {
		let foundError = false;

		for (let error in field.validity) {
			if (field.validity[error] && !field.validity.valid) {
				foundError = error;
			}
		}

		return foundError;
	}

	function customMessage(typeError) {
		const messages = {
			text: {
				valueMissing: "Digite um número de BI válido",
			},
		};

		return messages[field.type][typeError];
	}

	function setCustomMessage(message) {
		const spanError = field.parentNode.querySelector("span.error");

		if (message) {
			spanError.classList.add("active");
			spanError.innerHTML = message;
		} else {
			spanError.classList.remove("active");
			spanError.innerHTML = "";
		}
	}

	return function () {
		const error = verifyErrors();

		if (error) {
			const message = customMessage(error);
			setCustomMessage(message);
		} else {
			if (!validarBI(field.value)) {
				setCustomMessage("Digite um número de BI válido");
			} else {
				field.style.borderColor = "green";
				setCustomMessage();
				btnVerificar.addEventListener("click", () => {
					principal.style.height = "403px";
					bilhetes.style.display = "flex";
				});
			}
		}
	};
}

// Mudar o estilo e forma de validação
function validar(event) {
	const field = event.target;
	const validation = validateField(field);

	validation();
}
for (let field of fields) {
	field.addEventListener("invalid", (event) => {
		// Eliminar o bubble
		event.preventDefault();
		validar(event);
	});
	field.addEventListener("blur", validar);
}
