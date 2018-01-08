var convertGallonstoLiters = function(gallon) {
	return gallon / 0.26417;
};

var gallon = parseInt(prompt('Enter gallons: '));

var result = convertGallonstoLiters(gallon).toFixed(2);

alert(result);
