var convertGallonstoLiters = function(gallon) {
	return gallon / 0.26417;
};

var gallon = parseInt(prompt('Enter gallons: '));

var result = convertGallonstoLiters(gallon).toFixed(2);

alert(result);

var convertLiterstoGallons = function(liters) {
	return liters * 0.26417;
};

var liters = parseInt(prompt('Enter liters: '));

var result = convertLiterstoGallons(liters).toFixed(2);

alert(result);

var convertOuncetoCup = function(ounce) {
	return ounce * 0.125;
};

var ounce = parseInt(prompt('Enter ounces: '));

var result = convertOuncetoCup(ounce).toFixed(2);

alert(result);

var convertCupstoGallons = function(cups) {
	return cups / 16;
};

var cups = parseInt(prompt('Enter cups: '));

var result = convertCupstoGallons(cups).toFixed(2);

alert(result);
