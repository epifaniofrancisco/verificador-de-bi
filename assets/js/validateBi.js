export function validateBi(bi) {
	const regex = /\d{9}[A-Za-z]{2}\d{3}$/;

	return regex.test(bi);
}
