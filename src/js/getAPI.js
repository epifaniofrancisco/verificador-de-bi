export function getAPI(url) {
	let request = new XMLHttpRequest();
	request.open("GET", url, false);
	request.send();

	return request.responseText;
}
