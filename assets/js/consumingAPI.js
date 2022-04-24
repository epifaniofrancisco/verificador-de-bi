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

var estadoCivil = document.getElementById("estado-civil");

var dataEmissao = document.getElementById("data-emissao");
var dataValidade = document.getElementById("data-validade");

var bi = document.getElementById("numero-bi-input").value;
/* 
! API ORIGINAL

? const API = `https://api.gov.ao/consultarBI/v2/?bi=${bi}`;

*/

const API = "http://economia.awesomeapi.com.br/json/last/USD-BRL";

function getAPI(url) {
	let request = new XMLHttpRequest();
	request.open("GET", url, false);
	request.send();

	return request.responseText;
}

var resposta = getAPI(API);
var dados = JSON.parse(resposta);

function postData() {
    primeiroNome.innerHTML = "";
    ultimoNome.innerHTML = "";
    
    primeiroNomePai.innerHTML = "";
    ultimoNomePai.innerHTML = "";
    
    primeiroNomeMae.innerHTML = "";
    ultimoNomeMae.innerHTML = "";
    
    numberoBI.innerHTML = "";
    
    enderecoResidencia.innerHTML = "";
    bairroResidencia.innerHTML = "";
    municipioResidencia.innerHTML = "";

    
    municipioNascimento.innerHTML = "";
    provinciaNascimento.innerHTML = "";
    dataNascimento.innerHTML = "";
    
    estadoCivil.innerHTML = "";
    
    dataEmissao.innerHTML = "";
    dataValidade.innerHTML = "";
}