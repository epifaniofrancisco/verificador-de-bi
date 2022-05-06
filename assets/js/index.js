var principal = document.querySelector(".principal");
var btnVerificar = document.getElementById("verificar");
var bilhetes = document.querySelector(".bilhetes");
const form = document.getElementById("form");
const inputBI = document.getElementById("numero-bi-input");

// ! Dados do BI
// Bilhete parte frontal
var primeiroNome = document.getElementById("primeiro-nome");
var ultimoNome = document.getElementById("ultimo-nome");

var primeiroNomePai = document.getElementById("primeiro-nome-pai");
var ultimoNomePai = document.getElementById("ultimo-nome-pai");

var primeiroNomeMae = document.getElementById("primeiro-nome-mae");
var ultimoNomeMae = document.getElementById("ultimo-nome-mae");

var numberoBI = document.getElementById("numero-bi");

// Bilhete parte traseira
var enderecoResidencia = document.getElementById("endereco-residencia");
var bairroResidencia = document.getElementById("bairro-residencia");
var municipioResidencia = document.getElementById("municipio-residencia");

var municipioNascimento = document.getElementById("municipio-nascimento");
var provinciaNascimento = document.getElementById("provincia-nascimento");
var dataNascimento = document.getElementById("data-nascimento");

var sexo = document.getElementById("sexo");
var estadoCivil = document.getElementById("estado-civil");

var dataEmissao = document.getElementById("data-emissao");
var dataValidade = document.getElementById("data-validade");

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
		showData();
		showBI();
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

function showData() {
	const oi = inputBI.value.trim();

	const API = `https://api.gov.ao/consultarBI/v2/?bi=${oi}`;

	

	function getAPI(url) {
		let request = new XMLHttpRequest();
		request.open("GET", url, false);
		request.send();

		return request.responseText;
	}

	var resposta = getAPI(API);
	var dados = JSON.parse(resposta);

	function postData() {
		primeiroNome.innerHTML = dados[0]["FIRST_NAME"];
		ultimoNome.innerHTML = dados[0]["LAST_NAME"];

		primeiroNomePai.innerHTML = dados[0]["FATHER_FIRST_NAME"];
		ultimoNomePai.innerHTML = dados[0]["FATHER_LAST_NAME"];

		primeiroNomeMae.innerHTML = dados[0]["MOTHER_FIRST_NAME"];
		ultimoNomeMae.innerHTML = dados[0]["MOTHER_LAST_NAME"];

		numberoBI.innerHTML = dados[0]["ID_NUMBER"];

		enderecoResidencia.innerHTML = dados[0]["RESIDENCE_ADDRESS"];
		bairroResidencia.innerHTML = dados[0]["RESIDENCE_NEIGHBOR"];
		municipioResidencia.innerHTML = dados[0]["RESIDENCE_MUNICIPALITY_NAME"];

		municipioNascimento.innerHTML = dados[0]["BIRTH_MUNICIPALITY_NAME"];
		provinciaNascimento.innerHTML = dados[0]["BIRTH_PROVINCE_NAME"];
		dataNascimento.innerHTML = dados[0]["BIRTH_DATE"];

		sexo.innerHTML = dados[0]["GENDER_NAME"];
		estadoCivil.innerHTML = dados[0]["MARITAL_STATUS_NAME"];

		dataEmissao.innerHTML = dados[0]["ISSUE_DATE"];
		dataValidade.innerHTML = dados[0]["EXPIRY_DATE"];
	}

	if (dados.length === 0) {
		setErrorFor(inputBI, "Esse número do BI não existe! Tente novamente")
	} else {
		postData();
	}
}


